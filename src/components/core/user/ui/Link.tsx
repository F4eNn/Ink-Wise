import React from 'react'
import { Link as ChakraLink } from '@/lib/chakra'
import NextLink from 'next/link'

type LinkProps = {
    url: string
    children: React.ReactNode
    mt?: string | '5'
}

export const Link = ({url, children, mt}: LinkProps) => {
	return (
		<ChakraLink
			color='default'
			as={NextLink}
			mt={mt}
			variant='linkButton'
			w='70%'
			href={url}>
			{children}
		</ChakraLink>
	)
}
