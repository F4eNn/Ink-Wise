import React from 'react'
import { ModalFooter as ChakraModalFooter } from '@/lib/chakra'
import { Button } from './Button'

interface ButtonProps {
	onClose: () => void
}

export const ModalFooter = ({ onClose }: ButtonProps) => {
	return (
		<ChakraModalFooter my='5'>
			<Button onInteraction={onClose}>Close</Button>
		</ChakraModalFooter>
	)
}
