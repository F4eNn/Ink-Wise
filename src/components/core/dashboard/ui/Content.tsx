import { Box, Text } from '@/lib/chakra'
import React from 'react'

interface ContentProps {
	content: string
}

export const Content = ({ content }: ContentProps) => {
	return (
		<Box
			my='5'
			fontSize='xs'
			p='3'>
			<Text as='i' noOfLines={[1, 2]} >{content}</Text>
		</Box>
	)
}
