import { addDoc, collection, db } from '@/config/firebase'
import { useAuth } from '@/hooks/useAuth'
import { deleteDoc, doc, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Card } from '../user/ui/Card'
import { NoteContainer } from '../dashboard/ui/NoteContainer'
import { NoteHeading } from '../dashboard/ui/NoteHeading'
import { Box, Button, Flex, useDisclosure } from '@/lib/chakra'
import { Content } from '../dashboard/ui/Content'
import { Tag } from '../dashboard/ui/Tag'
import { Heading } from '@/components/ui/Heading'

import { Modal } from './ui/Modal'

type TrashNoteValues = {
	category: string
	created: string
	content: string
	tag: string
	userId: string
	title: string
	id: string
}

export const Bin = () => {
	const [trashNotes, setTrashNotes] = useState<TrashNoteValues[]>()
	const { isOpen, onClose, onOpen } = useDisclosure()

	const { authUser } = useAuth()
	const userId = authUser?.uid

	const getTrashNotes = async () => {
		const q = query(collection(db, 'bin'), where('userId', '==', userId))
		try {
			const binSnapshot = await getDocs(q)
			const convertData = binSnapshot.docs.map(item => ({ ...item.data(), id: item.id } as TrashNoteValues))
			setTrashNotes(convertData)
		} catch (err) {
			console.error(err)
		}
	}
	const deleteNote = async (id: string) => {
		const noteDoc = doc(db, 'bin', id)
		try {
			await deleteDoc(noteDoc)
			await getTrashNotes()
		} catch (err) {
			console.error(err)
		}
	}

	const restoreNote = async (data: TrashNoteValues) => {
		const { category, content, created, title, tag, userId } = data
		const noteRef = collection(db, 'notes')

		await addDoc(noteRef, {
			category,
			content,
			created,
			title,
			tag,
			userId,
		})
		await deleteNote(data.id)
		await getTrashNotes()
	}

	useEffect(() => {
		if (!userId) return
		getTrashNotes()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userId])

	return (
		<>
			<Card>
				<Flex
					flexDir='column'
					gap='10'>
					<Heading title='Forgotten Notes' />
					{trashNotes?.map((note: any) => (
						<NoteContainer key={note.noteId}>
							<NoteHeading
								category={note.category}
								title={note.title}
							/>
							<Content content={note.content} />
							<Box>
								<Tag tag={note.tag} />
							</Box>
							<Flex
								justifyContent='space-between'
								my='8'>
								<Button onClick={() => restoreNote(note)}>Restore</Button>
								<Button onClick={onOpen}>Remove</Button>
							</Flex>
							<Modal
								deleteNote={deleteNote}
								id={note.id}
								isOpen={isOpen}
								onClose={onClose}
							/>
						</NoteContainer>
					))}
				</Flex>
			</Card>
		</>
	)
}
