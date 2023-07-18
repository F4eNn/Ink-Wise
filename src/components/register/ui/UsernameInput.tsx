import React from 'react'
import { InputControl } from './InputControl'
import { UseFormRegister } from 'react-hook-form/dist/types/form'

interface UsernameInput {
	errors: string | undefined
	register: Omit<UseFormRegister<{ username: string }>, 'password' | 'email'>
	usernameValue?: string
}

export const UsernameInput = ({ errors, register, usernameValue }: UsernameInput) => {
	const containsSpecialChar = /(?=.*\W)/

	return (
		<InputControl
			error={errors}
			isInvalid={!!errors}
			name='username'
			palaceholder='John'
			register={register}
			registerValue={{
				required: {
					value: true,
					message: 'This field is required',
				},
				validate: {
					hasMinLength: username => {
						return username.length >= 3 || 'min. 3 characters'
					},
					hasSpecialChar: username => {
						return !containsSpecialChar.test(username) || "Username can't contain special characters"
					},
				},
			}}
			type='text'
		/>
	)
}
