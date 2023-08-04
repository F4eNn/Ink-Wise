import React from 'react'
import { Button } from '@/lib/chakra'

type SubmitProps = {
	children: React.ReactNode
	isLoading: boolean
	loadingText: string
	mt?: string
	my?: string
}

export const SubmitButton = ({ children, isLoading, loadingText, mt, my }: SubmitProps) => {
	return (
		<Button
			isLoading={isLoading}
			loadingText={loadingText}
			type='submit'
			variant='primary'
			mt={mt}
			my={my}
			w='full'>
			{children}
		</Button>
	)
}
