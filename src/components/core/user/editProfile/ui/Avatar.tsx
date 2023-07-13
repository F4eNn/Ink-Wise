'use client'
import { Avatar as ChakraAvatar } from '@/lib/chakra'
import { useAuth } from '@/hooks/useAuth'

import React from 'react'

export const Avatar = () => {

    const {authUser} = useAuth()

	return (
		<ChakraAvatar
			name={authUser?.displayName!}
			alignSelf='flex-start'
			ml='5'
			size='lg'
		/>
	)
}

