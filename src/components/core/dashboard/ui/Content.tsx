import { Box, Text } from '@/lib/chakra'
import React from 'react'

interface ContentProps {
	content: string
}

export const Content = ({ content }: ContentProps) => {
	return (
		<Box
			my='3'
			fontSize='xs'
			color='grayish'
			p='3'>
			<Text
				as='i'
				fontSize='lg'
				h={[null, null, '52px']}
				noOfLines={[1, 2]}>
				{content}
			</Text>
		</Box>
	)
}
