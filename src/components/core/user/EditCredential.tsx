import React, { useState } from 'react'
import { Box, Button, VStack, Text } from '@/lib/chakra'

import { UpdatePassword } from './forms/UpdatePassword'
import { UpdateEmail } from './forms/UpdateEmail'
import { UpdateAllCredentials } from './forms/UpdateAllCredentials'
import { DeleteAcc } from './ui/DeleteAcc'

export type CredentialForm = {
	password: string
	email: string
}

export const EditCredential = () => {
	const [updateEmail, setUpdateEmail] = useState(false)
	const [updatePassword, setUpdatePassword] = useState(false)
	const [updatedBoth, setUpdateBoth] = useState(false)
	const [isHideButtons, setIsHideButtons] = useState(false)

	const updateUserEmail = () => {
		setUpdateEmail(true)
		setIsHideButtons(true)
	}
	const updateUserPassword = () => {
		setUpdatePassword(true)
		setIsHideButtons(true)
	}
	const updateAll = () => {
		setUpdateBoth(true)
		setIsHideButtons(true)
	}
	return (
		<VStack
			borderWidth='1px'
			borderColor='red'
			rounded='2xl'
			py='8'
			px='5'
			my='10'
			spacing={4}>
			<Text
				align='center'
				color='red.500'
				mb='5'
				fontSize='lg'>
				The changes made below require a re-login
			</Text>
			{!isHideButtons && (
				<VStack
					w='full'
					spacing={{ base: '3', lg: '5' }}>
					<Button
						variant='primary'
						onClick={updateUserEmail}
						w='full'>
						Update Email
					</Button>
					<Button
						variant='primary'
						onClick={updateUserPassword}
						w='full'>
						Update Password
					</Button>
					<Button
						variant='primary'
						onClick={updateAll}
						w='full'>
						Update Both
					</Button>
					<DeleteAcc />
				</VStack>
			)}
			<UpdateAllCredentials
				setCategoryVisible={setIsHideButtons}
				setUpdateBoth={setUpdateBoth}
				updateBoth={updatedBoth}
			/>

			<Box w='full'>
				<UpdateEmail
					setCategoryVisible={setIsHideButtons}
					setUpdateEmail={setUpdateEmail}
					updateEmail={updateEmail}
				/>

				<UpdatePassword
					setCategoryVisible={setIsHideButtons}
					setUpdatePassword={setUpdatePassword}
					updatePassword={updatePassword}
				/>
			</Box>
		</VStack>
	)
}
