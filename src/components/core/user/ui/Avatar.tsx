import { AvatarBadge, Avatar as ChakraAvatar } from '@/lib/chakra'
import { useAuth } from '@/hooks/useAuth'

import React from 'react'

interface  AvatarProps {
	size: string
}

export const Avatar = ({size}:AvatarProps) => {
	const { authUser } = useAuth()
	return (
		<ChakraAvatar
			name={authUser ? (authUser?.displayName as string) : ''}
			alignSelf='flex-start'
			src={authUser ? (authUser?.photoURL as string) : ''}
			ml='5'
			size={[size, 'xl', '2xl']}>
			<AvatarBadge
				borderWidth={['unset', '5px','7px']}
				boxSize='.8em'
				bg='green.500'
			/>
		</ChakraAvatar>
	)
}
