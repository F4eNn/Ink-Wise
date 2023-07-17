import { Button } from '@/lib/chakra'
import React from 'react'

interface UpdateButtonProps {
	setUpdateCredential: React.Dispatch<React.SetStateAction<boolean>>
	setCategoryVisible:  React.Dispatch<React.SetStateAction<boolean>>
}

export const UpdateButton = ({ setUpdateCredential, setCategoryVisible }: UpdateButtonProps) => {
	return (
		<Button
			onClick={() => {
				setUpdateCredential(false), setCategoryVisible(false)
			}}
			mb='8'>
			go back
		</Button>
	)
}
