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
			border='primary.900'
			borderWidth='1px'
			href={url}
			as={NextLink}
			variant='linkButton'>
			{children}
		</Link>
	)
}
