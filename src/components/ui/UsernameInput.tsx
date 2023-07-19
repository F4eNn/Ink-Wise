import React from 'react'
import { InputControl } from '../register/ui/InputControl'
import { UseFormRegister } from 'react-hook-form/dist/types/form'
import { usernameVal } from '@/helpers/validations'

interface UsernameInput {
	errors: string | undefined
	register: Omit<UseFormRegister<{ username: string }>, 'password' | 'email'>
}

export const UsernameInput = ({ errors, register }: UsernameInput) => {
	return (
		<InputControl
			error={errors}
			isInvalid={!!errors}
			name='username'
			palaceholder='John'
			register={register}
			validateInput={usernameVal}
			type='text'
		/>
	)
}
