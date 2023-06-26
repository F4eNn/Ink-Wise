import React from 'react'
import { Box } from '../../../lib/chakra'
export const Wrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box
			maxW={1200}
			w={'100%'}
			mx={'auto'}>
			{children}
		</Box>
	)
}
