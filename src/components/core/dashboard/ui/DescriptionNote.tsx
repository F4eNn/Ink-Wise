import React from 'react'

import { Text } from '@/lib/chakra'

export const DescriptionNote = ({ content }: { content: string }) => {
	return (
		<Text
			w='full'
			pos='relative'
			_after={{
				content: "''",
				pos: 'absolute',
				top: '-2',
				left: '0',
				w: '100%',
				h: '1px',
				bgGradient: 'linear(to-r, primary.900, #ffffff)',
			}}
			textAlign='center'>
			{content}
		</Text>
	)
}
