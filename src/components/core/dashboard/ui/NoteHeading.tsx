import { Flex, Heading as ChakraHeading, Box } from '@/lib/chakra'
import React from 'react'
import { BiSolidBookmarkAlt } from 'react-icons/bi'
import { getColorByCategory } from '../helpers/note'

interface HeadingProps {
	title: string
	category: string
}

export const NoteHeading = ({ category, title }: HeadingProps) => {
	return (
		<Flex
			justifyContent='space-between'
			alignItems='center'>
			<ChakraHeading
				my={'5'}
				as='h2'
				fontSize='xl'>
				{title}
			</ChakraHeading>
			<Box color={getColorByCategory(category)}>
				<BiSolidBookmarkAlt size='2em' />
			</Box>
		</Flex>
	)
}
