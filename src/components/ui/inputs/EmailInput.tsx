import React from 'react'
import { UseFormRegister } from 'react-hook-form'

import { InputControl } from '../../register/ui/InputControl'

import { emailVal } from '@/helpers/validations'

interface EmailProps {
	isExist?: boolean
	errors: string | undefined
	register: Omit<UseFormRegister<{ email: string }>, 'password' | 'sdsad'>
}

export const EmailInput = ({ isExist, errors, register }: EmailProps) => {
	return (
		<InputControl
			emailExist={isExist}
			error={errors}
			isInvalid={!!errors}
			name='email'
			palaceholder='john.doe@johondoehub.com'
			register={register}
			validateInput={emailVal}
			type='email'
		/>
	)
}
