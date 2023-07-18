import { Box, Button, CardHeader, Flex, FormControl, FormErrorMessage, FormLabel, Input, Textarea } from '@/lib/chakra'
import React, { useEffect } from 'react'
import { Avatar } from '../ui/Avatar'
import { useForm } from 'react-hook-form'

import { useAuth } from '@/hooks/useAuth'

import { setProfileUpdate } from '../helpers/editHelpers'
import { updateProfile } from '../helpers/editHelpers'

import { UsernameInput } from '@/components/register/ui/UsernameInput'

interface FormProps {
	onToggle: () => void
	userId: string | undefined
	valueBio: string
	valueName: string
	valueEmail: string
}

export interface FormData {
	bio: string
	username: string
}

export const UpdateUserData = ({ valueBio, userId, valueName, onToggle }: FormProps) => {
	const { register, handleSubmit, setValue, formState } = useForm<FormData>({
		defaultValues: {
			bio: '',
			username: '',
		},
	})
	const { errors } = formState
	const { authUser } = useAuth()

	const onSubmit = async (data: FormData) => {
		await setProfileUpdate(data, userId)
		await updateProfile({ name: data.username }, authUser)
		onToggle()
	}
	useEffect(() => {
		setValue('bio', valueBio)
		setValue('username', valueName)
	}, [setValue, valueBio, valueName])
	return (
		<Box
			as='form'
			w='full'
			onSubmit={handleSubmit(onSubmit)}>
			<CardHeader>
				<Flex
					gap='7'
					alignItems='center'>
					<Box>
						<Avatar size='lg' />
					</Box>
					<Flex
						w='full'
						flexDir='column'
						gap='3'>
						<UsernameInput
							errors={errors.username?.message}
							register={register}
							usernameValue={valueName}
						/>
					</Flex>
				</Flex>
			</CardHeader>
			<FormControl>
				<FormLabel htmlFor='description' />
				<Textarea
					id='description'
					placeholder='Add a bio'
					resize='none'
					defaultValue={valueBio}
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
