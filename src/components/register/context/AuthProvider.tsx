'use client'
import React, { useState, useEffect } from 'react'
import { AuthCtx } from './Auth'
import { auth } from '../../../config/firebase'
import { User } from '@/config/firebase'
import { Box, useToast, Heading, Text } from '@/lib/chakra'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'

import { useRouter } from 'next/navigation'

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const toast = useToast()
	const router = useRouter()

	const [authUser, setAuthUser] = useState<User | null>(null)
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
		const listen = onAuthStateChanged(auth, user => {
			if (user) {
				setAuthUser(user)
			} else {
				setAuthUser(null)
				router.push('/login')
			}
		})
		return () => {
			listen()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [authUser])

	const logout = async () => {
		try {
			await signOut(auth)
			setAuthUser(null)
			router.back()
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
