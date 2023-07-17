import { Box, Button, CardHeader, Flex, FormControl, FormLabel, Input, Textarea } from '@/lib/chakra'
import React, { useEffect } from 'react'
import { Avatar } from './ui/Avatar'
import { useForm } from 'react-hook-form'

import { useAuth } from '@/hooks/useAuth'

import { setProfileUpdate } from './helpers/editHelpers'
import { updateProfile } from './helpers/editHelpers'

interface FormProps {
	onToggle: () => void
	userId: string | undefined
	valueBio: string
	valueName: string
	valueEmail: string
}

export interface FormData {
	bio: string
	name: string
}

export const EditUserData = ({ valueBio, userId, valueName, onToggle }: FormProps) => {
	const { register, handleSubmit, setValue, formState } = useForm<FormData>({
		defaultValues: {
			bio: '',
			name: '',
		},
	})

	const { authUser } = useAuth()

	const onSubmit = (data: FormData) => {
		onToggle()
		setProfileUpdate(data, userId)
		updateProfile({ name: data.name }, authUser)
	}
	useEffect(() => {
		setValue('bio', valueBio)
		setValue('name', valueName)
	}, [setValue, valueBio, valueName])
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
			<Button
				w='full'
				type='submit'
				mt='10'>
				Save
			</Button>
		</Box>
	)
}
