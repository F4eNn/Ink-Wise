import React, { Dispatch, SetStateAction } from 'react'
import { Box, Button } from '@/lib/chakra'
import { motion } from '@/lib/motion'
import { buttonAnimation } from './animations/animations'
import { getAllNotes } from './helpers/note'
import { Notes } from './Dashboard'

import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/config/firebase'

import { NoteHeading } from './ui/NoteHeading'
import { Content } from './ui/Content'
import { Tag } from './ui/Tag'
import { NoteContainer } from './ui/NoteContainer'

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
	const deleteNote = async (noteId: string) => {
		const noteDoc = doc(db, 'notes', noteId)
		await deleteDoc(noteDoc)
		await getAllNotes(userId, setNewNotes)
	}

	return (
		<NoteContainer>
			<Box>
				<NoteHeading
					category={category}
					title={title}
				/>
				<Content content={content} />
				<Tag tag={tag} />
				<Button
					as={motion.button}
					{...buttonAnimation}
					variant='primary'
					my='5'
					ml='auto'
					display='block'>
					Details
				</Button>
			</Box>
		</NoteContainer>
	)
}
