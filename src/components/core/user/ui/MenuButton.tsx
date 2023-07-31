import React from 'react'
import { IconButton, Icon, MenuButton as ChakraMenuButton } from '@/lib/chakra'
import { FaUserCircle } from 'react-icons/fa'

export const MenuButton = () => {
	return (
		<ChakraMenuButton
			as={IconButton}
			aria-label='user profile'
			display='flex'
			alignItems='center'
			variant='default'
			icon={
				<Icon
					_groupHover={{
						color: 'primary.600',
						transition: 'color .3s',
					}}
					color='primary.300'
					w={30}
					h={30}
					as={FaUserCircle}
				/>
			}
		/>
	)
}
