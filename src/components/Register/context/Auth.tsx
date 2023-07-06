import React from 'react'
import { User } from '@/config/firebase'
const initValues = {
	listenOnSubmitForm: (value?: boolean, username?: string) => {},
	logout: () => {},
	authUser: {} as User | null
}

export const AuthCtx = React.createContext(initValues)
