import React from 'react'
import { Box, Flex, VStack, Text, HStack, Link, UnorderedList } from '@/lib/chakra'
import { Logo } from '@/components/ui/Logo'
import NextLink from 'next/link'
import { MdEmail } from 'react-icons/md'
import { BsGithub, BsDiscord } from 'react-icons/bs'
import { AuthorAttributeLink } from '@/components/core/home/ui/AuthorAttributeLink'

export const Footer = () => {
	return (
		<Flex flexDir='column'>
			<Box
				display='flex'
				flexDir={{ base: 'column', md: 'row' }}
				justifyContent='space-between'
				alignItems='center'
				mt='10'
				w='full'
				pos='relative'>
				<Logo />

				<Flex
					flexDir={{ base: 'column', md: 'row' }}
					alignItems='center'
					justifyContent={{ base: 'center', md: 'space-around' }}
					gap={5}
					w='full'>
					<VStack
						borderLeft={[null, null, '1px']}
						p={3}
						borderColor='primary.900'
						alignSelf={{ base: 'center', md: 'flex-start' }}
						justifySelf='flex-end'>
						<Text
							display='flex'
							alignItems='center'
							gap='3'>
							<MdEmail size='2em' /> mateusz4k@outlook.com
						</Text>
					</VStack>
					<HStack
						spacing={4}
						borderLeft={[null, null, '1px']}
						p={3}
						borderColor='primary.900'
						alignSelf={{ base: 'center', md: 'flex-start' }}
						justifySelf='flex-end'>
						<Link
							as={NextLink}
							target='_blank'
							rel='noopener noreferrer'
							href='https://github.com/F4eNn/Ink-Wise'
							_hover={{ color: 'grayish' }}>
							<BsGithub
								size='1.6em'
								title='github'
							/>
						</Link>
						<Link
							as={NextLink}
							href='https://discordapp.com/users/992404385705513010'
							target='_blank'
							rel='noopener noreferrer'
							color=' #7289da'
							_hover={{ color: '#5774df' }}>
							<BsDiscord
								size='1.7em'
								title='discord'
							/>
						</Link>
					</HStack>
				</Flex>
			</Box>
			<UnorderedList
				mt='10'
				color='grayish'>
				<AuthorAttributeLink
					desc='The photos are from...'
					url='https://freepik.com'
				/>
			</UnorderedList>
		</Flex>
	)
}
