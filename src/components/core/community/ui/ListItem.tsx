import React, { ReactNode } from 'react'
import { ListItem as ChakraListItem } from '@/lib/chakra'
import Link from 'next/link'
import { motion } from '@/lib/motion'
import { ListAnimation } from '../animations/community'
import { url } from 'inspector'

interface ListItemProps {
	children: ReactNode
	urlName: string
	bio: string
	joined: string
	photo: string
}

export const ListItem = ({ children, urlName, photo, bio, joined }: ListItemProps) => {
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
				style={{ textDecoration: 'none' }}
				href={{
					query: {
						about: [urlName, bio, joined, photo],
					},
				}}>
				{children}
			</Link>
		</ChakraListItem>
	)
}
