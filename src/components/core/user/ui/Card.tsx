import React, { ReactNode } from 'react'
import { Card as ChakraCard } from '@/lib/chakra'

interface CardProps {
	children: ReactNode
	mb?: string | '10'
	maxW?: string | '850px'
}

export const Card = ({ children, mb = '10', maxW = 'unset' }: CardProps) => {
	return (
		<ChakraCard
			minW={{ md: '500px' }}
			ml={['80px', '90px']}
			mr='20px'
			mt={[null, '10']}
			mb={mb}
			bg='none'
			maxW={maxW}
			pl={[null, null, '5']}
			borderLeftWidth={[null, null, '1px']}
			borderColor='borderColor'
			rounded='none'
			boxShadow='unset'>
			{children}
		</ChakraCard>
	)
}
