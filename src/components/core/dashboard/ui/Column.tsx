import React from 'react'
import { Box, Container, Heading } from '@/lib/chakra'
import { Note } from './Note'
import { Dashboard, NoteValues } from '../Dashboard'
import { Droppable } from 'react-beautiful-dnd'

interface ColumnProps {
	id: string
	title: string
	tasks: {
		category: string
		content: string
		tagOption: string
		title: string
		id: string
	}[]
}

export const Column = ({ id, tasks, title }: ColumnProps) => {
	return (
		<Container
			border='1px solid orange'
			h='800px'
			w='200px'>
			<Heading
				my={'5'}
				fontSize='md'>
				{title}
			</Heading>

			<Droppable droppableId={id}>
				{provided => (
					<Box
						ref={provided.innerRef}
						{...provided.droppableProps}
						p='5'
						bg='grey'
						display='flex'
						flexDir='column'>
						{tasks.map((note, index) => (
							<Note
								key={note.id}
								{...note}
								index={index}
							/>
						))}

						{provided.placeholder}
					</Box>
				)}
			</Droppable>
		</Container>
	)
}
