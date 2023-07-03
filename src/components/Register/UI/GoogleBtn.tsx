import { Button } from '../../../lib/chakra'
import { GoogleIcon } from '@/components/icons/GoogleIcon'
import React from 'react'

export const GoogleBtn = ({ mode }: { mode: string }) => {
	return (
		<Button
			variant={mode === 'dark' ? '' : 'outline'}
			leftIcon={<GoogleIcon />}
			bg='white'
			w='full'
			py={7}
			_hover={{
				bg: 'veryLightGrey',
			}}
			fontSize='.8em'
			color='darkBrown'>
			Continue with Google
		</Button>
	)
}
