import { User, db, updateUser, updateEmail} from '@/config/firebase'
import { doc, setDoc } from 'firebase/firestore'

interface PersonalData {
	name: string
	email: string
	password: string
}


export interface FormData extends PersonalData {
	bio: string
}

export const setInitData = async (userId: string) => {
	await setDoc(doc(db, 'user-profile', userId), { bio: '' })
}

export const setProfileUpdate = async (data: FormData, userId: string | undefined) => {
	if (!userId) return
	try {
		const setBio = await setDoc(doc(db, 'user-profile', userId), {
			bio: data.bio,
		})
	} catch (error) {
		console.error(error)
	}
}

export const updateProfile = ({ name }: Pick<FormData, 'name'>, authUser: User | null) => {
	updateUser(authUser as User, {
		displayName: name,
	})
}

export const updateEmaill = async ({ email }: Pick<FormData, 'email'>, authUser: User | null) => {
	try {
		updateEmail(authUser as User, email)
	} catch (error) {
		console.error(error)
	}
}


