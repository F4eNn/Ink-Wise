'use client'
import React from 'react'
import styled from 'styled-components'
import { IconButton, useColorMode, Box, UnorderedList, ListItem, Flex } from '../../lib/chakra'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { Wrapper } from '../UI/Wrapper'
import Link from 'next/link'

const StyledLink = styled(Link)<{ $theme: string }>`
	width: 30%;
	height: 100px;
	background-image: ${props =>
	props.$theme === 'dark' ? "url('/dark-logo-desktop.png')" : "url('/light-logo-desktop.png')"};
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`

export const Nav = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<Wrapper>
			<Box as='nav'>
				<Flex
					alignItems={'center'}
					justifyContent={'space-between'}
					gap={10}>
					<StyledLink
						$theme={colorMode}
						href='/'></StyledLink>

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
