import { db } from '@/config/firebase'
import { useAuth } from '@/hooks/useAuth'
import { Box, Button, Heading, Text } from '@/lib/chakra'
import { FieldValue, arrayRemove, arrayUnion, deleteField, doc, getDoc, updateDoc } from 'firebase/firestore'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export type NoteProps = {
	category: string
	content: any
	tagOption: string
	title: string
	id: string
	index: number
}

export const Note = () => {
	const { authUser } = useAuth()
	const userId = authUser?.uid

	return (
		<Box
			my='5'
			fontSize='xs'
			p='3'>
			<Text>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde et fuga molestias. Vitae fuga sed illo, aliquid
				repellendus explicabo eligendi?
			</Text>
		</Box>
	)
}
