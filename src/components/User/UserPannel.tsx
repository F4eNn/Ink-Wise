import React, { useState, useRef, useEffect } from 'react'
import { Box, VStack, Button, IconButton, Avatar } from '@/lib/chakra'
import { ButtonProfile } from './ButtonProfile'
import { useAuth } from '@/hooks/useAuth'
import { SmallCloseIcon } from '@chakra-ui/icons'

export const UserPannel = () => {
	const [isOpen, setIsOpen] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)
	const { logout, authUser } = useAuth()

	const isOpenHelper = () => {
		setIsOpen(prev => !prev)
	}
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
				setIsOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

  const closeUserPannel = () =>  {
    setIsOpen(false)
  }

	return (
		<Box pos='relative'>
			<ButtonProfile isOpenHelper={isOpenHelper} />
			{isOpen && (
				<VStack
					ref={containerRef}
					pos='absolute'
					top={14}
					right={0}
					py={5}
					w={'300px'}
					bg='transparent'
					rounded='2xl'
					border='1px solid gray'>
					<IconButton
						onClick={closeUserPannel}
						pos='absolute'
						right={0}
						top={0}
						aria-label='close user details'
						bg='none'
						roundedTopEnd='2xl'
						icon={<SmallCloseIcon />}
					/>
					<Avatar
						name={authUser.displayName}
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
              closeUserPannel()
              logout()

            }}>
						Logout
					</Button>
				</VStack>
			)}
		</Box>
	)
}
