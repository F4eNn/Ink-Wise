import { db } from '@/config/firebase'
import { useAuth } from '@/hooks/useAuth'
import { Box, Text } from '@/lib/chakra'
import React from 'react'

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
