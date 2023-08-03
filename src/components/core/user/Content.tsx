import React from 'react'
import { CardHeader, CardBody, Flex, Text, Box } from '@/lib/chakra'
import { Avatar } from './ui/Avatar'
import { Friends } from './ui/Friends'

interface EditContentProps {
	valueBio: string
	created: string
	name: string
	email?: string
	photo: string
	headingFriends?: 'Friends'
}

export const Content = ({ valueBio, created, name, email, photo, headingFriends }: EditContentProps) => {
	return (
		<>
			<CardHeader>
				<Flex
					flexDir={['column', 'row']}
					alignItems='center'
					gap={['5', '8']}>
					<Box>
						<Avatar
							size={['2xl', 'xl', '2xl']}
							name={name}
							src={photo}
						/>
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
							{name}
						</Text>
						<Text fontSize={['md', 'lg']}>{email}</Text>
					</Flex>
				</Flex>
			</CardHeader>
			<CardBody>
				<Text
					color='grayish'
					fontSize={['md', 'lg']}
					as='i'>
					{valueBio.trim().length != 0 ? valueBio : `Hello, I'm ${name} 👋`}
				</Text>
				<Friends heading={headingFriends} />

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
