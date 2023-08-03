import React from 'react'
import { User } from '@/config/firebase'
import { ToastProps } from './AuthProvider'
const initValues = {
	logout: () => {},
	authUser: {} as User | null,
	Toast: ({ isHeading = false, desc, username }: ToastProps) => {},
}

export const AuthCtx = React.createContext(initValues)
