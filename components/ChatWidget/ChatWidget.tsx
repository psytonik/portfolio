import React from 'react';
import MyAvatar from "@components/ChatWidget/avatar";
import {useDisclosure} from "@chakra-ui/hooks";
import {
	Button, Flex, Heading,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay
} from '@chakra-ui/react';
import ChatForm from "@components/ChatWidget/SupportWindow/ChatForm";

const ChatWidget = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<>
			<MyAvatar
				onClick={onOpen}
				style={{
					position:'fixed',
					bottom: '24px',
					right:'24px',
			}}
			/>
			<Modal onClose={onClose} isOpen={isOpen} size="xl" scrollBehavior={'inside'} >
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<Flex w="100%" p={1} align="center">
							<MyAvatar/>
							<Heading textAlign="center" size="lg" paddingLeft={5}>
								Ask me question 🤠
							</Heading>
						</Flex>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<ChatForm/>
					</ModalBody>
					<ModalFooter>
						<Button onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ChatWidget;

