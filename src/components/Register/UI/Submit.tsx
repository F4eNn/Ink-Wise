import React from 'react'
import { Button } from '../../../lib/chakra'

export const Submit = ({ children, mode }: { children: React.ReactNode, mode:string }) => {
	return (
		<Button
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
