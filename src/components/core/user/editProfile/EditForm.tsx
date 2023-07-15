import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, CardHeader, Flex } from '@/lib/chakra'
import { Avatar } from './ui/Avatar'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { doc, setDoc } from 'firebase/firestore'
import { User, db, updateUser, updateEmail, reauthenticate } from '@/config/firebase'
import { useAuth } from '@/hooks/useAuth'

import { setChanges } from './userHelpers'
import { updateEmaill } from './userHelpers'
import { updateProfile } from './userHelpers'
import { reAuth } from './userHelpers'

interface FormProps {
	onToggle: () => void
	userId: string | undefined
	valueBio: string
	valueName: string
	valueEmail: string
}
interface PersonalData {
	name: string
	email: string
	newPassword: string
}
export interface FormData extends PersonalData {
	bio: string
}

export const EditForm = ({ onToggle, userId, valueBio, valueName, valueEmail }: FormProps) => {
	const { authUser } = useAuth()

	const { register, handleSubmit, setValue } = useForm<FormData>({
		defaultValues: {
			bio: '',
			email: '',
			name: '',
			newPassword: '',
		},
	})
	
	const onSubmit = (data: FormData) => {
		onToggle()
		setChanges(data, userId)
		updateProfile({ name: data.name }, authUser)
		// reAuth(authUser, valueEmail)
		updateEmaill({ email: data.email }, authUser)
	}

	useEffect(() => {
		setValue('bio', valueBio)
		setValue('name', valueName)
		setValue('email', valueEmail)
	}, [setValue, valueBio, valueEmail, valueName])

	return (
		<Box
			as='form'
			onSubmit={handleSubmit(onSubmit)}
			w='full'>
			<CardHeader>
				<Flex
					gap='7'
					alignItems='center'>
					<Box>
						<Avatar />
					</Box>
					<Flex
						w='full'
						flexDir='column'
						gap='3'>
						<FormControl>
							<FormLabel htmlFor='name'>Username</FormLabel>
							<Input
								type='text'
								id='name'
								placeholder='Name'
								focusBorderColor='primary.900'
								{...register('name')}
							/>
						</FormControl>
						<FormControl>
							<FormLabel htmlFor='email'>New Email</FormLabel>
							<Input
								type='email'
								id='email'
								placeholder='E-mail'
								focusBorderColor='primary.900'
								{...register('email')}
							/>
						</FormControl>
					</Flex>
				</Flex>
			</CardHeader>

			<FormControl>
				<FormLabel htmlFor='description' />
				<Textarea
					id='description'
					placeholder='Add a bio'
					resize='none'
					defaultValue={valueBio.length == 0 ? 'Hi' : valueBio}
					focusBorderColor='primary.900'
					{...register('bio')}
				/>
			</FormControl>
			<VStack
				mt='20'
				spacing={4}>
				<FormControl>
					<FormLabel htmlFor='newPassword'>New Password:</FormLabel>
					<Input
						type='password'
						id='newPassword'
						placeholder='Password'
						focusBorderColor='primary.900'
						{...register('newPassword')}
					/>
				</FormControl>
			</VStack>
			<Button
				w='full'
				type='submit'
				mt='10'>
				Save
			</Button>
		</Box>
	)
}
