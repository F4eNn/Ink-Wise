import React, { Dispatch, SetStateAction, Suspense } from 'react'
import { Box, Flex, useDisclosure } from '@/lib/chakra'

import { getAllNotes } from './helpers/note'
import { Notes } from './Dashboard'

import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/config/firebase'

import { NoteHeading } from './ui/NoteHeading'
import { Content } from './ui/Content'
import { Tag } from './ui/Tag'
import { NoteContainer } from './ui/NoteContainer'
import { Details } from './Details'
import { Button } from './ui/Button'

interface ContainerProps {
	content: string
	category: string
	tag: string
	title: string
	id: string
	created: string
	userId: string
	setNewNotes: Dispatch<SetStateAction<Notes[] | undefined>>
}

export const Note = ({ tag, category, content, title, id, setNewNotes, userId, created }: ContainerProps) => {
	const { isOpen, onClose, onOpen } = useDisclosure()

	const deleteNote = async (noteId: string) => {
		const noteDoc = doc(db, 'notes', noteId)
		await deleteDoc(noteDoc)
		await getAllNotes(userId, setNewNotes)
	}
	return (
		<NoteContainer>
			<NoteHeading
				category={category}
				title={title}
			/>
			<Content content={content} />
			<Details
				category={category}
				content={content}
				title={title}
				isOpen={isOpen}
				onClose={onClose}
				tag={tag}
				created={created}
			/>
			<Box ml='3'>
				<Tag tag={tag} />
			</Box>
			<Flex
				justifyContent='space-between'
				mt='5'>
				<Button>Edit</Button>
				<Button onInteraction={onOpen}>Details</Button>
			</Flex>
		</NoteContainer>
	)
}
