import { Flex, Text } from '@/lib/chakra'
import React from 'react'
import { getColorByTag } from '../helpers/note'
import { BsCircleFill } from 'react-icons/bs'

interface TagProps {
	tag: string
}

export const Tag = ({ tag }: TagProps) => {
	return (
		<Flex
			alignItems='center'
			gap='2'
			textTransform='capitalize'
			color={getColorByTag(tag)}
			fontSize='xs'>
			<BsCircleFill size='.7em' />
			<Text as='span'>{tag}</Text>
		</Flex>
	)
}
