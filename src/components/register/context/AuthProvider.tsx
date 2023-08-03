'use client'
import React, { useState, useEffect } from 'react'
import { AuthCtx } from './Auth'
import { auth } from '../../../config/firebase'
import { User } from '@/config/firebase'
import { Box, useToast, Heading, Text } from '@/lib/chakra'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'

export interface ToastProps {
	isHeading: boolean | false
	desc: string
	username?: string | null
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const toast = useToast()
	const router = useRouter()
	const [authUser, setAuthUser] = useState<User | null>(null)


	

	const Toast = ({ isHeading = false, desc, username }: ToastProps) => {
		toast({
			position: 'top-right',
			duration: 1750,
			render: () => (
				<Box
					mt={20}
					bgGradient='linear(to-r, #ffdc9f, primary.900)'
					py={3}
					px={4}
					color='darkBrown'
					rounded='8px'>
					{isHeading && <Heading fontSize='1.2em'>{`Hello ${username} 😄`}</Heading>}
					<Text
						as='p'
						fontWeight='bold'>
						{desc}
					</Text>
				</Box>
			),
		})
	}

	useEffect(() => {
		const listen = onAuthStateChanged(auth, user => {
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
		logout,
		Toast,
	}

	return <AuthCtx.Provider value={data}>{children}</AuthCtx.Provider>
}
