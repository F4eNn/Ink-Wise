import React from 'react'
import {
	Center,
	Divider,
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
} from '@/lib/chakra'

import { Specifics } from './ui/Specifics'
import { Author } from './ui/Author'
import { Button } from './ui/Button'

import { motion} from 'framer-motion'
import { modalAnimation } from './animations/animations'

interface DetailsProps {
	onClose: () => void
	isOpen: boolean
	title: string
	category: string
	content: string
	tag: string
	created: string
}

export const Details = ({ isOpen, onClose, title, category, content, tag, created }: DetailsProps) => {

	return (
		<Modal
			size='6xl'
			onClose={onClose}
			isOpen={isOpen}
			isCentered
			motionPreset='scale'>
			<ModalOverlay
				backdropFilter='auto'
				backdropBlur='10px'
			/>
			<ModalContent
				as={motion.section}
				{...modalAnimation}
				bg='blackAlpha.700'
				borderWidth='1px'
				borderColor='primary.900'
				color='white'>
				<ModalHeader
					fontSize='5xl'
					bgGradient='linear(to-r, primary.900, #ffffff)'
					bgClip='text'
					fontWeight='extrabold'
					textTransform='capitalize'
					textAlign='center'>
					{title}
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody
					fontSize='xl'
					display='flex'
					maxW='850px'
					w='full'
					margin='0 auto'
					alignItems='center'
					flexDir='column'>
					<Text
						w='full'
						pos='relative'
						_after={{
							content: "''",
							pos: 'absolute',
							top: '-2',
							left: '0',
							w: '100%',
							h: '1px',
							bgGradient: 'linear(to-r, primary.900, #ffffff)',
						}}
						textAlign='center'>
						{content}
					</Text>
					<Flex
						mt='16'
						justifyContent='space-between'
						flexDir={{ base: 'column', md: 'unset' }}
						gap={{ base: '8' }}
						w='full'>
						<Specifics
							category={category}
							created={created}
							tag={tag}
						/>
						<Center bg='primary.900'>
							<Divider orientation={'vertical'} />
						</Center>
						<Author />
					</Flex>
				</ModalBody>
				<ModalFooter my='5'>
					<Button onInteraction={onClose}>Close</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}
