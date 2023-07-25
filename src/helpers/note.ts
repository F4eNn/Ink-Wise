import { Dispatch, SetStateAction } from 'react'
import { db } from '@/config/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { Notes } from '@/components/core/dashboard/Dashboard'

export const getAllNotes = async (userId: string, setNote: Dispatch<SetStateAction<Notes[] | undefined>>) => {
	const q = query(collection(db, 'notes'), where('userId', '==', userId))
	const notesSnapshot = await getDocs(q)
	const filteredData = notesSnapshot.docs.map(note => ({ ...note.data(), id: note.id } as Notes))
	setNote(filteredData)
}
