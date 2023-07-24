// import { collection, db } from '@/config/firebase'
// import { NoteFormValue, initialData } from '@/components/core/create/CreateNote'
// import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'

// export const addNote = async (data: NoteFormValue, userId: string) => {
// 	const docRef = doc(db, 'notes', userId!)

// 	try {
// 		const docSnap = await getDoc(docRef)

// 		if (docSnap.exists()) {
// 			const currentSnap = docSnap.data()

// 			const newData = {
// 				tasks: [...currentSnap.tasks, data],
// 				column: {
// 					...currentSnap.column,
// 					taskIds: [...currentSnap.column.taskIds, data.id],
// 				},
// 			}
// 			await updateDoc(docRef, newData)
// 		} else {
// 			const newData = {
// 				...initialData,
// 				tasks: [data],
// 				column: {
// 					...initialData.column,
// 					taskIds: [data.id],
// 				},
// 			}
// 			await setDoc(docRef, newData)
// 		}
// 	} catch (error) {
// 		console.error(error)
// 	}
// }
