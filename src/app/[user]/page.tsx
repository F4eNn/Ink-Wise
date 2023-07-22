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

		const start = notesPositions.columns[source.droppableId]
		const finish = notesPositions.columns[destination.droppableId]

		if (start === finish) {
			const newTaskIds = Array.from(start.taskIds)
			newTaskIds.splice(source.index, 1)
			newTaskIds.splice(destination.index, 0, draggableId)

			const newColumn = {
				...start,
				taskIds: newTaskIds,
			}

			const newState = {
				...notesPositions,
				columns: {
					...notesPositions.columns,
					[newColumn.id]: newColumn,
				},
			}

			setNotesPositions(newState)
			return
		}

		// Moving from one list to another
		const startTaskIds = Array.from(start.taskIds)
		startTaskIds.splice(source.index, 1)
		const newStart = {
			...start,
			taskIds: startTaskIds,
		}

		const finishTaskIds = Array.from(finish.taskIds)
		finishTaskIds.splice(destination.index, 0, draggableId)
		const newFinish = {
			...finish,
			taskIds: finishTaskIds,
		}

		const newState = {
			...notesPositions,
			columns: {
				...notesPositions.columns,
				[newStart.id]: newStart,
				[newFinish.id]: newFinish,
			},
		}
		setNotesPositions(newState)
	}
	console.log(notesPositions)
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Box
				as='main'
				ml='100px'
				display='flex'
				justifyContent='center'>
				<Dashboard
					getNotesPositions={setNotesPositions}
					noteState={notesPositions}
				/>
			</Box>
		</DragDropContext>
	)
}

export default UserPage
