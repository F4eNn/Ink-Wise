import React, { Dispatch, SetStateAction } from 'react'
import { Box, Button, Container as ChakraContainer, Flex, Heading, Text, useColorMode } from '@/lib/chakra'
import { BiSolidBookmarkAlt } from 'react-icons/bi'
import { BsCircleFill } from 'react-icons/bs'
import { motion } from '@/lib/motion'
import { projectAnimation } from './animations/animations'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/config/firebase'
import { getAllNotes } from '@/helpers/note'
import { Notes } from './Dashboard'


interface ContainerProps {
	content: string
	category: string
	tag: string
	title: string
	id: string
	userId: string
	setNewNotes: Dispatch<SetStateAction<Notes[] | undefined>>
}

export const Note = ({ tag, category, content, title, id, setNewNotes, userId }: ContainerProps) => {
	const { colorMode } = useColorMode()

	const deleteNote = async (noteId: string) => {
		const noteDoc = doc(db, 'notes', noteId)
		await deleteDoc(noteDoc)
		await getAllNotes(userId, setNewNotes)
	}

	const getColorByCategory = (category: string) => {
		switch (category) {
			case 'work':
				return 'gold'
			case 'study':
				return 'royalblue'
			case 'personal':
				return 'green.300'
			default:
				return 'gray'
		}
	}
	const getColorByTag = (tag: string) => {
		switch (tag) {
			case 'urgent':
				return 'blue.400'
			case 'important':
				return 'red.500'
			case 'minor':
				return 'gray'
			default:
				return 'gray'
		}
	}
	return (
		<ChakraContainer
			as={motion.div}
			{...projectAnimation}
			rounded='2xl'
			borderColor={'primary.900'}
			borderBottomWidth='1px'
			borderLeftWidth='1px'
			borderRightWidth='1px'
			transition='.3s linear'
			_hover={{
				boxShadow: `0px 2px 3px 1px  ${colorMode === 'dark' ? '#e49800' : '#c4c4c4f7'}`,
			}}
			w='500px'>
			<Box>
				<Flex
					justifyContent='space-between'
					alignItems='center'>
					<Heading
						my={'5'}
						as='h2'
						fontSize='xl'>
						{title}
					</Heading>
					<Box color={getColorByCategory(category)}>
						<BiSolidBookmarkAlt size='2em' />
					</Box>
				</Flex>
				<Box
					my='5'
					fontSize='xs'
					p='3'>
					<Text>{content}</Text>
				</Box>
				<Flex
					alignItems='center'
					gap='2'
					textTransform='capitalize'
					color={getColorByTag(tag)}
					fontSize='xs'>
					<BsCircleFill size='.7em' />
					<Text as='span'>{tag}</Text>
				</Flex>
				<Button onClick={() => deleteNote(id)}>Delete</Button>
				<Button
					as={motion.button}
					variant='primary'
					whileTap={{ scale: 0.9 }}
					my='5'
					ml='auto'
					display='block'>
					Details
				</Button>
			</Box>
		</ChakraContainer>
	)
}
