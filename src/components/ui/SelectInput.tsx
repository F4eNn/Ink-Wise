import { FormControl, FormErrorMessage, Select } from '@/lib/chakra'
import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { selectVal } from '@/helpers/validations'
import { NoteFormValue } from '../core/create/CreateNote'

type NoteFormKey = keyof NoteFormValue

interface SelectInputProps {
	placeholder: string
	option: 'personal' | 'important'
	option2: 'work' | 'urgent'
	option3: 'study' | 'minor'
	register: UseFormRegister<NoteFormValue>
	name: NoteFormKey
	error: string | undefined
}

export const SelectInput = ({ name, option, option2, option3, placeholder, register, error }: SelectInputProps) => {
	return (
		<FormControl isInvalid={!!error}>
			<Select
				textTransform='capitalize'
				focusBorderColor='primary.900'
				placeholder={placeholder}
				mt='5'
				{...register(name, selectVal)}>
				<option value={option}>{option}</option>
				<option value={option2}>{option2}</option>
				<option value={option3}>{option3}</option>
			</Select>
			<FormErrorMessage>{error}</FormErrorMessage>
		</FormControl>
	)
}
