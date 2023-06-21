import React from 'react'
import {  FormLabel, FormErrorMessage, FormHelperText, Input } from '../../lib/chakra'
import { StyledForm } from './StyledForm'
export const Login = () => {
	return (
		<StyledForm >
			<FormLabel>Name</FormLabel>
			<Input type='text' placeholder='' outline={''} _focus={{border: '1px solid orange'}} />
			<FormLabel>password</FormLabel>
			<Input type='password' />
		</StyledForm>
	)
}
