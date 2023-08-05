import React from 'react'
import { User } from 'firebase/auth'

import { ModalBody } from '@/components/ui/modal/ModalBody'
import { ModalContent } from '@/components/ui/modal/ModalContent'
import { ModalOverlay } from '@/components/ui/modal/ModalOverlay'
import { Button, Heading, ModalFooter } from '@/lib/chakra'


interface ModalProps {
	isOpen: boolean
	onClose: () => void
	id?: string
	// eslint-disable-next-line no-unused-vars
	moveToBin?: (id: string) => Promise<void>
	// eslint-disable-next-line no-unused-vars
	removeAcc?: (user: User) => Promise<void>
	user?: User
	desc:
		| 'This will permanently delete the note, are you sure to execute?'
		| 'This action will permanently delete your account. Are you sure you want to continue?'
}
export const ConfirmModal = ({ id, isOpen, onClose, moveToBin, removeAcc, user, desc }: ModalProps) => {
	const executeTask = () => {
		if (id && moveToBin) {
			moveToBin(id)
		} else if (user && removeAcc) {
			removeAcc(user)
		}
		onClose()
	}

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
						{desc}
					</Heading>
				</ModalBody>
				<ModalFooter>
					<Button
						variant='primary'
						onClick={executeTask}
						mx='auto'
						w='70%'>
						Confirm
					</Button>
				</ModalFooter>
			</ModalContent>
		</ModalOverlay>
	)
}
