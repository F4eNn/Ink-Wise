import React from 'react'
import { Button } from '../../../lib/chakra'
import { GithubIcon } from '@/components/Icons/GithubIcon'

export const GitHubBtn = ({ mode }: { mode: string }) => {
	return (
		<Button
			variant={mode === 'dark' ? '' : 'outline'}
			bg='darkBrown'
			color='white'
			py={7}
			mt={4}
			mb={6}
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
