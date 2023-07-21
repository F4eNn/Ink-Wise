import { Box, Text } from '@/lib/chakra'
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

export const Note = ({ category, content, id, tagOption, title, index }: NoteProps) => {
	return (
		<Draggable
			draggableId={id}
			index={index}>
			{provided => (
				<Box
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					my='5'
          bg='white'
					border='1px solid orange'
					h='50px'
          fontSize='xs'
					p='3'>
					<Text>{title}</Text>
				</Box>
			)}
		</Draggable>
	)
}
