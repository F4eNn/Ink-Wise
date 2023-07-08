import React from 'react'
import { Box } from '../../../lib/chakra'

export const Card = ({ children}: { children: React.ReactNode; handleSubmit?: any }) => {
	return (
		<Box
			rounded='15px'
			w='full'
			px='40px'
			py='30px'
			fontSize='clamp(1em,2.5vw,1.2em)'
			borderWidth='1px'
			bg='alphaLightBrown'
			borderColor='borderColor'
			mt='20px'>
			{children}
		</Box>
	)
}
