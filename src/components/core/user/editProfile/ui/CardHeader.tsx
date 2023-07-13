// 'use client'

import { CardHeader as ChakraCardHeader, Heading,  Flex,  Text,  VStack } from '@/lib/chakra'
import { Avatar } from './Avatar'
import { useAuth } from '@/hooks/useAuth'





export const CardHeader = () => {
	const { authUser } = useAuth()
	return (
		<ChakraCardHeader>
			<Flex
				gap='3'
				flexWrap='wrap'>
				<Avatar />
				<Flex flexDir='column' gap='10px'>
					<Heading size='md'>{`@${authUser?.displayName}`}</Heading>
                    <Text>mateusz4k@outlook.com</Text>
				</Flex >
			</Flex>
		</ChakraCardHeader>
	)
}
