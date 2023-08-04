'use client'
import React, { useState } from 'react'
import { Content } from '@/components/core/user/Content'
import { Button, Flex } from '@/lib/chakra'
import { useRouter, useSearchParams } from 'next/navigation'
import { BsArrowLeft } from 'react-icons/bs'
import { Heading } from '@/components/ui/Heading'
import { Card } from '../user/ui/Card'
import { useAuth } from '@/hooks/useAuth'

export const AboutUser = () => {
	const router = useRouter()
	const { Toast } = useAuth()

	const [isRequestSend, setIsRequestSend] = useState(false)
	const searchParams = useSearchParams()
	const [name, photo, bio, joined] = searchParams.getAll('about')

	const goBack = () => {
		router.back()
	}

	const addFriend = () => {
		setIsRequestSend(true)
		if (!isRequestSend) Toast({ desc: `Sent request to ${name}`, isHeading: false })
	}

	return (
		<Card>
			<Heading title={name} />
			<Flex
				justifyContent='space-between'
				mb='8'>
				<Button
					onClick={goBack}
					variant='primary'
					mb='5'
					w='max-content'>
					<BsArrowLeft size='2.5em' />
				</Button>
				<Button
					onClick={addFriend}
					variant='primary'
					mb='5'
					w='max-content'>
					{!isRequestSend ? 'Add friend' : 'Request sent'}
				</Button>
			</Flex>
			<Content
				photo={photo}
				name={name}
				created={joined}
				valueBio={bio}
				headingFriends='Friends'
			/>
		</Card>
	)
}
