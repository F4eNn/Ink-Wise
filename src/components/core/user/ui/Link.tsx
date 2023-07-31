import React from 'react'
import { Link as ChakraLink, MenuItem } from '@/lib/chakra'
import NextLink from 'next/link'

type LinkProps = {
    url: string
    children: React.ReactNode
    mt?: string | '5'
}

export const Link = ({url, children, mt}: LinkProps) => {
	return (
		<MenuItem
			as={NextLink}
			mt={mt}
			href={url}>
			{children}
		</MenuItem>
	)
}
