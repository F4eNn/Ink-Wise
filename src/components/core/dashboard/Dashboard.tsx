'use client'
import React, { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Note } from './Note'
import { Box, Flex, VStack } from '@/lib/chakra'
import { NoteValues } from '../create/CreateNote'
import { Card } from '../user/ui/Card'
import { getAllNotes } from './helpers/note'
import { Heading } from '@/components/ui/Heading'
import { EmptyIcon } from '@/components/ui/EmptyIcon'

import { MotionNextLink } from '@/components/ui/MotionNextLink'

export type Notes = NoteValues & { id: string }

export const Dashboard = () => {
	const { authUser } = useAuth()
	const userId = authUser?.uid

	const [notes, setNotes] = useState<Notes[]>()

	const isEmptyDashboard = notes?.length === 0

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
			<Flex flexDirection='column'>
				<Heading title='Your Notes' />
				{isEmptyDashboard && (
					<VStack>
						<Box w='300px'>
							<EmptyIcon />
						</Box>
						<MotionNextLink url={`${authUser?.displayName}/note`}>Add your first note</MotionNextLink>
					</VStack>
				)}
				<Flex
					flexWrap='wrap'
					gap='9'>
					{note}
				</Flex>
			</Flex>
		</Card>
	)
}
