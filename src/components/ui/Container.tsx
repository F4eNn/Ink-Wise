import { Container as ChakraContainer } from '@/lib/chakra'
import React from 'react'

export const Container = ({ children }: { children: React.ReactNode }) => {
	return (
		<ChakraContainer
			maxW='1440px'
			as='main'
			w={['90%', null, 'full']}>
			{children}
		</ChakraContainer>
	)
}
