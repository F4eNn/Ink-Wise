import React from 'react'
import { Flex, Text } from '@/lib/chakra'
import { PrimaryLink } from '@/components/ui/PrimaryLink'

export const RegisterLink = ({ content, path, linkDesc }: { content: string; path: string; linkDesc: string }) => {
	return (
		<Flex
			my={5}
			gap={2}
			justifyContent={'center'}
			textAlign={'right'}>
			<>
				<Text as='span'>{content}</Text>
				<PrimaryLink
					linkDesc={linkDesc}
					path={path}
				/>
			</>
		</Flex>
	)
}
