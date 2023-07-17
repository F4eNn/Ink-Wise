import React from 'react'
import { Spinner, Center, Box } from '@/lib/chakra'
export const LoadingSkeleton = () => {
	return (
		<Box
			pos='fixed'
			top='0'
			left= '0'
			bg='black'
			zIndex='9999'
			width='100vw'
			h='100vh'>
			<Center h='100%'>
				<Spinner
					size='xl'
					speed='0.65s'
					color='gold'
				/>
			</Center>
		</Box>
	)
}
