'use client'
import { AboutUser } from '@/components/core/community/AboutUser'
import Hero from '@/components/ui/Hero'
import { PageWrapper } from '@/components/ui/PageWrapper'
import { Box, Flex } from '@/lib/chakra'

const AboutUserPage = () => {
	return (
		<PageWrapper>
			<Flex justifyContent='center'>
				<Box w={{ base: 'full', md: '100%' }}>
					<AboutUser />
				</Box>
				<Box
					display={{ base: 'none', xl: 'block' }}
					w='full'
					maxW={{ xl: '700px', '2xl': '50%' }}>
					<Hero src='/search-people.png' />
				</Box>
			</Flex>
		</PageWrapper>
	)
}

export default AboutUserPage
