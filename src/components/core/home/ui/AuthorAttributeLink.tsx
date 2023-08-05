import React from 'react'
import { Flex, ListItem, Link } from '@/lib/chakra'
import NextLink from 'next/link'
import { FiLink } from 'react-icons/fi'

interface AuthorAttributeProps {
	url: string
	desc: string
}

export const AuthorAttributeLink = ({ desc, url }: AuthorAttributeProps) => {
	return (
		<ListItem>
			<Link
				as={NextLink}
				href={url}
				target='_blank'
				rel='noopener noreferrer'>
				<Flex
					alignItems='center'
					gap='2'>
					<FiLink /> {desc}
				</Flex>
			</Link>
		</ListItem>
	)
}
