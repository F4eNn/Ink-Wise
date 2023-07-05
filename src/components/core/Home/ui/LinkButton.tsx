import React from 'react'
import { Link } from '@/lib/chakra'
import NextLink from 'next/link'
type LinkButtonProps = {
	url: string
	children: React.ReactNode
}

export const LinkButton = ({ children, url }: LinkButtonProps) => {
	return (
		<Link
			href={url}
			as={NextLink}
			variant='linkButton'>
			{children}
		</Link>
	)
}
