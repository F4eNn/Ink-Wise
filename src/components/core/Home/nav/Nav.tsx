import React, { useEffect, useState } from 'react'
import { IconButton, useColorMode, Box, Flex } from '../../../../lib/chakra'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { Logo } from '../../../ui/Logo'
import { Mobile } from './Mobile'
import { Desktop } from './Desktop'
import { useScrollPosition } from '@/hooks/useScrollPosition'
export const Nav = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const [isScroll, setIsScroll] = useState(false)

	const scrollPosition = useScrollPosition()

	useEffect(() => {
		if (scrollPosition != 0) {
			setIsScroll(true)
		} else {
			setIsScroll(false)
		}
	}, [scrollPosition])

	return (
		<>
			{isScroll && <Box h='100px' />}
			<Box
				as='nav'
				w='full'
				zIndex='999'
				px={2}
				top='0'
				pos={isScroll ? 'fixed' : 'static'}
				transition='background-color .5s'
				bg={isScroll ? 'alphaCustomWhite' : ''}>
				<Flex
					alignItems={'center'}
					justifyContent={'space-between'}
					gap={[2, 5, 10]}>
					<Logo />
					<Flex
						gap={[null, 5]}
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
						<Mobile />
						<Desktop />
					</Flex>
				</Flex>
			</Box>
		</>
	)
}
