import React from 'react'
import Image from 'next/image'
import { Box } from '@/lib/chakra'

type HeroProps = {
	src: string
}

export const Hero = ({ src }: HeroProps) => {
	return (
		<Box
			pos='relative'
			w='600px'
			h='600px'>
			<Image
				src={src}
				alt=''
				fill
                
			/>
		</Box>
	)
}

export default Hero
