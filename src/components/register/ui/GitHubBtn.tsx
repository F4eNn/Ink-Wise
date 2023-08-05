import React from 'react'
import { Button } from '../../../lib/chakra'
import { GithubIcon } from '@/components/register/icons/GithubIcon'
import { useAuth } from '@/hooks/useAuth'

export const GitHubBtn = ({ mode }: { mode: string }) => {
	const { Toast } = useAuth()

	const currentlyNotAvailable = () => {
		Toast({ desc: 'Available soon', isHeading: false })
	}

	return (
		<Button
			variant={mode === 'dark' ? '' : 'outline'}
			bg='darkBrown'
			color='white'
			py={7}
			mt={4}
			mb={6}
			onClick={currentlyNotAvailable}
			_hover={{
				bg: 'darkBrownHover',
			}}
			fontSize='.8em'
			leftIcon={<GithubIcon />}
			w='full'>
			Continue with Github
		</Button>
	)
}
