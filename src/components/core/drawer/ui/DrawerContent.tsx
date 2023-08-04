import { VStack } from '@/lib/chakra'
import React from 'react'
import { LinkDrawer } from './LinkDrawer'
import { AiOutlinePlus } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
import { DeleteIcon } from '@chakra-ui/icons'
import { LinkIconPannel } from './LinkIconPannel'
import { HiSquares2X2 } from 'react-icons/hi2'
import { useAuth } from '@/hooks/useAuth'

interface OpenDrawerProps {
	size?: string
	alignItems?: string
	isOpen: boolean
}

export const DrawerContent = ({ alignItems, size, isOpen }: OpenDrawerProps) => {
	const { authUser } = useAuth()

	if (!authUser) return
	return (
		<VStack
			w={size}
			spacing='30px'
			justifyContent='center'
			alignItems={alignItems}>
			{isOpen ? (
				<>
					<LinkDrawer
						icon={<AiOutlinePlus />}
						url={`/${authUser?.displayName}/note`}
						ariaLabel='create'
						desc='Create Ink'
					/>
					<LinkDrawer
						icon={<HiSquares2X2 />}
						url={`/${authUser?.displayName}`}
						ariaLabel='Dashboard'
						desc='dashboard'
					/>
					<LinkDrawer
						icon={<FaUsers />}
						url={`/${authUser?.displayName}/community`}
						ariaLabel='community'
						desc='Community'
					/>
					<LinkDrawer
						icon={<DeleteIcon />}
						url={`/${authUser?.displayName}/trash`}
						ariaLabel='Trash'
						desc='Trash'
					/>
				</>
			) : (
				<>
					<LinkIconPannel
						url={`/${authUser.displayName}/note`}
						ariaLabel='Create'
						icon={<AiOutlinePlus />}
					/>
					<LinkIconPannel
						url={`/${authUser.displayName}`}
						ariaLabel='Dashboard'
						icon={<HiSquares2X2 />}
					/>
					<LinkIconPannel
						url={`/${authUser.displayName}/community`}
						ariaLabel='Community'
						icon={<FaUsers />}
					/>
					<LinkIconPannel
						url={`/${authUser.displayName}/trash`}
						ariaLabel='Trash'
						icon={<DeleteIcon />}
					/>
				</>
			)}
		</VStack>
	)
}
