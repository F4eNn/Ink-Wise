import React from 'react'
import { Flex, Text, Link } from '../../../lib/chakra'
import NextLink from 'next/link'

export const RegisterLink = ({ content, path, linkDesc }: { content: string; path: string; linkDesc: string }) => {
	return (
		<Flex
			my={5}
			gap={2}
			justifyContent={'center'}
			textAlign={'right'}>
			<>
				<Text as='span'>{content}</Text>
				<Link
					position={'relative'}
					_after={{
						position: 'absolute',
						bottom: '0',
						left: '0',
						content: '""',
						width: '30%',
						height: '1px',
						bg: 'orange',
						transitionProperty: 'width',
						transitionDuration: '.3s',
					}}
					_hover={{
						_after: {
							width: '100%',
						},
					}}
					color={'gold'}
					as={NextLink}
					href={path}>
					{linkDesc}
				</Link>
			</>
		</Flex>
	)
}
