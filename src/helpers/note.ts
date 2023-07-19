import { db,collection, addDoc } from "@/config/firebase"
import { NoteFormValue } from "@/components/core/create/CreateNote"

export const addNote = async (data: NoteFormValue) => {
    const collectionRef = collection(db, 'create-note')
    try {
        await addDoc(collectionRef, {
            title: data.title,
            content: data.content,
            category: data.categoryOption,
            tagOption: data.tagOption,
        })
    } catch (error) {
        console.error(error)
    }
}