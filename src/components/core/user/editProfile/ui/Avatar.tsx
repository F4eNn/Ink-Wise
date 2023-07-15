'use client'
import { AvatarBadge, Avatar as ChakraAvatar } from '@/lib/chakra'
import { useAuth } from '@/hooks/useAuth'

import React from 'react'

export const Avatar = () => {
	const { authUser } = useAuth()
	return (
		<ChakraAvatar
			name={authUser ? authUser?.displayName as string : ''}
			alignSelf='flex-start'
			src={authUser ? authUser?.photoURL as string : ''}
			ml='5'
			size={['lg', 'xl', '2xl']}>
			<AvatarBadge
				borderWidth='8px'
				boxSize='.8em'
				bg='green.500'
			/>
		</ChakraAvatar>
	)
}
