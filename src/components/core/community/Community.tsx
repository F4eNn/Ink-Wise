import { db } from '@/config/firebase'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Card } from '../user/ui/Card'
import { Avatar, Box, Flex, Heading, Link } from '@/lib/chakra'
import { useSearchParams } from 'next/navigation'
import NextLink from 'next/link'
import { BiLinkExternal } from 'react-icons/bi'
import { Content } from '../user/Content'

type CommunityUser = {
	photo: string
	joined: string
	name: string
	bio: string
	id: string
}
const customScrollbarStyle = {
	'&::-webkit-scrollbar': {
		width: '8px',
	},
	'&::-webkit-scrollbar-track': {
		width: '12px',
	},
	'&::-webkit-scrollbar-thumb': {
		background: '#3333335e',
		borderRadius: '25px',
	},
}
export const Community = () => {
	const [users, setUsers] = useState<CommunityUser[]>()

	const searchParams = useSearchParams()
	const isUsers = searchParams.get('about') === 'users'

	useEffect(() => {
		const getCommunity = async () => {
			const communityCollection = collection(db, 'user-profile')
			const snapshot = await getDocs(communityCollection)
			const communityData = snapshot.docs.map(user => ({ ...user.data(), id: user.id } as CommunityUser))
			setUsers(communityData)
		}
		getCommunity()
	}, [])

	return (
		<Card>
			<Flex
				h='80vh'
				overflow='hidden'
				flexDir='column'>
				<Flex
					flexDir='column'
					pr='6'
					pl='2'
					css={customScrollbarStyle}
					overflowY='auto'>
					{users?.map(user => (
						<Link
							as={NextLink}
							key={user.id}
							pos='relative'
							my={['5', '10']}
							w='full'
							borderWidth='1px'
							borderColor='borderColor'
							rounded='xl'
							px='3'
							href={`?about=${user.name}`}
							style={{ textDecoration: 'none' }}
							py='6'>
							<Flex
								gap={{ base: '5', md: 'unset' }}
								alignItems={{ base: 'center', md: 'unset' }}>
								<Avatar
									size={['lg', 'xl', '2xl']}
									name={user.name}
									src={user.photo}
								/>
								<Heading
									mx={{ md: 'auto' }}
									as='h2'
									bgGradient='linear(to-l, primary.300, primary.900)'
									bgClip='text'
									fontSize={['2xl', '3xl', '5xl']}
									fontWeight='extrabold'>{`${user.name}`}</Heading>
							</Flex>

							<Box
								pos='absolute'
								top='4'
								right='4'
								color='primary.600'>
								<BiLinkExternal size='1.5em' />
							</Box>
						</Link>
					))}
				</Flex>
			</Flex>
		</Card>
	)
}
