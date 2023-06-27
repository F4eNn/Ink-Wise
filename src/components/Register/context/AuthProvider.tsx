import React, { useEffect } from 'react'
import { AuthCtx } from './Auth'
import { Box, useToast, Heading, Text } from '@/lib/chakra'
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const toast = useToast()
	const showToast = () => {
		toast({
			position: 'top-right',
			title: 'Account created',
			description: "We've created your account for you",
			duration: 100000,
			render: () => (
				<Box
					bgGradient='linear(to-r, #ffdc9f, pink.500)'
					py={3}
					px={4}
					rounded='8px'>
					<Heading fontSize='1.2em'>Account created.</Heading>
					<Text as='p'>{"We've created your account for you."}</Text>
				</Box>
			),
		})
	}

	useEffect(() => {
		showToast()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	const listenOnSubmitForm = (value?: boolean) => {
		if (value) {
			showToast()
		}
	}
	const data = {
		listenOnSubmitForm,
	}

	return <AuthCtx.Provider value={data}>{children}</AuthCtx.Provider>
}
