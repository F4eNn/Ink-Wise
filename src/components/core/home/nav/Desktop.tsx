import { Box, ListItem, UnorderedList } from '@/lib/chakra'
import Link from 'next/link'
import { useAuth } from '../../../../hooks/useAuth'
import { UserDropdown } from '../../user/UserDropdown'
export const Desktop = () => {
	const { authUser } = useAuth()
	return (
		<Box
			display={['none', null, 'block']}
			mr={16}>
			{authUser ? (
				<UserDropdown />
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