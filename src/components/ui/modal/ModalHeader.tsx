import React, { ReactNode } from 'react'
import { ModalHeader as Header } from '@/lib/chakra'

export const ModalHeader = ({ title }: { title: string }) => {
	return (
		<Header
			fontSize='5xl'
			bgGradient='linear(to-r, primary.900, #ffffff)'
			bgClip='text'
			fontWeight='extrabold'
			textTransform='capitalize'
			textAlign='center'>
			{title}
		</Header>
	)
}
