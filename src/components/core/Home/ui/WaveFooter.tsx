'use client'
import React from 'react'
import { Box } from '@/lib/chakra'
import { useColorMode } from '@/lib/chakra'

export const WaveFooter = () => {
	const { colorMode } = useColorMode()
	return (
		<Box
			width='full'
			aspectRatio={1400 / 200}
			bgRepeat='no-repeat'
			bgPos='center'
			bgSize='cover'
			bgImage={colorMode === 'dark' ? "url('./wave.svg')" : "url('./wave-dark.svg')"}
		/>
	)
}
