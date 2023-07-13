import React from 'react'
import { Box } from '@/lib/chakra'
import Image from 'next/image'

type HeroProps = {
	src: string
}

export const Hero = ({ src }: HeroProps) => {
	return (
		<Box
			mx='auto'
			pos='relative'
			w='400px'
			h='400px'>
			<Image
				src={src}
				alt=''
				fill
                
			/>
		</Box>
	)
}

export default Hero
