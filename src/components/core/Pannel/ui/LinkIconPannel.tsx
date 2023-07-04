import React from 'react'
import { Link } from '@/lib/chakra'
import NextLink from 'next/link'

type IconButtonPannelProps = {
	ariaLabel: string
	icon: React.ReactElement
	url: string
}

export const LinkIconPannel = ({ ariaLabel, icon, url }: IconButtonPannelProps) => {
	return (
		<Link
			w='full'
			color='white'
			whiteSpace='nowrap'
			variant='linkButton'
			as={NextLink}
			href={url}
			aria-label={ariaLabel}>
			{icon}
		</Link>
	)
}
