import { ConfirmModal } from '@/components/ui/ConfirmModal'
import { useAuth } from '@/hooks/useAuth'
import { User, deleteUser } from 'firebase/auth'
import { Button, useDisclosure } from '@/lib/chakra'
import React from 'react'

export const DeleteAcc = () => {
	const { isOpen, onClose, onOpen } = useDisclosure()
	const { authUser, Toast } = useAuth()

	if (!authUser) return
	const openModal = () => onOpen()

	const deleteAccount = async (user: User | string) => {
		try {
			await deleteUser(user as User)
            Toast({isHeading: false , desc:'Account has been deleted'})
		} catch (err) {
			console.error(err)
		}
	}
	return (
		<>
			<ConfirmModal
				removeAcc={deleteAccount}
				user={authUser}
				isOpen={isOpen}
				onClose={onClose}
                desc='This action will permanently delete your account. Are you sure you want to continue?'
			/>
			<Button
				variant='danger'
				mt='6'
				onClick={openModal}
				w='full'>
				Delete account
			</Button>
		</>
	)
}
