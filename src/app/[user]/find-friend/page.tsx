import React from 'react'
import { Box } from '@/lib/chakra'
import Image from 'next/image'

const FindeFriendPage = () => {
	return (
		<Box
			mx='auto'
			pos='relative'
			w='400px'
			h='400px'>
			<Image
				src='/HeroSearchIlustration.png'
				alt='gif'
				fill
			/>
		</Box>
	)
}

export default FindeFriendPage
