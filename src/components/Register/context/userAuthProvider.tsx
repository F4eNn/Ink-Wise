'use client'
import { useState } from 'react'
import { userAuthContext } from './userAuth'
import { UserDataProps } from './userAuth'
type ProviderProps = {
	children: React.ReactNode
}

export const UserAuthProvider = ({ children }: ProviderProps) => {
	const [userData, setUserData] = useState<UserDataProps>({} as UserDataProps)

	const getUserData = (value: UserDataProps) => {
		setUserData(value)
		console.log(value)
	}
	const ctxValue = {
		getUserData,
		userData,
	}

	return <userAuthContext.Provider value={ctxValue}>{children}</userAuthContext.Provider>
}
