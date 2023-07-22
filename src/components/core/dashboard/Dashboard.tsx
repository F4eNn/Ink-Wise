import { db } from '@/config/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Column } from './ui/Column'
import { Flex } from '@/lib/chakra'

export type NoteValues = {
	[x: string]: {
		category: string
		content: string
		tagOption: string
		title: string
		id: string
	}
}
type DashboardColumns = {
	[key in 'column-1' | 'column-2' | 'column-3' | string]: {
		id: key
		title: 'Important' | 'Urgent' | 'Minor'
		taskIds: string[]
	}
}

export type DashboardData = {
	tasks: NoteValues
	columns: DashboardColumns
	columnOrder: ['column-1', 'column-2', 'column-3']
}

export const initialData: DashboardData = {
	tasks: {
		note: {
			category: '',
			content: '',
			id: '',
			tagOption: '',
			title: '',
		},
	},
	columns: {
		'column-1': {
			id: 'column-1',
			title: 'Important',
			taskIds: [],
		},
		'column-2': {
			id: 'column-2',
			title: 'Urgent',
			taskIds: [],
		},
		'column-3': {
			id: 'column-3',
			title: 'Minor',
			taskIds: [],
		},
	},
	columnOrder: ['column-1', 'column-2', 'column-3'],
}
interface DashboardProps {
	getNotesPositions: React.Dispatch<React.SetStateAction<DashboardData>>
	noteState: DashboardData
}

export const Dashboard = ({ getNotesPositions, noteState }: DashboardProps) => {
	const { authUser } = useAuth()
	const userId = authUser?.uid
	const uniqueTaskIds = new Set()

	useEffect(() => {
		if (!authUser) return
		const q = query(collection(db, 'create-note'), where('uid', '==', userId))
		const getNotes = async () => {
			const querySnapshot = await getDocs(q)

			getNotesPositions((prev: DashboardData) => {
				const newNote = { ...prev }

				querySnapshot.forEach(doc => {
					const noteData = doc.data()
					const taskId = doc.id

					if (!uniqueTaskIds.has(taskId)) {
						newNote.columns['column-1'].taskIds.push(taskId)
						uniqueTaskIds.add(taskId)
					}

					if (Object.keys(newNote.tasks)[0] === 'note') {
						newNote.tasks = {
							[taskId]: {
								category: noteData.category,
								content: noteData.content,
								id: taskId,
								tagOption: noteData.tagOption,
								title: noteData.title,
							},
						}
					} else {
						newNote.tasks = {
							...newNote.tasks,
							[taskId]: {
								category: noteData.category,
								content: noteData.content,
								id: taskId,
								tagOption: noteData.tagOption,
								title: noteData.title,
							},
						}
					}
				})
				return newNote
			})
		}
		getNotes()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [authUser])

	return (
		<Flex gap='5'>
			{noteState.columnOrder.map((columnId: 'column-1' | 'column-2' | 'column-3', index: number) => {
				const column = noteState.columns[columnId]
				const tasks = column.taskIds.map(taskId => noteState.tasks[taskId])
				return (
					<Column
						id={column.id}
						title={column.title}
						key={column.id}
						tasks={tasks}
					/>
				)
			})}
		</Flex>
	)
}
