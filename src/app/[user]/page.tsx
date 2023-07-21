'use client'
import { Box } from '@/lib/chakra'
import React, { useState } from 'react'
import { Dashboard, DashboardData, initialData } from '@/components/core/dashboard/Dashboard'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

const UserPage = () => {
	const [notesPositions, setNotesPositions] = useState<DashboardData>(initialData)

	const onDragEnd = (result: DropResult) => {
		const { destination, source, draggableId } = result

		if (!destination) {
			return
		}
		if (destination.droppableId === source.droppableId && destination.index === source.index) {
			return
		}

		const column = notesPositions.columns[source.droppableId]
		const newTaskIds = Array.from(column.taskIds)

		newTaskIds.splice(source.index, 1)
		newTaskIds.splice(destination.index, 0, draggableId)

		const newColumn = {
			...column,
			taskIds: newTaskIds,
		}
		const newSet = {
			...notesPositions,
			columns: {
				...notesPositions.columns,
				[newColumn.id]: newColumn,
			},
		}

		setNotesPositions(newSet)
	}
	console.log(notesPositions)
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Box
				as='main'
				ml='100px'
				display='flex'
				justifyContent='center'>
				<Dashboard getNotesPositions={setNotesPositions} noteState={notesPositions}/>
			</Box>
		</DragDropContext>
	)
}

export default UserPage
