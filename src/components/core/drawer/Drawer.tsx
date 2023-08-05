'use client'
import React, { useRef } from 'react'
import { VStack, IconButton } from '@/lib/chakra'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { DrawerContent } from './ui/DrawerContent'

export const Drawer = () => {
	const drawerRef = useRef<HTMLDivElement>(null)
	const { isOpen, toggleState } = useOutsideClick(drawerRef)

	return (
		<VStack
			pos='fixed'
			ref={drawerRef}
			alignItems={isOpen ? 'flex-start' : 'center'}
			spacing='50px'
			roundedRight='2xl'
			py={'10px'}
			px={isOpen ? '20px' : ''}
			transition='width .2s'
			w={isOpen ? ['250px', '300px', '350px'] : ['60px', '70px', '70px']}
			minH={['calc(100vh - 65px)','calc(100vh - 80px)']}
			bg='primary.200'
			zIndex='500'
			mt='auto'>
			<IconButton
				_hover={{
					color: 'gold',
				}}
				variant='default'
				color='primary.900'
				size='lg'
				ml={isOpen ? 'auto' : 'center'}
				aria-label='open drawer'
				icon={isOpen ? <BsArrowLeft size='1.5em' /> : <BsArrowRight size='1.5em' />}
				onClick={toggleState}
				w={'50px'}
			/>
			{isOpen ? (
				<DrawerContent
					alignItems='flex-start'
					size='full'
					isOpen={isOpen}
				/>
			) : (
				<DrawerContent
					isOpen={isOpen}
					alignItems='center'
				/>
			)}
		</VStack>
	)
}
