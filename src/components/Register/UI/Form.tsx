import React from 'react'
import { Box } from '@/lib/chakra'
export const Form = ({ children, handleSubmit }: { children: React.ReactNode; handleSubmit?: any }) => {
	return (
		<Box
			onSubmit={handleSubmit}
			noValidate
			as='form'
			w={'90%'}
			maxW={'550px'}
			mt='15px'
			display={'flex'}
			flexDirection={'column'}
			mb={20}>
			{children}
		</Box>
	)
}
