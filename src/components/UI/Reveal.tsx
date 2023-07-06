import React from 'react'
import { Box } from '@/lib/chakra'
export const Reveal = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box
			pl={['0', null, '7']}
			w='full'
			mt={['10', null, '16']}
			borderRightWidth={[null, null, null, '1px']}
			borderLeftWidth={[null, null, '1px']}
			borderLeftColor='borderColor'
			borderRightColor='borderColor'>
			{children}
		</Box>
	)
}
