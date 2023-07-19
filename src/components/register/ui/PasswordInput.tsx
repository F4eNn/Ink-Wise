import React from 'react'
import { InputControl } from './InputControl'
import { UseFormRegister } from 'react-hook-form/dist/types/form'
import { passwordVal } from '@/helpers/validations'

interface PasswordProps {
	errors: string | undefined
	register: Omit<UseFormRegister<{ password: string }>, 'username' | 'email'>
}

export const PasswordInput = ({ errors, register }: PasswordProps) => {
	return (
		<InputControl
			error={errors}
			isInvalid={!!errors}
			name='password'
			palaceholder='password'
			register={register}
			validateInput={passwordVal}
			type='password'
		/>
	)
}
