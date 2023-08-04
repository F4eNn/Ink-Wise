import React from 'react'

import { Button, Menu, MenuList, Flex, MenuItem } from '@/lib/chakra'
import { useAuth } from '@/hooks/useAuth'

import { MenuButton } from './ui/MenuButton'
import { Avatar } from './ui/Avatar'
import { Link } from './ui/Link'

export const UserDropdown = () => {
	const { authUser, logout } = useAuth()

	return (
		<Menu>
			<MenuButton />
			<MenuList
				zIndex='9999'
				width='300px'
				py='5'
				bg='primary.100'
				borderColor='borderColor'
				rounded='xl'
				borderWidth='1px'>
				<Avatar
					size={['xl', 'xl', '2xl']}
					src={authUser!.photoURL!}
					name={authUser!.displayName!}
				/>
				<Flex
					alignItems='center'
					flexDir='column'>
					<Link
						mt='7'
						url={`/${authUser?.displayName}/edit-profile`}>
						Edit Profile
					</Link>
					<Link
						mt='3'
						url={`/${authUser?.displayName}`}>
						Dashboard
					</Link>
					<MenuItem
						as={Button}
						variant='outlineDark'
						mt='8'
						w='80%'
						color='white'
						bg='error.900'
						_hover={{
							bg: 'error',
						}}
						onClick={logout}>
						Logout
					</MenuItem>
				</Flex>
			</MenuList>
		</Menu>
	)
}
