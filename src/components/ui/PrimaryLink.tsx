import React from 'react'
import { Link } from '../../lib/chakra'
import NextLink from 'next/link'

export const PrimaryLink = ({
	path,
	linkDesc,
	color = 'primary.900',
}: {
	path: string
	linkDesc: string
	color?: 'primary.900' | 'primary.600'
}) => {
	return (
		<Link
			position={'relative'}
			_after={{
				position: 'absolute',
				bottom: '0',
				left: '0',
				content: '""',
				width: '30%',
				height: '1px',
				bg: color,
				transitionProperty: 'width',
				transitionDuration: '.3s',
			}}
			_hover={{
				_after: {
					width: '100%',
				},
			}}
			color={color}
			as={NextLink}
			href={path}>
			{linkDesc}
		</Link>
	)
}
