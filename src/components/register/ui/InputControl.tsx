import { Text, FormControl, FormErrorMessage, FormLabel, Input } from '@/lib/chakra'
import React from 'react'

// eslint-disable-next-line no-unused-vars
type ValidateFunction = (value: string) => boolean | string

type ValidateObject = {
	[x: string]: ValidateFunction
}
type InputProps = {
	isInvalid: any
	name: string
	type: string
	palaceholder: string
	register: any
	usernameValue?: string
	emailExist?: boolean
	validateInput: {
		required?: {
			value: boolean
			message: string
		}
		validate?: ValidateFunction | ValidateObject
	}
	error: string | undefined
}
export const InputControl = (props: InputProps) => {
	const { isInvalid, name, palaceholder, register, validateInput, type, error, emailExist, usernameValue } = props

	return (
		<FormControl
			position='relative'
			mb={5}
			isInvalid={isInvalid}>
			<FormLabel
				textTransform='capitalize'
				htmlFor={name}
				fontSize={'inherit'}>
				{name}
			</FormLabel>
			<Input
				id={name}
				py={5}
				defaultValue={usernameValue}
				variant={'flushed'}
				fontSize={'.8em'}
				focusBorderColor='primary.900'
				type={type}
				borderColor='borderColor'
				placeholder={palaceholder}
				{...register(name, validateInput)}
			/>
			<FormErrorMessage as='p'>{error}</FormErrorMessage>
			{emailExist ? (
				<Text
					position='absolute'
					top={0}
					right={0}
					color='error'
					fontSize={'.8em'}
					as='p'>
					Email already exist
				</Text>
			) : (
				''
			)}
		</FormControl>
	)
}
