'use client'
import React, { useRef, useEffect } from 'react'
import { VStack, IconButton, Flex } from '@/lib/chakra'

import { IoMdPersonAdd } from 'react-icons/io'
import { BsArrowRight } from 'react-icons/bs'
import { BsArrowLeft } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
import { DeleteIcon } from '@chakra-ui/icons'
import { useToggle } from '@/hooks/useToggle'
import { LinkIconPannel } from './ui/LinkIconPannel'
import { LinkDrawer } from './ui/LinkDrawer'

import { useAuth } from '@/hooks/useAuth'
export const Pannel = () => {
	const [isOpen, toggleOpen] = useToggle()
	const drawerRef = useRef<HTMLDivElement>(null)
	const { authUser } = useAuth()
	useEffect(() => {
		const clickOutsideHandler = (e: MouseEvent) => {
			if (e.target != drawerRef.current && isOpen) {
				toggleOpen()
			}
		}
		window.document.addEventListener('click', clickOutsideHandler)

		return () => window.document.removeEventListener('click', clickOutsideHandler)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen])
	return (
		<VStack
			pos='fixed'
			ref={drawerRef}
			alignItems={isOpen ? 'flex-start' : 'center'}
			spacing='50px'
			rounded='2xl'
			py={'10px'}
			px={isOpen ? '20px' : ''}
			transition='width .2s'
			w={isOpen ? ['250px', '300px', '350px'] : ['60px', '70px', '70px']}
			minH='calc(100vh - 100px)'
			bg='alphaLightBrown'
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
				onClick={toggleOpen}
				w={'50px'}
			/>
			{isOpen ? (
				<VStack
					w='100%'
					spacing='30px'
					alignItems='flex-start'>
					<LinkDrawer
						icon={<AiOutlinePlus />}
						url={`/${authUser?.displayName}/note`}
						ariaLabel='create'
						desc='Create Ink'
					/>
					<LinkDrawer
						icon={<FaUsers />}
						url={`/${authUser?.displayName}/community`}
						ariaLabel='community'
						desc='Community'
					/>
					<LinkDrawer
						icon={<IoMdPersonAdd />}
						url={`/${authUser?.displayName}/find-friend`}
						ariaLabel='add friend'
						desc='Add friend'
					/>
					<LinkDrawer
						icon={<DeleteIcon />}
						url={`/${authUser?.displayName}/trash`}
						ariaLabel='Trash'
						desc='Trash'
					/>
				</VStack>
			) : (
				<VStack spacing='30px'>
					<LinkIconPannel
						url={`/${authUser?.displayName}/note`}
						ariaLabel='Create'
						icon={<AiOutlinePlus />}
					/>
					<LinkIconPannel
						url={`/${authUser?.displayName}/community`}
						ariaLabel='Create'
						icon={<FaUsers />}
					/>
					<LinkIconPannel
						url={`/${authUser?.displayName}/find-friend`}
						ariaLabel='Create'
						icon={<IoMdPersonAdd />}
					/>
					<LinkIconPannel
						url={`/${authUser?.displayName}/trash`}
						ariaLabel='Create'
						icon={<DeleteIcon />}
					/>
				</VStack>
			)}
		</VStack>
	)
}
