import { AvatarBadge, Avatar as ChakraAvatar } from '@/lib/chakra'

import React from 'react'

interface AvatarProps {
	size: string[] | string
	withBadge?: boolean | true
	marginLeft?: string | '5'
	name: string
	src: string
}

export const Avatar = ({ size, withBadge = true, marginLeft = '5', name, src }: AvatarProps) => {
	return (
		<ChakraAvatar
			name={name}
			alignSelf='flex-start'
			src={src}
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
