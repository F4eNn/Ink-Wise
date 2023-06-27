import React, { FormEvent } from 'react'
import { Button } from '../../../lib/chakra'

type SubmitProps = {
	children: React.ReactNode
	mode: string
	isLoading: boolean
	loadingText: string
}

export const Submit = ({ children, mode, isLoading, loadingText }: SubmitProps) => {
	return (
		<Button
			isLoading={isLoading}
			loadingText={loadingText}
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
