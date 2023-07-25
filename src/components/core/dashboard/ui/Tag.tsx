import { Box, Flex, Text } from '@/lib/chakra'
import React from 'react'
import { getColorByTag } from '../helpers/note'
import { BsCircleFill } from 'react-icons/bs'

interface TagProps {
	tag: string
	fontSize?: string | 'xs'
	iconSize?: string | '.7em'
	width?: 'unset' | '40px'
}

export const Tag = ({ tag, fontSize = 'xs', iconSize = '.7em', width = 'unset' }: TagProps) => {
	return (
		<Flex
			alignItems='center'
			gap='2'
			textTransform='capitalize'
			color={getColorByTag(tag)}
			fontSize={fontSize}>
			<Box
				w={width}
				display='flex'
				justifyContent='center'>
				<BsCircleFill size={iconSize} />
			</Box>
			<Text as='span'>{tag}</Text>
		</Flex>
	)
}
