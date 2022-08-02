import { URLSearchParams } from 'url';

const {
	NEXT_PUBLIC_SPOTIFY_CLIENT_ID: client_id,
	NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET: client_secret,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const refresh: any = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

const getAccessToken = async () => {
	const response = await fetch(TOKEN_ENDPOINT, {
		method: 'POST',
		mode: "cors",
		headers: {
			Authorization:`Basic ${basic}`,
			'Content-Type' : 'application/x-www-form-urlencoded',
		},
		body: new URLSearchParams({
			'grant_type': 'refresh_token',
			refresh_token: refresh
		}),
	});
	return response.json();
};
export const getNowPlaying = async () => {
	const {access_token} = await getAccessToken();
	return fetch(NOW_PLAYING_ENDPOINT,{
		method: 'GET',
		mode: "cors",
		headers:{
			Authorization: `Bearer ${access_token}`
		}
	})
};

export default async ( _:any, res:any ) => {
	const response = await getNowPlaying();
	if (response.status === 204 || response.status > 400) {
		return res.status(200).json({ isPlaying: false });
	}

	const song = await response.json();

	const isPlaying = song.is_playing;
	const title = song.item.name;
	const artist = song.item.artists.map((_artist:any) => _artist.name).join(', ');
	const album = song.item.album.name;
	const albumImageUrl = song.item.album.images[0].url;
	const songUrl = song.item.external_urls.spotify;

	return res.status(200).json({
		album,
		albumImageUrl,
		artist,
		isPlaying,
		songUrl,
		title,
	});
};
