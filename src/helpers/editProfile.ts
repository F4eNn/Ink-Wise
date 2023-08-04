import { auth, db } from '@/config/firebase'
import { User, fetchSignInMethodsForEmail, updateEmail, updatePassword, updateProfile } from 'firebase/auth'
import { doc, setDoc, updateDoc } from 'firebase/firestore'

interface PersonalData {
	name: string
	email: string
	password: string
}

export interface FormData {
	bio: string
	username: string
	photo: string
}

export const setUserData = async (userId: string, name: string, joined: string) => {
	await setDoc(doc(db, 'user-profile', userId), { bio: '', photo: '', joined, name })
}

//update general firebase Info
export const updateUserProfile = async (
	{ username, photo }: Pick<FormData, 'username' | 'photo'>,
	authUser: User | null
) => {
	await updateProfile(authUser as User, {
		displayName: username,
		photoURL: photo,
	})
}

export const setProfileUpdate = async (data: Partial<FormData> & { email?: string }, userId: string | undefined) => {
	if (!userId) return
	try {
		await updateDoc(doc(db, 'user-profile', userId), {
			bio: data.bio,
			photo: data.photo,
			name: data.username,
		})
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(error)
	}
}

//Update Email
const setNewEmaill = async ({ email }: Pick<PersonalData, 'email'>, authUser: User) => {
	try {
		updateEmail(authUser as User, email)
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(error)
	}
}
// update Email
export const handleChangeEmail = async (newEmail: string, authUser: User) => {
	try {
		const checkEmail = await fetchSignInMethodsForEmail(auth, newEmail)
		const isExistEmail = checkEmail.length > 0
		if (!isExistEmail) setNewEmaill({ email: newEmail }, authUser)
		return true
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error('Error during email change')
	}
}

// update Password
export const handleChangePassword = async (newPassword: string, authUser: User) => {
	try {
		await updatePassword(authUser, newPassword)
		return true
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error('Error during password change')
	}
}
