'use client'
import React, { useContext } from 'react'
import { Button as UserMenu, Icon, useColorMode } from '@/lib/chakra'
import { FaUserCircle } from 'react-icons/fa'

import { AuthCtx } from '../Register/context/Auth'
import { useRouter } from 'next/navigation'
export const Button = () => {
	const { logout } = useContext(AuthCtx)
	const router = useRouter()
	const { colorMode } = useColorMode()

	const openUserSettings = () => {
		
	}


	return (
		<UserMenu
			display='flex'
			alignItems='center'
			bg='transparent'
			_hover={{
				bg: 'transparent',
			}}
			onClick={() => {
				logout()
				router.push('/login')
			}}>
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
