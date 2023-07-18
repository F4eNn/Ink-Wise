import React from 'react'
import { Card as ChakraCard } from '@/lib/chakra'
export const Card = ({ children }: { children: React.ReactNode }) => {
	return (
		<ChakraCard
			maxW='600px'
			minW={{ md: '500px' }}
			ml={['80px', '90px']}
			mr='20px'
			mt={[null, '10']}
			mb='10'
			bg='none'
			pl={[null, null, '5']}
			borderLeftWidth={[null, null, '1px']}
			borderColor='borderColor'
			rounded='none'
			boxShadow='unset'>
			{children}
		</ChakraCard>
	)
}
