import React from 'react'
import { Spinner, Center, Box, AspectRatio } from '@/lib/chakra'
export const LoadingSpinner = () => {
	return (
		<Box
			pos='fixed'
			top='0'
			left='0'
			bg='black'
			zIndex='9999'
			width='100vw'
			h='100vh'>
			<Center h='100%'>
				<AspectRatio ratio={1} w='100px' h='100px'>
					<Spinner
						speed='0.65s'
						color='gold'
					/>
				</AspectRatio>
			</Center>
		</Box>
	)
}
