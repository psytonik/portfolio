import OpenAIApi from "openai";
import {Request, Response} from "express";

export default async function smartChat(req:Request,res:Response){
	const openAi: OpenAIApi = new OpenAIApi({
		apiKey: process.env.NEXT_PUBLIC_CHAT_GPT,
	});
	try {
		const {question} = req.body;

		if(!question) {
			return res.status(422).json({"error":"Unprocessable Entity"})
		}
		const response: OpenAIApi.Chat.ChatCompletion = await openAi.chat.completions.create({
			model: 'gpt-4-0125-preview',
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
		});
		const pared = response.choices[0]?.message.content;
		return res.status(200).json({answer:pared})
	} catch (error: any) {
		return res.status(502).json({ answer: error.message})
	}
}
