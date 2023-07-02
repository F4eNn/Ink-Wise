'use client'
import React from 'react'
import { Button as UserMenu, Icon, useColorMode } from '@/lib/chakra'
import { FaUserCircle } from 'react-icons/fa'


import { useToggle } from '@/hooks/useToggle'

export const Button = () => {
	const { colorMode } = useColorMode()
	const [isOpen, togglePannel] = useToggle()
	return (
		<UserMenu
			display='flex'
			alignItems='center'
			bg='transparent'
			_hover={{
				bg: 'transparent',
			}}
			onClick={togglePannel}>
			<Icon
				_hover={{
					color: colorMode === 'dark' ? 'mediumGold' : 'lightBrown',
					transition: 'color .3s',
				}}
				color={colorMode === 'dark' ? 'lightGold' : 'darkBrown'}
				w={30}
				h={30}
				as={FaUserCircle}
			/>
		</UserMenu>
	)
}
