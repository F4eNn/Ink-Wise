'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Note } from './Note'
import { Box, Button, Flex, Link, VStack } from '@/lib/chakra'
import { NoteValues } from '../create/CreateNote'
import { Card } from '../user/ui/Card'
import { getAllNotes } from './helpers/note'
import { Heading } from '@/components/ui/Heading'
import { EmptyIcon } from '@/components/ui/EmptyIcon'
import NextLink from 'next/link'
import { LinkProps } from '@chakra-ui/react'
import { motion } from '@/lib/motion'
import { linkVariant } from './animations/animations'

export type Notes = NoteValues & { id: string }

interface MotionNextLinkProps extends LinkProps {
	children: ReactNode
}
const MotionNextLink = motion<MotionNextLinkProps>(Link)

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
						<MotionNextLink
							as={NextLink}
							variants={linkVariant}
							variant='linkButton'
							color='#fff'
							initial='hidden'
							animate='visible'
							w='300px'
							href={`${authUser?.displayName}/note`}>
							Add your first note
						</MotionNextLink>
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
