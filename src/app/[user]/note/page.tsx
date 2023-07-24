'use client'
import React from 'react'

import { Hero } from '@/components/ui/Hero'
import { CreateNote } from '@/components/core/create/CreateNote'
import { Box, Flex } from '@/lib/chakra'
import { PageWrapper } from '@/components/ui/PageWrapper'

const NotePage = () => {
	return (
		<PageWrapper>
			<Flex
				justifyContent='center'
				gap='14'>
				<Box w={{ base: 'full', md: 'unset' }}>
					<CreateNote />
				</Box>
				<Box
					display={{ base: 'none', xl: 'block' }}
					w='full'
					maxW='700px'>
					<Hero src='/create-note.png' />
				</Box>
			</Flex>
		</PageWrapper>
	)
}

export default NotePage
