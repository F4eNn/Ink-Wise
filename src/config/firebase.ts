import { initializeApp } from 'firebase/app'
import {
	getAuth,
	User as UserCrednetial,
	updateProfile,
	updateEmail as editEmail,
	updatePassword as Editpassword,
	reauthenticateWithCredential,
	EmailAuthProvider,
	fetchSignInMethodsForEmail,
} from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export type User = UserCrednetial

export const db = getFirestore(app)

export const updateEmail = editEmail
export const updateUser = updateProfile
export const reauthenticate = reauthenticateWithCredential
export const EmailProvider = EmailAuthProvider
export const fetchUserCredential = fetchSignInMethodsForEmail
export const updatePassword = Editpassword
