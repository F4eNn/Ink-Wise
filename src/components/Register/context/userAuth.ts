import React from 'react'

export type UserDataProps = {
	username: string
	email: string
	password: string
}

const initialData = {
	getUserData: (value: UserDataProps) => {},
	userData: {} as UserDataProps,
}

export const userAuthContext = React.createContext(initialData)
