import React from 'react'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'
export const GithubIcon = () => {
	return (
		<Box
			display={'flex'}
			justifyContent={'center'}
			alignItems={'center'}
			w={'40px'}
			h={'40px'}>
			<Image
				alt='logo google'
				src={'/github-mark-white.png'}
				width={27}
				height={27}
			/>
		</Box>
	)
}
