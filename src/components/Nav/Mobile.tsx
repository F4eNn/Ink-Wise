'use client'
import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { Box, Button, UnorderedList, ListItem, Divider } from '@/lib/chakra'
import Link from 'next/link'

const Bar = styled.div<HamburgerProps>`
	height: 3px;
	width: 30px;
	background-color: ${props => (props.colormode === 'dark' ? '#fff' : '#2b2522')};
	transition: transform 0.3s, opacity 0.3s;
`
const Bar1 = styled(Bar)`
	transform: ${props => (props.$isOpen ? 'rotate(-45deg) translate(-7px, 5px)' : '')};
	background-color: ${props => props.$isOpen && '#eec063'};
`
const Bar2 = styled(Bar)`
	margin-block: 6px;
	transform: ${props => (props.$isOpen ? ' translateX(10px)' : '')};
	opacity: ${props => (props.$isOpen ? '0' : '')};
`
const Bar3 = styled(Bar)`
	transform: ${props => (props.$isOpen ? 'rotate(45deg) translate(-7px,-5px)' : '')};
	background-color: ${props => props.$isOpen && '#eec063'};
`
type MobileProps = {
	colormode: string
}
type HamburgerProps = MobileProps & {
	readonly $isOpen: boolean
}
export const Mobile = ({ colormode }: MobileProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const mobileNavRef = useRef(null)
	const dividerRef = useRef(null)

	const showNav = (e: React.MouseEvent) => {
		setIsOpen(prev => !prev)
	}
	const closeNavOnOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target != mobileNavRef.current && e.target != dividerRef.current) return setIsOpen(false)
	}

	return (
		<Box display={[null, null, 'none']}>
			<Button
				display='flex'
				flexDir='column'
				bg='transparent'
				aria-label='open nav'
				zIndex={10}
				_hover={{
					bg: 'none',
				}}
				onClick={showNav}>
				<Bar1
					colormode={colormode}
					$isOpen={isOpen}
				/>
				<Bar2
					colormode={colormode}
					$isOpen={isOpen}
				/>
				<Bar3
					colormode={colormode}
					$isOpen={isOpen}
				/>
			</Button>
			<Box
				onClick={closeNavOnOverlay}
				position='fixed'
				left={isOpen ? '0' : '100%'}
				transition={'left .3s'}
				top={0}
				w='full'
				h='full'
				bg='blackAlpha.600'>
				<UnorderedList
					ref={mobileNavRef}
					ml='auto'
					bg='#f0e8db'
					w='75%'
					display='flex'
					flexDir='column'
					alignItems='center'
					fontSize='1.5em'
					color='darkBrown'
					h='full'>
					<ListItem mt={'20vh'}>
						<Link href='/login'>Login</Link>
					</ListItem>
					<Divider
						ref={dividerRef}
						my='15px'
						w='90%'
						h='1px'
						bg='mediumGold'
						size='2em'
					/>
					<ListItem>
						<Link href='/signup'>Sign up</Link>
					</ListItem>
				</UnorderedList>
			</Box>
		</Box>
	)
}
