import React from 'react'
import { Box } from '@/lib/chakra'
import Image from 'next/image'
const NotePage = () => {
	return (
		<Box
			mx='auto'
			pos='relative'
			w='300px'
			h='300px'>
			<Image
				src='/createHero.png'
				alt='gif'
				fill
			/>
		</Box>
	)
}

export default NotePage
