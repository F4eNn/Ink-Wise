import React from 'react'
import { Card as ChakraCard } from '@/lib/chakra'
export const Card = ({ children }: { children: React.ReactNode }) => {
	return (
		<ChakraCard
			w='600px'
			bg='none'
            pl='5'
			borderLeft='1px'
			borderLeftColor='borderColor'
			rounded='none'
			boxShadow='unset'>
			{children}
		</ChakraCard>
	)
}
