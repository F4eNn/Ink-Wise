import React, { useEffect } from 'react'
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, CardHeader, Flex, Text } from '@/lib/chakra'
import { Avatar } from './ui/Avatar'
import { useForm } from 'react-hook-form'

import { useAuth } from '@/hooks/useAuth'

import { setProfileUpdate } from './userHelpers'
import { updateEmaill } from './userHelpers'
import { updateProfile } from './userHelpers'
import { useRouter } from 'next/navigation'

interface FormProps {
	onToggle: () => void
	userId: string | undefined
	valueBio: string
	valueName: string
	valueEmail: string
	onLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export interface FormData {
	bio: string
	name: string
	email: string
	newPassword: string
	ConfirmPassword: string
}

export const EditForm = ({ onToggle, userId, valueBio, valueName, valueEmail, onLoading }: FormProps) => {
	const { authUser, logout } = useAuth()
	const router = useRouter()
	const { register, handleSubmit, setValue } = useForm<FormData>({
		defaultValues: {
			bio: '',
			email: '',
			name: '',
			newPassword: '',
			ConfirmPassword: '',
		},
	})

	const onSubmit = (data: FormData) => {
		onToggle()
		setProfileUpdate(data, userId)
		updateProfile({ name: data.name }, authUser)

		if (data.email !== valueEmail) {
			updateEmaill({ email: data.email }, authUser)
			logout()
			router.push('/login')

		}
	}

	useEffect(() => {
		setValue('bio', valueBio)
		setValue('name', valueName)
		setValue('email', valueEmail)
	}, [setValue, valueBio, valueEmail, valueName])

	return (
		<>
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
				borderWidth='1px'
				borderColor='red'
				rounded='2xl'
				py='8'
				px='5'
					mt='20'
					spacing={4}>
					<Text
						color='red.500'
						mb='5'
						fontSize='lg'>
						The changes made below require a re-login
					</Text>
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

					<VStack
						w='full'
						mt='10'
						spacing='8'>
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
						<FormControl>
							<FormLabel htmlFor='newPassword'>Confirm Password:</FormLabel>
							<Input
								type='password'
								id='newPassword'
								placeholder='Password'
								focusBorderColor='primary.900'
								{...register('ConfirmPassword')}
							/>
						</FormControl>
					</VStack>
				</VStack>
				<Button
					w='full'
					type='submit'
					mt='10'>
					Save
				</Button>
			</Box>
		</>
	)
}
