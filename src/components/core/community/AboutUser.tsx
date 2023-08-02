'use client'
import React from 'react'
import { Content } from '@/components/core/user/Content'
import { Button, Flex } from '@/lib/chakra'
import { useRouter } from 'next/navigation'
import { BsArrowLeft } from 'react-icons/bs'
import { useSearchParams } from 'next/navigation'
import { Heading } from '@/components/ui/Heading'
import { Card } from '../user/ui/Card'
export const AboutUser = () => {
	const router = useRouter()
	const searchParams = useSearchParams()
	const [name, photo, bio, joined] = searchParams.getAll('about')

	const goBack = () => {
		router.back()
	}
	return (
		<Card>
			<Heading title={name} />
			<Flex justifyContent='space-between'>
				<Button
					onClick={goBack}
					variant='primary'
					mb='5'
					w='max-content'>
					<BsArrowLeft size='2.5em' />
				</Button>
				<Button
					variant='primary'
					mb='5'
					w='max-content'>
					Add friend
				</Button>
			</Flex>
			<Content
				photo={photo}
				name={name}
				created={joined}
				valueBio={bio}
			/>
		</Card>
	)
}
