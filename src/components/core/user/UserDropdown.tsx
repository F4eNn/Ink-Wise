import React, { useRef } from 'react'
import { Box, VStack, Button, IconButton } from '@/lib/chakra'
import { ButtonProfile } from './ui/ButtonProfile'
import { useAuth } from '@/hooks/useAuth'
import { SmallCloseIcon } from '@chakra-ui/icons'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { Link } from './ui/Link'
import { Avatar } from './ui/Avatar'
export const UserDropdown = () => {
	const { authUser, logout } = useAuth()

	const detailCardRef = useRef<HTMLDivElement>(null)
	const { isOpen, toggleState } = useOutsideClick(detailCardRef)

	return (
		<Box pos='relative'>
			<ButtonProfile isOpenHelper={toggleState} />
			{isOpen && (
				<VStack
					ref={detailCardRef}
					pos='absolute'
					top='80px'
					right='0'
					py='5'
					w={['275px', '300px']}
					bg='primary.100'
					borderColor='borderColor'
					rounded='2xl'
					borderWidth='1px'
					zIndex='999'>
					<IconButton
						onClick={toggleState}
						pos='absolute'
						right={0}
						top={0}
						aria-label='close user details'
						bg='none'
						roundedTopEnd='2xl'
						_hover={{
							bg: 'primary-600',
						}}
						icon={<SmallCloseIcon />}
					/>
					<Avatar size='lg' />
					<Link
						mt='5'
						url={`/${authUser?.displayName}/edit-profile`}>
						Edit Profile
					</Link>
					<Link url={`/${authUser?.displayName}`}>Dashboard</Link>
					<Button
						variant='outlineDark'
						mt='6'
						w='70%'
						color='white'
						bg='error.900'
						_hover={{
							bg: 'error',
						}}
						onClick={logout}>
						Logout
					</Button>
				</VStack>
			)}
		</Box>
	)
}
