import { Avatar, Box, Flex, Heading } from '@/lib/chakra'
import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'

interface ListItemContentProps {
	name: string
	photo: string
}
export const ListItemContent = ({ name, photo }: ListItemContentProps) => {
	return (
		<>
			<Flex
				gap={{ base: '5', md: 'unset' }}
				flexDir={{base: 'column', sm: 'unset'}}
				alignItems={{ base: 'center', sm: 'unset' }}>
				<Avatar
					size={['xl', '2xl']}
					src={photo}
					name={name}
				/>
				<Heading
					mx={{ sm: 'auto' }}
					as='h2'
					bgGradient='linear(to-l, primary.300, primary.900)'
					bgClip='text'
					fontSize={['2xl', '3xl', '4xl']}
					fontWeight='extrabold'>
					{name}
				</Heading>
			</Flex>
			<Box
				pos='absolute'
				top='4'
				right='4'
				color='primary.600'>
				<BiLinkExternal size='1.5em' />
			</Box>
		</>
	)
}
