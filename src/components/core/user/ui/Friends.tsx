import React from 'react'
import { Box, Heading, Text, VStack } from '@/lib/chakra'
import Hero from '@/components/ui/Hero'

interface FriendsProps {
	heading?: 'Friends' | 'Your friends'
}

export const Friends = ({ heading = 'Your friends' }: FriendsProps) => {
	return (
		<VStack>
			<Heading mt='16'>{heading}</Heading>
			<Box w={['100%', null, '70%', '60%', '70%']}>
				<Hero src='/friends.png' />
			</Box>
			<Text
				mb='8'
				fontWeight='bold'
				fontSize='6xl'>
				0
			</Text>
		</VStack>
	)
}
