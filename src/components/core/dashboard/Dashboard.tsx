'use client'
import { db } from '@/config/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Column } from './ui/Column'

type NoteValues = {
	notes: {
		[x: string]: {
			category: string
			content: string
			tagOption: string
			title: string
		}
	}
}

export type ColumnsType = {
	columns: {
		'column-1': {
			id: 'column-1'
			title: 'Important'
			taskIds: string[]
		}
		'column-2': {
			id: 'column-2'
			title: 'Urgent'
			taskIds: string[]
		}
		'column-3': {
			id: 'column-3'
			title: 'Minor'
			taskIds: string[]
		}
	}
	columnOrder: ['column-1', 'column-2', 'column-3']
}

type Dashboard = NoteValues & ColumnsType

const initialData: Dashboard = {
	notes: {
		uid: {
			category: '',
			content: '',
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

export const Dashboard = () => {
	const [noteState, setNoteState] = useState<Dashboard>(initialData)

	const { authUser } = useAuth()
	const userId = authUser?.uid

	useEffect(() => {
		if (!authUser) return
		const q = query(collection(db, 'create-note'), where('uid', '==', userId))
		const getNotes = async () => {
			const querySnapshot = await getDocs(q)

			setNoteState(prev => {
				const newNote = { ...prev }

				newNote.columns['column-1'].taskIds = []
				newNote.columns['column-2'].taskIds = []
				newNote.columns['column-3'].taskIds = []

				querySnapshot.forEach(doc => {
					const noteId = doc.id
					const noteData = doc.data()

					const toColumn1 = noteData.tagOption === 'important'
					const toColumn2 = noteData.tagOption === 'urgent'
					const toColumn3 = noteData.tagOption === 'minor'

					newNote.notes[noteId] = {
						category: noteData.category,
						content: noteData.content,
						tagOption: noteData.tagOption,
						title: noteData.title,
					}
					if (toColumn1) {
						newNote.columns['column-1'] = {
							...newNote.columns['column-1'],
							taskIds: [...newNote.columns['column-1'].taskIds, noteId],
						}
					}
					if (toColumn2) {
						newNote.columns['column-2'] = {
							...newNote.columns['column-2'],
							taskIds: [...newNote.columns['column-2'].taskIds, noteId],
						}
					}

					if (toColumn3) {
						newNote.columns['column-3'] = {
							...newNote.columns['column-3'],
							taskIds: [...newNote.columns['column-3'].taskIds, noteId],
						}
					}
				})

				return newNote
			})
		}
		getNotes()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [authUser])
	console.log(noteState)
	return (
		<div>
			{/* {noteState.columnOrder.map((columnId: 'column-1' | 'column-2' | 'column-3', index: number) => {
				const column = noteState.columns[columnId]
				return ''
			})} */}
		</div>
	)
}
