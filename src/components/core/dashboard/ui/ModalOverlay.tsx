import { Modal, ModalOverlay as Overlay } from '@/lib/chakra'
import React, { ReactNode } from 'react'

interface ModalOverlayProps {
	onClose: () => void
	isOpen: boolean
	children: ReactNode
}

export const ModalOverlay = ({ isOpen, onClose, children }: ModalOverlayProps) => {
	return (
		<Modal
			size='6xl'
			onClose={onClose}
			isOpen={isOpen}
			isCentered
			motionPreset='scale'>
			<Overlay
				backdropFilter='auto'
				backdropBlur='10px'
			/>
			{children}
		</Modal>
	)
}
