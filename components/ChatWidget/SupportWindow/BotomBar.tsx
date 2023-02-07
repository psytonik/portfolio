import {Button, FormControl, Input} from "@chakra-ui/react";
import React, {FormEvent, useState} from "react";

const BottomBar = (props:any) => {
	const [value, setValue] = useState<string | undefined>('');
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		props.setQuestion(value);
		setValue('');
	}
	return (
		<form onSubmit={(event:FormEvent) => handleSubmit(event)}>
			<FormControl p={1} >
				<Input
					placeholder="Ask your question"
					value={value}
					onChange={(e)=>setValue(e.target.value)}
					autoComplete="off"/>
				<Button
					type="submit"
					hidden
				>Send</Button>
			</FormControl>
		</form>
	)
}
export default BottomBar;
