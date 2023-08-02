import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'
import { modalAnimation } from '../../core/dashboard/animations/animations'
import { ModalContent as Content } from '@/lib/chakra'
export const ModalContent = ({ children }: { children: ReactNode }) => {
	return (
		<Content
			as={motion.section}
			{...modalAnimation}
			bg='blackAlpha.700'
			borderWidth='1px'
			borderColor='primary.900'
			color='white'>
			{children}
		</Content>
	)
}
