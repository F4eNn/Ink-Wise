import { Button } from '../../../lib/chakra'
import { GoogleIcon } from '@/components/register/icons/GoogleIcon'
import { useAuth } from '@/hooks/useAuth'
import React from 'react'

export const GoogleBtn = ({ mode }: { mode: string }) => {
	const { Toast } = useAuth()

	const currentlyNotAvailable = () => {
		Toast({ desc: 'Available soon', isHeading: false })
	}
	return (
		<Button
			variant={mode === 'dark' ? '' : 'outline'}
			leftIcon={<GoogleIcon />}
			bg='white'
			w='full'
			py={7}
			onClick={currentlyNotAvailable}
			_hover={{
				bg: 'veryLightGrey',
			}}
			fontSize='.8em'
			color='darkBrown'>
			Continue with Google
		</Button>
	)
}
