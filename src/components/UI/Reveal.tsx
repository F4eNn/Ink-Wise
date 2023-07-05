import React from 'react'
import { Box } from '@/lib/chakra'
export const Reveal = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box
			px='7'
			w='full'
			mt='20'
			borderRightWidth='1px'
			borderLeftWidth='1px'
			borderLeftColor='borderColor'
			borderRightColor='borderColor'>
			{children}
		</Box>
	)
}
