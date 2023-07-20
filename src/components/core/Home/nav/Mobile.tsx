'use client'
import React, { useRef } from 'react'
import { Box, Button, UnorderedList, ListItem, Divider } from '@/lib/chakra'
import { useAuth } from '../../../../hooks/useAuth'
import { UserDropdown } from '../../user/UserDropdown'
import { useToggle } from '@/hooks/useToggle'
import Link from 'next/link'

export const Mobile = () => {
	const mobileNavRef = useRef(null)
	const dividerRef = useRef(null)
	const { authUser } = useAuth()
	const [isOpen, toggleNav] = useToggle()
	const closeNavOnOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target != mobileNavRef.current && e.target != dividerRef.current) return toggleNav()
	}
	return (
		<Box display={[null, null, 'none']}>
			{authUser ? (
				<UserDropdown />
			) : (
				<Button
					display='flex'
					flexDir='column'
					bg='transparent'
					aria-label='open nav'
					zIndex='200'
					_hover={{
						bg: 'none',
					}}
					onClick={toggleNav}>
					<Box
						h='3px'
						w='30px'
						transform={isOpen ? 'rotate(-45deg) translate(-7px, 5px)' : ''}
						bg={isOpen ? ' mediumGold' : 'default'}
						transition=' transform .3s'
					/>
					<Box
						h='3px'
						w='30px'
						bg='default'
						my='6px'
						transition='opacity .3s'
						opacity={isOpen ? '0' : '1'}
					/>
					<Box
						h='3px'
						w='30px'
						transform={isOpen ? 'rotate(45deg) translate(-7px,-5px)' : ''}
						bg={isOpen ? ' mediumGold' : 'default'}
						transition=' transform .3s'
					/>
				</Button>
			)}
			<Box
				onClick={closeNavOnOverlay}
				position='fixed'
				left={isOpen ? '0' : '100%'}
				transition={'left .3s'}
				top={0}
				zIndex='100'
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
