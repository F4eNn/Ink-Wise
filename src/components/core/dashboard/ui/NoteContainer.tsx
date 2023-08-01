import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { noteAnimation } from '../animations/animations'
import { Container, useColorMode } from '@/lib/chakra'
export const NoteContainer = ({ children }: { children: ReactNode }) => {
	const { colorMode } = useColorMode()

	return (
		<Container
			as={motion.div}
			{...noteAnimation}
			rounded='2xl'
            h='275px'
			borderColor={'primary.900'}
			borderBottomWidth='1px'
			borderLeftWidth='1px'
			borderRightWidth='1px'
			_hover={{
				boxShadow: `0px 2px 3px 1px  ${colorMode === 'dark' ? '#e49800' : '#c4c4c4f7'}`,
			}}
			w='500px'>
			{children}
		</Container>
	)
}
