import { AvatarBadge, Avatar as ChakraAvatar } from '@/lib/chakra'
import { useAuth } from '@/hooks/useAuth'

import React from 'react'

interface AvatarProps {
	size: string[] | string
	withBadge?: boolean | true
	marginLeft?: string | '5'
}

export const Avatar = ({ size, withBadge = true, marginLeft = '5' }: AvatarProps) => {
	const { authUser } = useAuth()
	return (
		<ChakraAvatar
			name={authUser ? (authUser?.displayName as string) : ''}
			alignSelf='flex-start'
			src={authUser ? (authUser?.photoURL as string) : ''}
			ml={marginLeft}
			size={size}>
			{withBadge && (
				<AvatarBadge
					borderWidth={['unset', '5px', '7px']}
					boxSize='.8em'
					bg='green.500'
				/>
			)}
		</ChakraAvatar>
	)
}
