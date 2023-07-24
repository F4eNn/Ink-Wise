import React from 'react'
import { Box, Button, Container as ChakraContainer, Flex, Heading } from '@/lib/chakra'
import { Note } from './Note'
import { BiSolidBookmarkAlt } from 'react-icons/bi'
import { motion } from '@/lib/motion'
import { projectAnimation } from '../animations/animations'
interface ColumnProps {
	id: string
	title: string
	tasks: {
		[id: string]: {
			category: string
			content: string
			tagOption: string
			title: string
			id: string
		}
	}[]
}

export const Container = ({ tag }: { tag: string }) => {
	const getColorByTag = (tag: string) => {
		switch (tag) {
			case 'important':
				return 'gold'
			case 'urgent':
				return 'royalblue'
			case 'minor':
				return 'green'
			default:
				return 'gray'
		}
	}

	return (
		<ChakraContainer
			as={motion.div}
			{...projectAnimation}
			rounded='2xl'
			borderColor={getColorByTag(tag)}
			borderBottomWidth='1px'
			borderLeftWidth='1px'
			borderRightWidth='1px'
			transition='.3s linear'
			_hover={{
				boxShadow: `0 2px 5px 2px  ${getColorByTag(tag)}`,
			}}
			w='500px'>
			<Box>
				<Flex
					justifyContent='space-between'
					alignItems='center'>
					<Heading
						my={'5'}
						as='h2'
						fontSize='xl'>
						Notatka
					</Heading>
					<Box color={getColorByTag(tag)}>
						<BiSolidBookmarkAlt size='2em' />
					</Box>
				</Flex>
				<Note />
				<Button
					as={motion.button}
					whileTap={{ scale: 0.9 }}
					my='5'
					ml='auto'
					display='block'>
					Details
				</Button>
			</Box>
		</ChakraContainer>
	)
}
