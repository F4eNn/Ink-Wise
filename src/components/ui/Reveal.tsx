'use client'
import React, { useRef, useEffect } from 'react'

import { Box, chakra } from '@/lib/chakra'
import { motion, useInView, useAnimation } from '@/lib/motion'

type ReavealProps = {
	children: React.ReactElement
	width?: 'fit-content' | (string | null)[]
}
const ChakraBox = chakra(motion.div)
export const Reveal = ({ children, width = 'fit-content' }: ReavealProps) => {
	const containerRef = useRef<HTMLDivElement>(null)

	const isInView = useInView(containerRef, { once: true })
	const mainControls = useAnimation()
	const slideControls = useAnimation()

	useEffect(() => {
		if (isInView) {
			mainControls.start('visible')
			slideControls.start('visible')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isInView])

	return (
		<Box
			ref={containerRef}
			pos='relative'
			overflow='hidden'
			w={width}>
			<ChakraBox
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0, transition: { duration: 0.75, delay: 0.25 } },
				}}
				initial='hidden'
				animate={mainControls}>
				{children}
			</ChakraBox>
			<ChakraBox
				variants={{
					hidden: { left: 0 },
					visible: { left: '100%', transition: { duration: 0.5, ease: 'easeIn' } },
				}}
				initial='hidden'
				animate={slideControls}
				pos='absolute'
				top='4'
				bottom='4'
				left='0'
				right='0'
				bg='gold'
				zIndex='300'
			/>
		</Box>
	)
}
