import React, { Dispatch, SetStateAction } from 'react'
import { ModalOverlay } from './ui/ModalOverlay'
import { ModalContent } from './ui/ModalContent'
import { ModalCloseButton, ModalFooter, Button } from '@/lib/chakra'
import { ModalHeader } from './ui/ModalHeader'
import { ModalBody } from './ui/ModalBody'

import { deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from '@/config/firebase'
import { getAllNotes } from './helpers/note'

import { NoteForm, NoteFormValue } from '../create/NoteForm'
import { Notes } from './Dashboard'

interface EditNoteProps {
	isOpen: boolean
	onClose: () => void
	title: string
	content: string
	category: string
	tag: string
	userId: string
	noteId: string
	setNewNotes: Dispatch<SetStateAction<Notes[] | undefined>>
}

type UpdateNote = {
	title: string
	content: string
	tag: string
	category: string
	noteId: string
}

export const EditNote = ({
	isOpen,
	onClose,
	title,
	content,
	tag,
	category,
	setNewNotes,
	userId,
	noteId,
}: EditNoteProps) => {
	const deleteNote = async (noteId: string) => {
		const noteDoc = doc(db, 'notes', noteId)
		await deleteDoc(noteDoc)
		await getAllNotes(userId, setNewNotes)
	}
	const updateNote = async ({ category, content, noteId, tag, title }: UpdateNote) => {
		const noteDoc = doc(db, 'notes', noteId)
		await updateDoc(noteDoc, { title: title, content: content, category: category, tag: tag })
		await getAllNotes(userId, setNewNotes)
	}
	const onUpdate = async (data: NoteFormValue) => {
		updateNote({ ...data, noteId })
		onClose()
	}
	return (
		<ModalOverlay
			isOpen={isOpen}
			onClose={onClose}>
			<ModalContent>
				<ModalHeader title={`Edit: ${title}`} />
				<ModalCloseButton />
				<ModalBody>
					<NoteForm
						applyReset={false}
						onSendForm={onUpdate}
						category={category}
						content={content}
						tag={tag}
						title={title}
						buttonDesc='Update'
					/>
				</ModalBody>
				<ModalFooter>
					<Button
						bg='error'
						onClick={() => deleteNote(noteId)}>
						Delete
					</Button>
				</ModalFooter>
			</ModalContent>
		</ModalOverlay>
	)
}
