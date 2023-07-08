import React from 'react'
import { Spinner, Center, Box } from '@/lib/chakra'
export const LoadingSkeleton = () => {
	return (
		<Box
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
