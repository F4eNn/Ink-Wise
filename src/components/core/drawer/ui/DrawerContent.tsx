import { VStack } from '@/lib/chakra'
import React from 'react'
import { LinkDrawer } from './LinkDrawer'
import { AiOutlinePlus } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
import { IoMdPersonAdd } from 'react-icons/io'
import { DeleteIcon } from '@chakra-ui/icons'
import { LinkIconPannel } from './LinkIconPannel'
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
						icon={<FaUsers />}
						url={`/${authUser?.displayName}/community?about=users`}
						ariaLabel='community'
						desc='Community'
					/>
					<LinkDrawer
						icon={<IoMdPersonAdd />}
						url={`/${authUser?.displayName}/find-friend`}
						ariaLabel='add friend'
						desc='Add friend'
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
						url={`/${authUser.displayName}/community?about=users`}
						ariaLabel='Create'
						icon={<FaUsers />}
					/>
					<LinkIconPannel
						url={`/${authUser.displayName}/find-friend`}
						ariaLabel='Create'
						icon={<IoMdPersonAdd />}
					/>
					<LinkIconPannel
						url={`/${authUser.displayName}/trash`}
						ariaLabel='Create'
						icon={<DeleteIcon />}
					/>
				</>
			)}
		</VStack>
	)
}
