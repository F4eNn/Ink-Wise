import React from 'react'
import { InputControl } from './InputControl'
import { UseFormRegister } from 'react-hook-form'
import isEmail from 'validator/lib/isEmail'

interface EmailProps  {
    isExist: boolean
    errors: string | undefined
    register: Omit<UseFormRegister<{email: string}>, 'password' | 'sdsad'>
}

export const EmailInput = ({isExist, errors, register}:EmailProps) => {
	return (
		<InputControl
			emailExist={isExist}
			error={errors}
			isInvalid={!!errors}
			name='email'
			palaceholder='john.doe@johondoehub.com'
			register={register}
			registerValue={{
				required: {
					value: true,
					message: 'This field is required',
				},
				validate: email => isEmail(email) || 'Provide valid email',
			}}
			type='email'
		/>
	)
}
