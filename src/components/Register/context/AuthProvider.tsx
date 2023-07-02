'use client'
import React, { useState, useEffect } from 'react'
import { AuthCtx } from './Auth'
import { auth } from '../../../Config/firebase'
import { Box, useToast, Heading, Text } from '@/lib/chakra'
import { onAuthStateChanged, signOut } from 'firebase/auth'

type UserData = {
	displayName: string
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const toast = useToast()
	const [authUser, setAuthUser] = useState<any>(null)
	const showToast = (username: string) => {
		toast({
			position: 'top-right',
			duration: 5000,
			render: () => (
				<Box
					mt={20}
					bgGradient='linear(to-r, #ffdc9f, gold)'
					py={3}
					px={4}
					color='#313131'
					rounded='8px'>
					<Heading fontSize='1.2em'>{`Hello ${username} 😄`}</Heading>
					<Text as='p'>{"We've created your account for you."}</Text>
				</Box>
			),
		})
	}
	const listenOnSubmitForm = (value?: boolean, username?: string) => {
		if (value && username) {
			showToast(username)
		}
	}

	useEffect(() => {
		const listen = onAuthStateChanged(auth, (user: any) => {
			if (user) {
				setAuthUser(user)
			} else {
				setAuthUser(null)
			}
		})
		return () => {
			listen()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	const logout = async () => {
		try {
			setAuthUser(null)
			await signOut(auth)
		} catch (err) {
			console.error(err)
		}
	}

	const data = {
		authUser,
		listenOnSubmitForm,
		logout,
	}

	return <AuthCtx.Provider value={data}>{children}</AuthCtx.Provider>
}
