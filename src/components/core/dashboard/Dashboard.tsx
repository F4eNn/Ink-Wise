import { db } from '@/config/firebase'
import React, { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Container } from './ui/Container'
import { Flex, Heading } from '@/lib/chakra'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { NoteValues } from '../create/CreateNote'
import { Card } from '../user/ui/Card'

type Note = NoteValues & { id: string }

export const Dashboard = () => {
	const { authUser } = useAuth()
	const userId = authUser?.uid

	const [notes, setNotes] = useState<Note[]>()

	// const getAllNotes = async () => {
	// 	const q = query(collection(db, 'notes'), where('userId', '==', userId))
	// 	const notesSnapshot = await getDocs(q)
	// 	const filteredData = notesSnapshot.docs.map(note => ({ ...note.data(), id: note.id } as Note))
	// 	setNotes(filteredData)
	// }

	// useEffect(() => {
	// 	if (!userId) return
	// 	getAllNotes()
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [userId])

	return (
		<Card>
			<Flex flexDir='column'>
				<Heading
					as='h1'
					mb='16'>
					Your Notes
				</Heading>
				<Flex
					flexWrap='wrap'
					gap='10'>
					<Container tag='important' />
					<Container tag='urgent' />
					<Container tag='urgent' />
					<Container tag='minor' />
					<Container tag='important' />
					<Container tag='urgent' />
					<Container tag='important' />
					<Container tag='urgent' />
					<Container tag='minor' />
				</Flex>
			</Flex>
		</Card>
	)
}
