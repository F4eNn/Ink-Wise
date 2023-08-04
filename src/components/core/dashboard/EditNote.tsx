import React, { Dispatch, SetStateAction } from 'react'
import { ModalOverlay } from '../../ui/modal/ModalOverlay'
import { ModalContent } from '../../ui/modal/ModalContent'
import { ModalCloseButton, ModalFooter, Button } from '@/lib/chakra'
import { ModalHeader } from '../../ui/modal/ModalHeader'
import { ModalBody } from '../../ui/modal/ModalBody'

import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore'

import { getAllNotes } from './helpers/note'

import { NoteForm, NoteFormValue } from '../create/NoteForm'
import { Notes } from './Dashboard'
import { useAuth } from '@/hooks/useAuth'
import { db } from '@/config/firebase'

interface EditNoteProps {
	isOpen: boolean
	onClose: () => void
	title: string
	content: string
	category: string
	tag: string
	userId: string
	noteId: string
	created: string

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
	created,
}: EditNoteProps) => {
	const { Toast } = useAuth()

	const moveToBin = async () => {
		const docRef = collection(db, 'bin')
		await addDoc(docRef, { title, created, category, content, tag, userId, noteId })
	}

	const deleteNote = async (noteId: string) => {
		const noteDoc = doc(db, 'notes', noteId)
		await deleteDoc(noteDoc)
		await moveToBin()
		await getAllNotes(userId, setNewNotes)
		Toast({ isHeading: false, desc: 'Note in trash!' })
	}
	const updateNote = async ({ category, content, noteId, tag, title }: UpdateNote) => {
		const noteDoc = doc(db, 'notes', noteId)
		await updateDoc(noteDoc, { title, content, category, tag })
		await getAllNotes(userId, setNewNotes)
	}
	const onUpdate = async (data: NoteFormValue) => {
		updateNote({ ...data, noteId })
		Toast({ isHeading: false, desc: 'Updated note!' })
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
						variant='danger'
						onClick={() => deleteNote(noteId)}>
						Delete
					</Button>
				</ModalFooter>
			</ModalContent>
		</ModalOverlay>
	)
}
