import React from 'react'
import { ToastProps } from './AuthProvider'
import { User } from 'firebase/auth'
const initValues = {
	logout: () => {},
	authUser: {} as User | null,
	Toast: ({ isHeading = false, desc, username }: ToastProps) => {},
}

export const AuthCtx = React.createContext(initValues)
