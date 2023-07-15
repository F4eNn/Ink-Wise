import { User, db, updateUser, updateEmail, reauthenticate, EmailProvider } from '@/config/firebase'
import { doc, setDoc } from 'firebase/firestore'

interface PersonalData {
	name: string
	email: string
	newPassword: string
}
export interface FormData extends PersonalData {
	bio: string
}

export const setInitData = async (userId: string) => {
	await setDoc(doc(db, 'user-profile', userId), { bio: '' })
}

export const setChanges = async (data: FormData, userId: string | undefined) => {
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

export const reAuth = async (authUser: User | null, password?: string, email?: string) => {
	if (authUser) {
		try {
			let credential = undefined
			EmailProvider.credential
			if (password && email) {
				credential = EmailProvider.credential(email, password)
				console.log('email i password')
			} else if (password) {
				credential = EmailProvider.credential(authUser.email as string, password)
				console.log('password')
			} else if (email) {
				credential = EmailProvider.credential(authUser.email as string, email)
				console.log('email ')
			}

			if (credential) {
				const result = await reauthenticate(authUser, credential)
				console.log('użytkownik został ponownie uwierzytelniony')
				return result
			} else {
				throw Error('Incorrect reauthenticate data')
			}
		} catch (error) {
			console.error('Error attempted during reauth:', error)
		}
	}
}
