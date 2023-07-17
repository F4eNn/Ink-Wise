import React from 'react'
import { IconButton, Icon } from '@/lib/chakra'
import { FaUserCircle } from 'react-icons/fa'

type ButtonProps = {
	isOpenHelper: () => void
}

export const ButtonProfile = ({ isOpenHelper }: ButtonProps) => {
	return (
		<IconButton
			aria-label='user details'
			role='group'
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
			onClick={isOpenHelper}
		/>
	)
}
