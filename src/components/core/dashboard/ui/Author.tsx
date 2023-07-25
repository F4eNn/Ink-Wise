import { Box, Flex, Heading, Text } from '@/lib/chakra'
import React from 'react'
import { Avatar } from '../../user/ui/Avatar'
import { useAuth } from '@/hooks/useAuth'

export const Author = () => {
	const { authUser } = useAuth()
	const username = authUser?.displayName
	return (
		<Box
			textAlign='left'
			w={['100%', null, '50%']}>
			<Heading
				as='h2'
				mb='10'
				fontSize='4xl'>
				Author
			</Heading>
			<Flex
				gap='3'
				flexDir='column'
				alignItems='center'>
				<Box>
					<Avatar
						size='2xl'
						withBadge={false}
					/>
				</Box>
				<Text
					ml='4'
					fontSize='2xl'
					color='primary.900'
					as='span'>
					{username}
				</Text>
			</Flex>
		</Box>
	)
}
