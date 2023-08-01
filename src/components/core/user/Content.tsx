import React from 'react'
import { CardHeader, CardBody, Flex, Text, Box } from '@/lib/chakra'
import { Avatar } from './ui/Avatar'

interface EditContentProps {
	valueBio: string
	created: string
	name: string
	email?: string
	photo: string
}

export const Content = ({ valueBio, created, name, email, photo }: EditContentProps) => {
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
					fontSize={['md', 'lg']}
					as='i'>
					{valueBio.trim().length != 0 ? valueBio : `Hello, I'm ${name} 👋`}
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
