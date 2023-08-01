import { collection, db } from '@/config/firebase'
import { useAuth } from '@/hooks/useAuth'
import { doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Card } from '../user/ui/Card'
import { NoteContainer } from '../dashboard/ui/NoteContainer'
import { NoteHeading } from '../dashboard/ui/NoteHeading'
import { Box, Button, Flex } from '@chakra-ui/react'
import { Content } from '../dashboard/ui/Content'
import { Tag } from '../dashboard/ui/Tag'

type TrashNoteValues = {
	category: string
	created: string
	content: string
	tag: string
	userId: string
	title: string
	noteId: string
}

export const Bin = () => {
	const [trashNotes, setTrashNotes] = useState<TrashNoteValues[]>()
	const { authUser } = useAuth()
	const userId = authUser?.uid

	useEffect(() => {
		if (!userId) return
		const getTrashNotes = async () => {
			const q = query(collection(db, 'bin'), where('userId', '==', userId))

			const binSnapshot = await getDocs(q)

			const convertData = binSnapshot.docs.map(item => ({ ...item.data(), noteId: item.id } as TrashNoteValues))

			setTrashNotes(convertData)
		}
		getTrashNotes()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userId])

	return (
		<Card>
			<Flex
				flexDir='column'
				gap='10'>
				{trashNotes?.map((note: any) => (
					<NoteContainer key={note.created}>
						<NoteHeading
							category={note.category}
							title={note.title}
						/>
						<Content content={note.content} />
						<Box>
							<Tag tag={note.tag} />
						</Box>
						<Button mt='7' w='full'>Restore</Button>
					</NoteContainer>
				))}
			</Flex>
		</Card>
	)
}
