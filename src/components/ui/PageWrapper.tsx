import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

export const PageWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<Box
			as={motion.div}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}>
			{children}
		</Box>
	)
}
