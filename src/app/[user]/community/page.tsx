'use client'
import React from 'react'

import { Hero } from '@/components/ui/Hero'
import { PageWrapper } from '@/components/ui/PageWrapper'
import { Box, Flex } from '@/lib/chakra'
import { Community } from '@/components/core/community/Community'

const CommunityPage = async () => {
	return (
		<PageWrapper>
			<Flex
				justifyContent='center'
				gap='14'>
				<Box w={{ base: 'full', md: '100vw' }}>
					<Community />
				</Box>
				<Box
					display={{ base: 'none', xl: 'block' }}
					w='full'
					maxW={{ xl: '700px', '2xl': '35vw' }}>
					<Hero src='/community.png' />
				</Box>
			</Flex>
		</PageWrapper>
	)
}

export default CommunityPage
