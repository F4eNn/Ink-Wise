import { db } from '@/config/firebase'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Card } from '../user/ui/Card'
import { Flex } from '@/lib/chakra'

import { CardList } from './ui/CardList'
import { ListItem } from './ui/ListItem'
import { ListItemContent } from './ui/ListItemContent'
import { Heading } from '@/components/ui/Heading'

export type CommunityUser = {
	photo: string
	joined: string
	name: string
	bio: string
	id: string
}

export const Community = () => {
	const [users, setUsers] = useState<CommunityUser[]>()

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
		<Card mb='unset'>
			<Heading title='Our Community' />
			<Flex
				h={{ md: 'calc(100vh - 250px)' }}
				overflow='hidden'
				flexDir='column'>
				<CardList>
					{users?.map(user => (
						<ListItem
							key={user.id}
							urlName={user.name}
							{...user}>
							<ListItemContent {...user} />
						</ListItem>
					))}
				</CardList>
			</Flex>
		</Card>
	)
}
