import React from 'react'
import { Box } from '@/lib/chakra'
import Image from 'next/image'

const TrashPage = () => {
	return (
		<Box
			mx='auto'
			pos='relative'
			w='400px'
			h='400px'>
			<Image
				src='/bindHero.png'
				alt='gif'
				fill
			/>
		</Box>
	)
}

export default TrashPage
