import React from 'react'
import { ModalFooter as ChakraModalFooter } from '@/lib/chakra'
import { Button } from './Button'

export const ModalFooter = ({ onClose }: { onClose: () => void }) => {
	return (
		<ChakraModalFooter my='5'>
			<Button onInteraction={onClose}>Close</Button>
		</ChakraModalFooter>
	)
}
