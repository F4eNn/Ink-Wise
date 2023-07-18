import React from 'react'
import { Link, Text } from '@/lib/chakra'
import NextLink from 'next/link'

type LinkDrawerProps = {
	desc: string
	ariaLabel: string
	icon: React.ReactElement
	url: string
}

export const LinkDrawer = ({ desc, icon, url, ariaLabel }: LinkDrawerProps) => {
	return (
		<Link
			variant='linkButton'
			height='45px'
            color='white'
			w='full'
			justifyContent='flex-start'
			gap='3'
			aria-label={ariaLabel}
			href={url}>
			{icon}
			<Text whiteSpace='nowrap'>{desc}</Text>
		</Link>
	)
}
