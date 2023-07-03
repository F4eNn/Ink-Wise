import React from 'react'
import { Button as UserMenu, Icon, useColorMode } from '@/lib/chakra'
import { FaUserCircle } from 'react-icons/fa'

type ButtonProps = {
	isOpenHelper: () => void
}

export const ButtonProfile = ({ isOpenHelper }: ButtonProps) => {
	const { colorMode } = useColorMode()

	return (
		<UserMenu
			role='group'
			display='flex'
			alignItems='center'
			bg='transparent'
			_hover={{
				bg: 'transparent',
			}}
			onClick={isOpenHelper}>
			<Icon
				_groupHover={{
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
