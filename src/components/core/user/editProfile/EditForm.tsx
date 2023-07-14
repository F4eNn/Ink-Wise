import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, CardHeader } from '@/lib/chakra'
import React, {useEffect} from 'react'
import { useForm } from 'react-hook-form'

import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/config/firebase'

import { FormData } from './ui/SharedTypes'
interface FormProps {
	onSave: () => void
	userId: string | undefined
	valueBio: string
}

export const EditForm = ({ onSave, userId, valueBio }: FormProps) => {
	const { register, handleSubmit, setValue } = useForm<FormData>({
		defaultValues: {
			bio: '',
		},
	})

	const setChanges = async (data: FormData) => {
		if (!userId) return
		await setDoc(doc(db, 'user-profile', userId), {
			bio: data.bio,
		})
	}

	const onSubmit = async (data: FormData) => {
		onSave()
		setChanges(data)
	}

	useEffect(() => {
		setValue('bio', valueBio)
	}, [setValue, valueBio])
	return (
		<Box
			as='form'
			// onSubmit={handleSubmit(onSubmit)}
			w='full'>
			<CardHeader></CardHeader>

			<FormControl>
				<FormLabel htmlFor='description' />
				<Textarea
					id='description'
					placeholder={'Add a bio'}
					resize='none'
					// defaultValue={valueBio.length == 0 ? 'Hi' : valueBio}
					focusBorderColor='primary.900'
					// {...register('bio')}
				/>
			</FormControl>

			<VStack
				mt='20'
				spacing={4}>
				<FormControl>
					<FormLabel htmlFor='Currentpassword'>New Password:</FormLabel>
					<Input
						type='password'
						id='Currentpassword'
						placeholder='Password'
						focusBorderColor='primary.900'

						// {...register('currentPassword')}
					/>
				</FormControl>
				<FormControl>
					<FormLabel htmlFor='newPassword'>Confirm Password:</FormLabel>
					<Input
						type='password'
						id='newPassword'
						placeholder='New Password'
						focusBorderColor='primary.900'

						// {...register('newPassword')}
					/>
				</FormControl>
			</VStack>
			<Button
				type='submit'
				mt='10'>
				Save
			</Button>
		</Box>
	)
}
