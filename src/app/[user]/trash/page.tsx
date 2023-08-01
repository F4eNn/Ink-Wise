'use client'
import React from 'react'
import { Hero } from '@/components/ui/Hero'
import { PageWrapper } from '@/components/ui/PageWrapper'
import { Box, Flex } from '@chakra-ui/react'
import { Bin } from '@/components/core/trash/Bin'

const TrashPage = () => {
	return (
		<PageWrapper>
			<Flex
				justifyContent='center'
				gap='14'>
				<Box w={{ base: 'full', md: '750px' }}>
					<Bin />
				</Box>
				<Box
					display={{ base: 'none', xl: 'block' }}
					w='full'
					maxW='700px'>
					<Hero src='/trash.png' />
				</Box>
			</Flex>
		</PageWrapper>
	)
}

export default TrashPage
