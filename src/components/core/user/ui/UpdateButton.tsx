import { Button } from '@/lib/chakra'
import React from 'react'

interface UpdateButtonProps {
	setUpdateCredential: React.Dispatch<React.SetStateAction<boolean>>
	setCategoryVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const UpdateButton = ({ setUpdateCredential, setCategoryVisible }: UpdateButtonProps) => {
	const updateData = () => {
		setUpdateCredential(false)
		setCategoryVisible(false)
	}
	return (
		<Button
			variant='primary'
			onClick={updateData}
			mr='auto'
			mb='8'>
			go back
		</Button>
	)
}
