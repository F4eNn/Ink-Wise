import React from 'react'
import { InputControl } from './InputControl'
import { UseFormRegister } from 'react-hook-form/dist/types/form'

interface PasswordProps {
	errors: string | undefined
	register: Omit<UseFormRegister<{ password: string }>, 'username' | 'email'>
	isRequired?: boolean
}

export const PasswordInput = ({ errors, register, isRequired = true }: PasswordProps) => {
	const containsCapitalLetter = /(?=.*[A-Z])/
	const containsSpecialChar = /(?=.*\W)/

	return (
		<InputControl
			error={errors}
			isInvalid={!!errors}
			name='password'
			palaceholder='password'
			register={register}
			registerValue={{
				...(isRequired && {
					required: {
						value: true,
						message: 'This field is required',
					},
				}),
				validate: {
					isShort: password => {
						return password.length >= 6 || 'min. 6 characters'
					},
					hasBigLetter: password => {
						return containsCapitalLetter.test(password) || 'Atleast one capital letter'
					},
					hasSpecialChar: password => {
						return containsSpecialChar.test(password) || 'Atleast one special char.'
					},
				},
			}}
			type='password'
		/>
	)
}
