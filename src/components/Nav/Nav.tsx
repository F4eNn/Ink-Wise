import React from 'react'
import { IconButton, useColorMode, Box, Flex } from '../../lib/chakra'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { Wrapper } from '../UI/Wrapper'
import { Logo } from '../UI/Logo'
import { Mobile } from './Mobile'
import { Desktop } from './Desktop'

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
					gap={5}
						alignItems='center'>
						<IconButton
							role='group'
							aria-label='toggle theme'
							bg={'transparent'}
							_hover={{ bg: 'transparent' }}
							icon={
								colorMode === 'dark' ? (
									<SunIcon
										w={'25px'}
										h={'25px'}
										transitionDuration={'.3s'}
										_groupHover={{ color: 'orange.300' }}
									/>
								) : (
									<MoonIcon
										w={'25px'}
										h={'25px'}
										transitionDuration={'.3s'}
										_groupHover={{ color: 'blue.700' }}
									/>
								)
							}
							onClick={toggleColorMode}
						/>
						<Mobile colorMode={colorMode}/>
						<Desktop colorMode={colorMode} />
					</Flex>
				</Flex>
			</Box>
		</Wrapper>
	)
}
