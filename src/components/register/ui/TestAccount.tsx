import React from 'react'
import { Box, Button } from '@/lib/chakra'
import { motion } from '@/lib/motion'
import { pulseAnimation } from '@/animations/GeneralAnimations'
export const TestAccount = () => {
	return (
		<Box>
			<Button
				as={motion.button}
                variants={pulseAnimation}
				variant='primary'
				fontSize='sm'>
				Test Account
			</Button>
		</Box>
	)
}
