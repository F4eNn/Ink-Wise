
import { useAuth } from '@/hooks/useAuth'
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Card } from '../user/ui/Card'
import { NoteContainer } from '../dashboard/ui/NoteContainer'
import { NoteHeading } from '../dashboard/ui/NoteHeading'
import { Box, Button, Flex, useDisclosure, Heading as ChakraHeading, ListItem } from '@/lib/chakra'
import { Content } from '../dashboard/ui/Content'
import { Tag } from '../dashboard/ui/Tag'

import { Heading } from '@/components/ui/Heading'

import { Modal } from './ui/Modal'
import { CardList } from '../community/ui/CardList'
import { EmptyIcon } from '../../ui/EmptyIcon'
import { db } from '@/config/firebase'

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
	const [noteId, setNoteId] = useState('')
	const { isOpen, onClose, onOpen } = useDisclosure()
	const { Toast } = useAuth()
	const { authUser } = useAuth()
	const userId = authUser?.uid
	const binIsEmpty = trashNotes?.length === 0

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
	const deleteNote = async (id: string, deleteToast: boolean | true = true) => {
		const noteDoc = doc(db, 'bin', id)
		try {
			await deleteDoc(noteDoc)
			await getTrashNotes()
			Toast({ isHeading: false, desc: deleteToast ? 'Deleted note!' : 'Restored note!' })
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
		await deleteNote(data.id, false)
		await getTrashNotes()
	}

	useEffect(() => {
		if (!userId) return
		getTrashNotes()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userId])

	return (
		<>
			<Card mb='unset'>
				<Heading title={!binIsEmpty ? 'Forgotten notes' : 'Bin is empty'} />
				<Flex
					flexDir='column'
					h={{ md: 'calc(100vh - 250px)' }}
					overflow='hidden'>
					<CardList>
						{trashNotes?.map((note: any) => (
							<ListItem
								key={note.noteId}
								w='full'
								minH='275px'
								maxW='450px'>
								<NoteContainer>
									<NoteHeading
										category={note.category}
										title={note.title}
									/>
									<Content content={note.content} />
									<Box>
										<Tag tag={note.tag} />
									</Box>
									<Flex
										justifyContent='flex-end'
										gap='8'
										my='8'>
										<Button
											variant='primary'
											onClick={() => restoreNote(note)}>
											Restore
										</Button>
										<Button
											variant='danger'
											onClick={() => {
												onOpen(), setNoteId(note.id)
											}}>
											Remove
										</Button>
									</Flex>
								</NoteContainer>
							</ListItem>
						))}
					</CardList>
					{binIsEmpty && (
						<Box w='300px'>
							<EmptyIcon />
						</Box>
					)}
				</Flex>
				<Modal
					deleteNote={deleteNote}
					id={noteId}
					isOpen={isOpen}
					onClose={onClose}
				/>
			</Card>
		</>
	)
}
