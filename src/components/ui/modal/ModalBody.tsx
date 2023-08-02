import React, { ReactNode } from 'react'
import { ModalBody as ChakraModalBody } from '@/lib/chakra'
export const ModalBody = ({children}: {children: ReactNode}) => {
	return (
		<ChakraModalBody
			fontSize='xl'
			display='flex'
			maxW='850px'
			w='full'
			margin='0 auto'
			alignItems='center'
			flexDir='column'>{children}</ChakraModalBody>
	)
}
