import { User, db, updateUser, updateEmail, fetchUserCredential, auth, updatePassword } from '@/config/firebase'
import { doc, setDoc } from 'firebase/firestore'

interface PersonalData {
	name: string
	email: string
	password: string
}

export interface FormData extends PersonalData {
	bio: string
}

export interface GeneralInfo {
	name: string
	bio: string

}


export const setInitData = async (userId: string) => {
	await setDoc(doc(db, 'user-profile', userId), { bio: '' })
}

//update general Info
export const updateProfile = ({ name }: Pick<GeneralInfo, 'name'>, authUser: User | null) => {
	updateUser(authUser as User, {
		displayName: name,
	})
}

export const setProfileUpdate = async (data: Pick<GeneralInfo, 'bio'>, userId: string | undefined) => {
	if (!userId) return
	try {
		const setBio = await setDoc(doc(db, 'user-profile', userId), {
			bio: data.bio,
		})
	} catch (error) {
		console.error(error)
	}
}

//Update Email
const setNewEmaill = async ({ email }: Pick<FormData, 'email'>, authUser: User ) => {
	try {
		updateEmail(authUser as User, email)
	} catch (error) {
		console.error(error)
	}
}
export const handleChangeEmail = async (newEmail: string, authUser: User ) => {
	try {
		const checkEmail = await fetchUserCredential(auth, newEmail)
		if (checkEmail.length > 0) {
		} else {
			setNewEmaill({ email: newEmail }, authUser)
			return true
		}
	} catch (error) {
		console.error('Error during email change')
	}
}
// update Password
export const handleChangePassword = async (newPassword: string, authUser: User) => {
	try {
		await updatePassword(authUser, newPassword)
		return true
	} catch (error) {
		console.error('Error during password change')
	}
}
