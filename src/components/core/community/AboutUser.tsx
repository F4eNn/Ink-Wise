'use client'
import React from 'react'
import { Content } from '@/components/core/user/Content'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { BsArrowLeft } from 'react-icons/bs'
import { useSearchParams } from 'next/navigation'
import { Heading } from '@/components/ui/Heading'
export const AboutUser = () => {
	const router = useRouter()
	const searchParams = useSearchParams()
	const [name, photo, bio, joined] = searchParams.getAll('about')
    
	const goBack = () => {
		router.back()
	}
	return (
		<>
			<Heading title={name} />
			<Button
				onClick={goBack}
				variant='primary'
				mb='5'
				w='max-content'>
				<BsArrowLeft size='2.5em' />
			</Button>
			<Content
				photo={photo}
				name={name}
				created={joined}
				valueBio={bio}
			/>
		</>
	)
}
