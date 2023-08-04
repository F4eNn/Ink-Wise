import React from 'react'
import Image from 'next/image'
import { AspectRatio } from '@/lib/chakra'

type HeroProps = {
	src: string
}

export const Hero = ({ src }: HeroProps) => {
	return (
		<AspectRatio
			pos='relative'
			ratio={1}
			w='full'>
			<Image
				src={src}
				alt='Decorative photo showcasing the current page'
				fill
			/>
		</AspectRatio>
	)
}

export default Hero
