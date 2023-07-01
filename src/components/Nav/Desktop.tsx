'use client'
import { useContext } from 'react'
import { Box, Button, Icon, ListItem, UnorderedList } from '@/lib/chakra'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AuthCtx } from '../Register/context/Auth'
import { FaUserCircle } from 'react-icons/fa'
type DesktopProps = {
	colorMode: string
}

export const Desktop = ({ colorMode }: DesktopProps) => {
	const { logout, authUser } = useContext(AuthCtx)
	const router = useRouter()
	return (
		<Box display={['none', null, 'block']}>
			{authUser ? (
				<Button
					display='flex'
					alignItems='center'
					bg='transparent'
					_hover={{
						bg: 'transparent',
					}}
					onClick={() => {
						logout()
						router.push('/login')
					}}>
					<Icon
						_hover={{
							color: colorMode === 'dark' ? 'mediumGold' : 'lightBrown',
							transition: 'color .3s',
						}}
						color={colorMode === 'dark' ? 'lightGold' : 'darkBrown'}
						w={30}
						h={30}
						as={FaUserCircle}
					/>
				</Button>
			) : (
				<UnorderedList
					display={'flex'}
					alignItems='center'
					gap={10}>
					<ListItem>
						<Link href='/login'>Login</Link>
					</ListItem>
					<ListItem>
						<Link href='/signup'>Sign up</Link>
					</ListItem>
				</UnorderedList>
			)}
		</Box>
	)
}
