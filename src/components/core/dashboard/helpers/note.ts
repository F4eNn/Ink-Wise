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

export const getColorByCategory = (category: string) => {
    switch (category) {
        case 'work':
            return 'gold'
        case 'study':
            return 'royalblue'
        case 'personal':
            return 'green.300'
        default:
            return 'gray'
    }
}

export const getColorByTag = (tag: string) => {
    switch (tag) {
        case 'urgent':
            return 'blue.400'
        case 'important':
            return 'red.500'
        case 'minor':
            return 'gray'
        default:
            return 'gray'
    }
}