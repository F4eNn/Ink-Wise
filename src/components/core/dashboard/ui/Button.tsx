import React, { ReactNode } from 'react'
import { Button as ChakraButton } from '@/lib/chakra'
import { motion } from '@/lib/motion'
import { buttonAnimation } from '../animations/animations'
interface ButtonProps {
	onInteraction?: () => void
	children: ReactNode
}

export const Button = ({ onInteraction, children }: ButtonProps) => {
	return (
		<ChakraButton
			{...buttonAnimation}
			as={motion.button}
			onClick={onInteraction}
			w='140px'
			variant='primary'
			px={['6', '10']}
			mt={['7', '2']}>
			{children}
		</ChakraButton>
	)
}
