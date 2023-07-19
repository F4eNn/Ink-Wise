import React from 'react'
import { InputControl } from '../../../register/ui/InputControl'
import { UseFormRegister } from 'react-hook-form/dist/types/form'
import { NoteFormValue } from '../CreateNote'
import { basicVal } from '@/helpers/validations'


interface NoteInputProps {
	errors: string | undefined
	register: UseFormRegister<NoteFormValue>
}

export const NoteInput = ({ errors, register }: NoteInputProps) => {
	return (
		<InputControl
			error={errors}
			isInvalid={!!errors}
			name='title'
			palaceholder='Note Title'
			register={register}
			validateInput={basicVal}
			type='text'
		/>
	)
}
