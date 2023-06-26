import { FormControl, FormErrorMessage, FormLabel, Input } from '@/lib/chakra'
import React from 'react'

type ValidateFunction = (value: string) => boolean | string

type ValidateObject = {
	[x: string]: ValidateFunction
}
type InputProps = {
	isInvalid: any
	mode: string
	name: string
	type: string
	palaceholder: string
	register: any
	registerValue: {
		required?: {
			value: boolean
			message: string
		}
		validate?: ValidateFunction | ValidateObject
	}
	error: string | undefined
}
export const InputControl = (props: InputProps) => {
	const { isInvalid, name, palaceholder, register, registerValue, type, error, mode} = props

	return (
		<FormControl
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
				variant={'flushed'}
				fontSize={'.8em'}
				focusBorderColor='gold'
				type={type}
				borderColor={mode === 'dark' ? 'grey' : 'lightBrown'}
				placeholder={palaceholder}
				{...register(name, registerValue)}
			/>
			<FormErrorMessage as='p'>{error}</FormErrorMessage>
		</FormControl>
	)
}
