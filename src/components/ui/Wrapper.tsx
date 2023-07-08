import React from 'react'
import { Box } from '../../lib/chakra'
export const Wrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box
			w={['95%', null, '100%']}
			mx={'auto'}>
			{children}
		</Box>
	)
}
