import React, {useState} from 'react';
import {styles} from "@components/ChatWidget/styles";

const MyAvatar = (props:any) => {
	const [hovered, setHovered] = useState<boolean>(false)
	return (
		<div style={props.style}>
			<div
				className="transition-3"
				style={{
					...styles.avatarHello as React.CSSProperties,
					...{opacity:hovered ?'1':'0'}
				}}
				>Hey it's Anthony</div>
			<div
				className="transition-3"
				onMouseEnter={()=>setHovered(true)}
				onMouseLeave={()=>setHovered(false)}
				onClick={()=>props.onClick && props.onClick()}
				style={{
					...styles.chatWithMeButton,
					...{border:hovered ?  '1px solid #4299E1': '4px solid #3182CE'}
				}}>

			</div>
		</div>
	)
}
export default MyAvatar;
