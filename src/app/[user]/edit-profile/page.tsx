'use client'
import React from 'react'
import { Box, Flex } from '@/lib/chakra'
import { EditProfile } from '@/components/core/user/EditProfile'
import { Hero } from '@/components/ui/Hero'
import { PageWrapper } from '@/components/ui/PageWrapper'

const EditProfilePage = () => {
	return (
		<PageWrapper>
			<Flex
				justifyContent='center'
				gap='14'>
				<Box w={{ base: 'full', md: '750px' }}>
					<EditProfile />
				</Box>
				<Box
					display={{ base: 'none', xl: 'block' }}
					w='full'
					maxW='700px'>
					<Hero src='/edit-profile.png' />
				</Box>
			</Flex>
		</PageWrapper>
	)
}

export default EditProfilePage
