import { Box, ListItem, UnorderedList } from '@/lib/chakra'
import { useAuth } from '@/hooks/useAuth'
import { UserDropdown } from '../../user/UserDropdown'
import { PrimaryLink } from '@/components/ui/PrimaryLink'
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
						<PrimaryLink
							linkDesc='Login'
							path='/login'
							color='primary.600'
						/>
						{/* <Link href='/login'>Login</Link> */}
					</ListItem>
					<ListItem>
						<PrimaryLink
							color='primary.600'
							linkDesc='Signup'
							path='/signup'
						/>
					</ListItem>
				</UnorderedList>
			)}
		</Box>
	)
}
