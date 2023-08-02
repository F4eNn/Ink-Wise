import React from 'react'
import { Center, Divider, Flex, ModalCloseButton } from '@/lib/chakra'

import { Specifics } from './ui/Specifics'
import { Author } from './ui/Author'
import { Button } from './ui/Button'
import { ModalOverlay } from '../../ui/modal/ModalOverlay'
import { ModalContent } from '../../ui/modal/ModalContent'
import { ModalHeader } from '../../ui/modal/ModalHeader'
import { ModalBody } from '../../ui/modal/ModalBody'
import { DescriptionNote } from './ui/DescriptionNote'
import { ModalFooter } from '../../ui/modal/ModalFooter'

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
		<ModalOverlay
			isOpen={isOpen}
			onClose={onClose}>
			<ModalContent>
				<ModalHeader title={title} />
				<ModalCloseButton />
				<ModalBody>
					<DescriptionNote content={content} />
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
				<ModalFooter onClose={onClose} />
			</ModalContent>
		</ModalOverlay>
	)
}
