import OpenAIApi from "openai";
import {Request, Response} from "express";

export default async function smartChat(req:Request,res:Response){
	const openAi: OpenAIApi = new OpenAIApi({
		apiKey: process.env.NEXT_PUBLIC_CHAT_GPT
	});


	const {question} = req.body;

	if(!question) {
		return res.status(422).json({"error":"Unprocessable Entity"})
	}
	const response:any = await openAi.chat.completions.create({
		model: 'gpt-3.5-turbo',
		messages:[
			{
				role: 'system',
				content:'You are private assistant'
			},
			{
				role:"user",
				content:question
			}
		],
		max_tokens: 3600,
		temperature: 0
	})
	// console.log(await response.data.choices[0]?.message.content,' RESPONSE')
	const pared = await response.data.choices[0]?.message.content;
	return res.status(200).json({answer:pared})
}
