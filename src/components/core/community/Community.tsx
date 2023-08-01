import { db } from '@/config/firebase'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Card } from '../user/ui/Card'
import { Flex } from '@/lib/chakra'
import { useSearchParams } from 'next/navigation'

import { CardList } from './ui/CardList'
import { ListItem } from './ui/ListItem'
import { ListItemContent } from './ui/ListItemContent'

export type CommunityUser = {
	photo: string
	joined: string
	name: string
	bio: string
	id: string
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
				<CardList>
					{users?.map(user => (
						<ListItem
							key={user.id}
							urlName={user.name}>
							<ListItemContent name={user.name} photo={user.photo} />
						</ListItem>
					))}
				</CardList>
			</Flex>
		</Card>
	)
}
