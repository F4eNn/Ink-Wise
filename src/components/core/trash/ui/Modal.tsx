import { ModalBody } from '@/components/ui/modal/ModalBody'
import { ModalContent } from '@/components/ui/modal/ModalContent'
import { ModalOverlay } from '@/components/ui/modal/ModalOverlay'
import { Button, Heading, ModalFooter } from '@/lib/chakra'
import React from 'react'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	id: string
	deleteNote: (id: string) => Promise<void>
}

export const Modal = ({ id, isOpen, onClose, deleteNote }: ModalProps) => {
	return (
		<ModalOverlay
			size='xl'
			isOpen={isOpen}
			onClose={onClose}>
			<ModalContent>
				<ModalBody>
					<Heading
						textAlign='center'
						fontSize='2xl'
						mt='5'
						mb='14'>
						This will permanently delete the note, are you sure to execute?
					</Heading>
				</ModalBody>
				<ModalFooter>
					<Button
						variant='primary'
						onClick={() => {
							deleteNote(id), onClose()
						}}
						mx='auto'
						w='70%'>
						Confirm
					</Button>
				</ModalFooter>
			</ModalContent>
		</ModalOverlay>
	)
}
