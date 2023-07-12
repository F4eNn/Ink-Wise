import React, { useRef} from 'react'
import { Box, VStack, Button, IconButton, Avatar } from '@/lib/chakra'
import { ButtonProfile } from './ButtonProfile'
import { useAuth } from '@/hooks/useAuth'
import { SmallCloseIcon } from '@chakra-ui/icons'
import { useOutsideClick } from '@/hooks/useOutsideClick'
export const UserDetails = () => {
	const { authUser, logout } = useAuth()

	const detailCardRef = useRef<HTMLDivElement>(null)
	const {isOpen, toggleState} = useOutsideClick(detailCardRef)

	return (
		<Box pos='relative'>
			<ButtonProfile isOpenHelper={toggleState} />
			{isOpen && (
				<VStack
					ref={detailCardRef}
					pos='absolute'
					top={14}
					right={0}
					py={5}
					w={'300px'}
					bg='transparent'
					rounded='2xl'
					border='1px solid gray'>
					<IconButton
						onClick={toggleState}
						pos='absolute'
						right={0}
						top={0}
						aria-label='close user details'
						bg='none'
						roundedTopEnd='2xl'
						icon={<SmallCloseIcon />}
					/>
					<Avatar
						name={authUser?.displayName!}
						alignSelf='flex-start'
						ml={5}
						size='lg'
					/>
					<Button
						mt={5}
						variant='outlineDark'
						w='70%'>
						Test
					</Button>
					<Button
						variant='outlineDark'
						w='70%'>
						Feature
					</Button>
					<Button
						variant='outlineDark'
						w='70%'
						onClick={() => {
							logout()
						}}>
						Logout
					</Button>
				</VStack>
			)}
		</Box>
	)
}
