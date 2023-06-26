import React, { FormEvent } from 'react'
import { Button } from '../../../lib/chakra'

type SubmitProps = {
	children: React.ReactNode
	mode: string
	onLogin?: (e: FormEvent) => void
}

export const Submit = ({ children, mode, onLogin }: SubmitProps) => {
	return (
		<Button
			onClick={onLogin}
			type='submit'
			mt={4}
			variant={'outlineDark'}
			bg={mode === 'dark' ? 'darkBrown' : 'white'}
			rounded={'3xl'}
			py={7}
			w='full'>
			{children}
		</Button>
	)
}
