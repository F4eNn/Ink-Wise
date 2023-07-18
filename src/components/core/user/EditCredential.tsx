import React, { useState } from 'react'
import { Box, Button, VStack, Text } from '@/lib/chakra'

import { UpdatePassword } from './Forms/UpdatePassword'
import { UpdateEmail } from './Forms/UpdateEmail'
import { UpdateAllCredentials } from './Forms/UpdateAllCredentials'

export type CredentialForm = {
	password: string
	email: string
}

export const EditCredential = () => {
	const [updateEmail, setUpdateEmail] = useState(false)
	const [updatePassword, setUpdatePassword] = useState(false)
	const [updatedBoth, setUpdateBoth] = useState(false)
	const [isHideButtons, setIsHideButtons] = useState(false)

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
				<VStack w='full' spacing={{base: '3', lg: '5'}}>
					<Button
						onClick={() => {
							setUpdateEmail(true), setIsHideButtons(true)
						}}
						w='full'>
						Update Email
					</Button>
					<Button
						onClick={() => {
							setUpdatePassword(true), setIsHideButtons(true)
						}}
						w='full'>
						Update Password
					</Button>
					<Button
						onClick={() => {
							setUpdateBoth(true), setIsHideButtons(true)
						}}
						w='full'>
						Update Both
					</Button>
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
