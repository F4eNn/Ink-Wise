'use client'
import React from 'react'
import { Drawer, DrawerContent, IconButton, useDisclosure } from '@/lib/chakra'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { ArrowBackIcon } from '@chakra-ui/icons'
export const Pannel = () => {
	const { isOpen, onToggle, onClose } = useDisclosure()
	// const [isOpen, toggleOpen] = useToggle()

	return (
		<>
			<IconButton
				aria-label='open drawer'
				icon={isOpen ? <ArrowBackIcon /> : <ArrowForwardIcon />}
				onClick={onToggle}
				w={'50px'}
			/>
			<Drawer
				placement='left'
				isOpen={isOpen}
        size={'10px'}
				onClose={onClose}>
				<DrawerContent
        border='1px solid gold'
          maxW={['245px', 'xs', 'sm']}
					h='calc(100vh - 100px)'
					mt='auto'>
					<IconButton
						pos='relative'
						right={'-50px'}
						ml='auto'
						aria-label='open drawer'
						icon={isOpen ? <ArrowBackIcon /> : <ArrowForwardIcon />}
						onClick={onToggle}
						w={'50px'}
					/>
				</DrawerContent>
			</Drawer>
		</>
	)
}
