'use client'
import React from 'react'
import { IconButton, useColorMode, Box, UnorderedList, ListItem, Flex } from '../../lib/chakra'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { Wrapper } from '../UI/Wrapper'
import { Logo } from '../UI/Logo'
import Link from 'next/link'



export const Nav = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<Wrapper>
			<Box as='nav'>
				<Flex
					alignItems={'center'}
					justifyContent={'space-between'}
					gap={10}>
                        <Logo />
					<Flex
						alignItems={'center'}
						gap={20}>
						<IconButton
							role='group'
							aria-label='toggle theme'
							bg={'transparent'}
							_hover={{ bg: 'transparent' }}
							icon={
								colorMode === 'dark' ? (
									<SunIcon
										w={30}
										h={30}
										transitionDuration={'.3s'}
										_groupHover={{ color: 'orange.300' }}
									/>
								) : (
									<MoonIcon
										w={30}
										h={30}
										transitionDuration={'.3s'}
										_groupHover={{ color: 'blue.700' }}
									/>
								)
							}
							onClick={toggleColorMode}
						/>
						<UnorderedList
							display={'flex'}
							gap={10}>
							<ListItem>
								<Link href='/login'>Login</Link>
							</ListItem>
							<ListItem>
								<Link href='/signup'>Sign up</Link>
							</ListItem>
						</UnorderedList>
					</Flex>
				</Flex>
			</Box>
		</Wrapper>
	)
}
