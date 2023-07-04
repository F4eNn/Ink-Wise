import React from 'react'
import { Button } from '../../../lib/chakra'

type SubmitProps = {
	children: React.ReactNode
	isLoading: boolean
	loadingText: string
}

export const Submit = ({ children, isLoading, loadingText }: SubmitProps) => {
	return (
		<Button
			isLoading={isLoading}
			loadingText={loadingText}
			type='submit'
			mt={4}
			variant={'outlineDark'}
			bg='defaultReverse'
			rounded={'3xl'}
			py={7}
			w='full'>
			{children}
		</Button>
	)
}
