import React from 'react'
import { CardHeader, CardBody, Flex, Text, Box } from '@/lib/chakra'
import { Avatar } from './ui/Avatar'
import { useAuth } from '@/hooks/useAuth'


interface EditContentProps {
	valueBio: string
	created: string
}

export const Content = ({ valueBio, created }: EditContentProps) => {
	const { authUser } = useAuth()

	return (
		<>
			<CardHeader>
				<Flex
					flexDir={['column', 'row']}
					alignItems='center'
					gap={['5', '8']}>
					<Box>
						<Avatar size={['2xl', 'xl', '2xl']} />
					</Box>
					<Flex
						alignSelf={['flex-start', 'unset']}
						flexDir='column'
						gap={['3', '4']}>
						<Text
							as='b'
							fontSize={['md', 'lg', 'xl']}>
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
						{created}
					</Text>
				</Text>
			</CardBody>
		</>
	)
}
