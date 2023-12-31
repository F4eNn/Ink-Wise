import React, { useEffect } from 'react'
import { Box, CardHeader, Flex, FormControl, FormLabel, Input, Textarea } from '@/lib/chakra'
import { Avatar } from '../ui/Avatar'
import { useForm } from 'react-hook-form'

import { useAuth } from '@/hooks/useAuth'

import { setProfileUpdate, updateUserProfile } from '@/helpers/editProfile'

import { UsernameInput } from '@/components/ui/inputs/UsernameInput'
import { FormData } from '@//helpers/editProfile'
import { SubmitButton } from '@/components/ui/SubmitButton'

interface FormProps {
	onToggle: () => void
	userId: string | undefined
	valueBio: string
	valueName: string
	valuePhoto: string
}

export const UpdateUserData = ({ valueBio, userId, valueName, valuePhoto, onToggle }: FormProps) => {
	const { register, handleSubmit, setValue, formState } = useForm<FormData>({
		defaultValues: {
			bio: '',
			username: '',
			photo: '',
		},
	})
	const { errors, isSubmitting } = formState
	const { authUser } = useAuth()

	const onSubmit = async (data: FormData) => {
		await setProfileUpdate(data, userId)
		await updateUserProfile({ username: data.username, photo: data.photo }, authUser)
		onToggle()
	}
	useEffect(() => {
		setValue('photo', valuePhoto)
		setValue('bio', valueBio)
		setValue('username', valueName)
	}, [setValue, valueBio, valueName, valuePhoto])

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
						<Avatar
							size={['lg', 'xl', '2xl']}
							name={authUser!.displayName!}
							src={authUser!.photoURL!}
						/>
					</Box>
					<Flex
						w='full'
						fontSize='lg'
						flexDir='column'
						gap='3'>
						<UsernameInput
							errors={errors.username?.message}
							register={register}
						/>
					</Flex>
				</Flex>
			</CardHeader>
			<FormControl>
				<FormLabel htmlFor='profilePicture'>Profile Picture</FormLabel>
				<Input
					id='profilePicture'
					borderColor='borderColor'
					focusBorderColor='primary.900'
					placeholder='Photo URL'
					{...register('photo')}
				/>
			</FormControl>
			<FormControl mt='5'>
				<FormLabel htmlFor='description'>About You</FormLabel>
				<Textarea
					borderColor='borderColor'
					id='description'
					placeholder='Add a bio'
					resize='none'
					h='125px'
					focusBorderColor='primary.900'
					{...register('bio')}
				/>
			</FormControl>
			<SubmitButton
				isLoading={isSubmitting}
				mt='10'
				loadingText='Saving'>
				Save
			</SubmitButton>
		</Box>
	)
}
