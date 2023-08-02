import { Modal, ModalOverlay as Overlay } from '@/lib/chakra'
import React, { ReactNode } from 'react'

interface ModalOverlayProps {
	onClose: () => void
	isOpen: boolean
	children: ReactNode
	size?: string | '6xl'
}

export const ModalOverlay = ({ isOpen, onClose, children, size = '6xl' }: ModalOverlayProps) => {
	return (
		<Modal
			size={size}
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
