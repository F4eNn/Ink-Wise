'use client'
import React, { ReactNode, useState, useEffect } from 'react'

import { Box } from '@/lib/chakra'
import { motion } from '@/lib/motion'
import { transitionPage } from '@/animations/GeneralAnimations'

export default function RootTemplate({ children }: { children: ReactNode }) {
	const [transitionStage, setTransitionStage] = useState<'visible' | 'hidden'>('hidden')

	useEffect(() => setTransitionStage('visible'), [])
	return (
		<Box h='100%'>
			<Box
				as={motion.div}
				initial='hidden'
				animate={transitionStage}
				variants={transitionPage}>
				{children}
			</Box>
		</Box>
	)
}
