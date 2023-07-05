import React from 'react'
import { Box } from '@/lib/chakra'
import Image from 'next/image'
const CommunityPage = () => {
	return (
		<Box
			mx='auto'
			pos='relative'
			w='400px'
			h='400px'>
			<Image
				src='/communityHero.png'
				alt='gif'
				fill
			/>
		</Box>
	)
}

export default CommunityPage
