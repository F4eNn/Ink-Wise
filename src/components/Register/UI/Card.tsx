import React from 'react'
import { Stack } from '../../../lib/chakra'

export const Card = ({ children }: { children: React.ReactNode }) => {
	return (
		<Stack
			w={'90%'}
			mt={'15px'}
			maxW={'550px'}
			mb={20}>
			{children}
		</Stack>
	)
}
