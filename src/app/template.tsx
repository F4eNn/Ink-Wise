'use client'
import React, { ReactNode, useState, useEffect } from 'react'
import { Box } from '@/lib/chakra'
import { motion } from '@/lib/motion'
import { Nav } from '@/components/core/home/nav/Nav'
import { usePathname } from 'next/navigation'
import { transitionPage } from '@/animations/GeneralAnimations'

export default function RootTemplate({ children }: { children: ReactNode }) {
	const [transitionStage, setTransitionStage] = useState<'visible' | 'hidden'>('hidden')

	const pathname = usePathname()
	const isNotHomePage = pathname !== '/'

	useEffect(() => setTransitionStage('visible'), [])

	return (
		<Box h='100%'>
			<Box
				as={motion.div}
				initial='hidden'
				animate={transitionStage}
				variants={transitionPage}>
				{isNotHomePage && <Nav />}
				{children}
			</Box>
		</Box>
	)
}
