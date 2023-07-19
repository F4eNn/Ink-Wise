import React from 'react'

import { Hero } from '@/components/ui/Hero'
import { CreateNote } from '@/components/core/create/CreateNote'
import { Box, Flex } from '@/lib/chakra'

const NotePage = () => {
	return (
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
	)
}

export default NotePage
