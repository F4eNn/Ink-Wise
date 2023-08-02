import React, { ReactNode } from 'react'
import { Card as ChakraCard } from '@/lib/chakra'
export const Card = ({ children, mb = '10' }: { children: ReactNode, mb?: string | '10' }) => {
	return (
		<ChakraCard
			minW={{ md: '500px' }}
			ml={['80px', '90px']}
			mr='20px'
			mt={[null, '10']}
			mb={mb}
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
