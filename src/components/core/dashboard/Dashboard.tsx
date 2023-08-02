'use client'
import React, { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Note } from './Note'
import { Flex } from '@/lib/chakra'
import { NoteValues } from '../create/CreateNote'
import { Card } from '../user/ui/Card'
import { getAllNotes } from './helpers/note'
import { Heading } from '@/components/ui/Heading'

export type Notes = NoteValues & { id: string }

export const Dashboard = () => {
	const { authUser } = useAuth()
	const userId = authUser?.uid

	const [notes, setNotes] = useState<Notes[]>()

	useEffect(() => {
		if (!userId) return
		getAllNotes(userId, setNotes)
	}, [userId])

	if (!userId) return
	const note = notes?.map(item => (
		<Note
			key={item.id}
			{...item}
			setNewNotes={setNotes}
			userId={userId}
		/>
	))

	return (
		<Card>
			<Heading title='Your Notes' />
			<Flex
				flexWrap='wrap'
				gap='9'>
				{note}
			</Flex>
		</Card>
	)
}
