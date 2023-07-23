// import { collection, db } from '@/config/firebase'
// import { NoteFormValue } from '@/components/core/create/CreateNote'
// import { doc, setDoc } from 'firebase/firestore'

// export const addNote = async (data: NoteFormValue) => {
// 	const collectionRef = doc(collection(db, 'create-note'))
// 	try {
// 		await setDoc(collectionRef, {
// 			[data.uid]: {
// 				title: data.title,
// 				content: data.content,
// 				category: data.categoryOption,
// 				tagOption: data.tagOption,
// 				uid: data.uid,
// 			},
// 		})
// 	} catch (error) {
// 		console.error(error)
// 	}
// }
