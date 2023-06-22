import React from 'react'
import { useColorMode } from '@/lib/chakra'
import styled from 'styled-components'

import Link from 'next/link'

const StyledLink = styled(Link)<{ $theme: string; $size?: string }>`
	width: ${props => props.$size || '30%'};
	height: 100px;
	background-image: ${props =>
		props.$theme === 'dark' ? "url('/dark-logo-desktop.png')" : "url('/light-logo-desktop.png')"};
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`
export const Logo = ({ size }: { size?: string }) => {
	const { colorMode } = useColorMode()
	return (
		<StyledLink
			$size={size}
			$theme={colorMode}
			href='/'
		/>
	)
}
