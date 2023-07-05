import React from 'react'
import { useColorMode, Link } from '@/lib/chakra'
import NextLink from 'next/link'

export const Logo = ({ size }: { size?: string }) => {
	const { colorMode } = useColorMode()
	return (
		<Link
			aria-label='home'
			as={NextLink}
			_hover={{ textDecoration: 'none' }}
			href='/'
			bgImage={colorMode === 'dark' ? "url('/dark-logo.png')" : "url('/light-logo-desktop.png')"}
			bgPos='center'
			bgSize='cover'
			bgRepeat='no-repeat'
			w={size || ['11em', null, '20em']}
			h={'100px'}
		/>
	)
}
