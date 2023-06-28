import React from 'react'
import { AuthCtx } from './Auth'
import { Box, useToast, Heading, Text } from '@/lib/chakra'
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const toast = useToast()
	const showToast = (username: string) => {
		toast({
			position: 'top-right',
			duration: 7000,
			render: () => (
				<Box
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

	const data = {
		listenOnSubmitForm,
	}

	return <AuthCtx.Provider value={data}>{children}</AuthCtx.Provider>
}
