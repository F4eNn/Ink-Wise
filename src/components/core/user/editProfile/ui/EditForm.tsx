import React from 'react'
import { FormLabel, Textarea, FormControl, Input, VStack, Box } from '@/lib/chakra'
import { useForm } from 'react-hook-form'

interface Form {
	bio: string
	currentPassword: string
	newPassword: string
}

export const EditForm = () => {
	// const { register, handleSubmit } = useForm<Form>({

	// 	defaultValues: {
	// 		bio: '',
	// 		currentPassword: '',
	// 		newPassword: '',
	// 	},
	// })

	const onSubmit = () => {}
	return (
		<Box as='form'>
			<FormControl>
				<FormLabel htmlFor='description' />
				<Textarea
					id='description'
					placeholder={'Add a bio'}
					resize='none'
					focusBorderColor='primary.900'
					// {...register('bio')}
				/>
			</FormControl>
			<Input />
			<Input />

			<FormControl>
				<FormLabel htmlFor='name'>First name</FormLabel>
				<Input
					id='name'
					placeholder='name'
				/>
			</FormControl>
			<FormControl>
				<FormLabel htmlFor='password'>Second password</FormLabel>
				<Input
					id='password'
					placeholder='password'
				/>
			</FormControl>
		</Box>
	)
}
