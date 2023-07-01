'use client'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from '@/lib/chakra'
const Bar = styled.div<HamburgerProps>`
	height: 3px;
	width: 30px;
	background-color: ${props => (props.colorMode === 'dark' ? '#fff' : '#2b2522')};
	transition: transform 0.3s, opacity 0.3s;
`
const Bar1 = styled(Bar)`
	transform: ${props => (props.$isOpen ? 'rotate(-45deg) translate(-7px, 5px)' : '')};
`
const Bar2 = styled(Bar)`
	margin-block: 6px;
	transform: ${props => (props.$isOpen ? ' translateX(10px)' : '')};
	opacity: ${props => (props.$isOpen ? '0' : '')};
`
const Bar3 = styled(Bar)`
	transform: ${props => (props.$isOpen ? 'rotate(45deg) translate(-7px,-5px)' : '')};
`
type MobileProps = {
	colorMode: string
}
type HamburgerProps = MobileProps & {
	readonly $isOpen: boolean
}
export const Mobile = ({ colorMode }: MobileProps) => {
	const [isOpen, setIsOpen] = useState(true)

	const showNav = () => {
		console.log('otworzono nawigacje')
		setIsOpen(prev => !prev)
	}

	return (
		<Box
		display={[null,null,'none']}
		>
			<button
				aria-label='open nav'
				onClick={showNav}
				style={{ height: '30px', width: '30px', marginRight: '10px' }}>
				<Bar1
					colorMode={colorMode}
					$isOpen={isOpen}
				/>
				<Bar2
					colorMode={colorMode}
					$isOpen={isOpen}
				/>
				<Bar3
					colorMode={colorMode}
					$isOpen={isOpen}
				/>
			</button>
		<Box
		position='absolute'
		left={0}
		top={0}
		w={'full'}
		h={'100%'}
		bg='blackAlpha.400'
		>

		</Box>



		</Box>
	)
}
