import React, {useEffect, useState} from 'react';
import {Flex, Text} from "@chakra-ui/react";
import BottomBar from "@components/ChatWidget/SupportWindow/BotomBar";
import * as process from "process";

const ChatForm = () => {
	const [question,setQuestion] = useState<string | undefined>('');
	const [answer, setAnswer] = useState<string | undefined>('');

	const getAnswer = async (question:string| undefined) => {
		if(question !== undefined && question.length > 1){
			const response = await fetch('https://api.openai.com/v1/completions',{
				method:"POST",
				headers: {
					"Content-Type":"application/json",
					"Authorization":`Bearer ${process.env.NEXT_PUBLIC_CHAT_GPT}`
				},
				body: JSON.stringify({
					model:'text-davinci-003',
					prompt:`${question}`,
					temperature:1,
					max_tokens:4000
				})
			})
			const data = await response.json();
			if(data.error){
				return setAnswer(data.error.message);
			}
			return setAnswer(data.choices[0].text);
		}
	}
	useEffect(() => {
		getAnswer(question).then()
		return () => {};
	}, [question]);

 	return (
		<Flex flex={1} direction="column" h="100%" >

			<Flex flex={1} direction="column" pt={3} mx={3} overflowX="scroll" sx={{scrollbarWidth:'none'}}>

				{question && (
					<Flex bg="blue.200" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
						<Text>{question}</Text>
					</Flex>
				)}
				{answer && (
					<Flex bg="gray.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} >
						<Text style={{whiteSpace:'pre-wrap'}}>{answer}</Text>
					</Flex>
				)}

			</Flex>

			<BottomBar setQuestion={setQuestion} />
		</Flex>
	);
};
export default ChatForm;
