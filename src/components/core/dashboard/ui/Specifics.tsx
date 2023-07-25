import { Box, Flex, Heading, Text } from '@/lib/chakra'
import React from 'react'
import { Tag } from './Tag'
import { BiSolidBookmarkAlt } from 'react-icons/bi'
import { getColorByCategory } from '../helpers/note'

interface SpecificsProps {
	tag: string
	category: string
	created: string
}

export const Specifics = ({ category, tag, created }: SpecificsProps) => {
	return (
		<Box w={['100%', '40%']}>
			<Heading
				as='h2'
				mb='10'
				fontSize='4xl'>
				Specifics
			</Heading>
			<Tag
				tag={tag}
				fontSize='xl'
				iconSize='.9em'
			/>
			<Box
				my='5'
				color={getColorByCategory(category)}>
				<Flex
					gap='2'
					textTransform='capitalize'
					fontSize='xl'>
					<Box w='40px'>
						<BiSolidBookmarkAlt size='2em' />
					</Box>
					<Text as='span'>{category}</Text>
				</Flex>
			</Box>
			<Text>
				Created:{' '}
				<Text
					as='span'
					color='primary.900'>
					{created}
				</Text>
			</Text>
		</Box>
	)
}
