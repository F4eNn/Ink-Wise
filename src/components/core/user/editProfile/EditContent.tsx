import React from 'react'
import { CardHeader, CardBody, Flex, Text } from '@/lib/chakra'
import { Avatar } from './ui/Avatar'
import { useAuth } from '@/hooks/useAuth'
import { useDate } from '@/hooks/useDate'

interface EditContentProps {
	// isSave: boolean
    valueBio: string
}


export const EditContent = ({valueBio}:EditContentProps) => {
	const { authUser } = useAuth()
	const { finalDate: CreationTime } = useDate(authUser?.metadata.creationTime!)
	return (
		<>
			<CardHeader>
				<Flex
					alignItems='center'
					gap={['5', '8']}>
					<Avatar />
					<Flex
						flexDir='column'
						gap={['3', '4']}>
						<Text fontSize={['md', 'lg', 'xl']}>
							<Text
								as='span'
								color='primary.900'>
								@
							</Text>
							{authUser?.displayName}
						</Text>
						<Text fontSize={['md', 'lg']}>{authUser?.email}</Text>
					</Flex>
				</Flex>
			</CardHeader>
			<CardBody>
				<Text
					fontSize={['md', 'lg']}
					as='i'>
					{valueBio}
				</Text>
				<Text
					fontSize={['md', 'lg']}
					mt='10'>
					Friends:{' '}
					<Text
						as='i'
						color='primary.900'>
						I&apos;m Working on it
					</Text>
				</Text>
				<Text>
					Joined:{' '}
					<Text
						as='span'
						color='primary.900'>
						{CreationTime}
					</Text>
				</Text>
			</CardBody>
		</>
	)
}
