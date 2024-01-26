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
		const stream: any = openAi.beta.chat.completions.stream({
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
			stream: true
		});

		const chatCompletion = await stream.finalChatCompletion();
		return res.status(200).json({answer:chatCompletion.choices[0]?.message.content})
	} catch (error: any) {
		return res.status(502).json({ answer: error.message})
	}
}
