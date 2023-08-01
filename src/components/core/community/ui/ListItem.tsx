import React, { ReactNode } from 'react'
import { ListItem as ChakraListItem, Link } from '@/lib/chakra'
import NextLink from 'next/link'
import { motion } from '@/lib/motion'
import { ListAnimation } from '../animations/community'
interface ListItemProps {
	children: ReactNode
	urlName: string
}

export const ListItem = ({ children, urlName }: ListItemProps) => {
	return (
		<ChakraListItem
			{...ListAnimation}
			as={motion.li}
			pos='relative'
			my={['5', '10']}
			w='full'
			borderWidth='1px'
			borderColor='borderColor'
			rounded='xl'
			px='3'
			py='6'>
			<Link
				as={NextLink}
				style={{ textDecoration: 'none' }}
				href={`?about=${urlName}`}>
				{children}
			</Link>
		</ChakraListItem>
	)
}
