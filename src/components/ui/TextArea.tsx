import { basicVal } from '@/helpers/validations'
import { FormControl, FormErrorMessage, FormLabel, Textarea } from '@/lib/chakra'
import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { NoteFormValue } from '../core/create/CreateNote'

type NoteFormKey = keyof NoteFormValue

interface TextAreaProps {
	register: UseFormRegister<NoteFormValue>
	name: NoteFormKey
	title: string
	placeholder: string
	error: string | undefined
}

export const TextArea = ({ name, placeholder, register, title, error }: TextAreaProps) => {
	return (
		<FormControl
			mt='5'
			isInvalid={!!error}>
			<FormLabel htmlFor={name}>{title}</FormLabel>
			<Textarea
				borderColor='borderColor'
				id={name}
				placeholder={placeholder}
				maxH='450px'
				resize='vertical'
				h='125px'
				focusBorderColor='primary.900'
				{...register(name, basicVal)}
			/>
			<FormErrorMessage as='p'>{error}</FormErrorMessage>
		</FormControl>
	)
}
