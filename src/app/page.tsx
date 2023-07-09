import { Contact } from '@/components/core/Home/Contact'
import { Features } from '@/components/core/Home/Features'
import { Footer } from '@/components/core/Home/Footer'
import { Hero } from '@/components/core/Home/Hero'
import { WaveFooter } from '@/components/core/Home/ui/WaveFooter'
import { Container } from '@/components/ui/Container'
import { Box } from '@/lib/chakra'
import React from 'react'

const HomePage = () => {
	return (
		<>
			<Container>
				<Hero />
				<Features />
				<Contact />
			</Container>
			<footer>
				<Box mt='40' h='1px' w='full' bg='primary.900'/>
				<Container>
					<Footer />
				</Container>
				<WaveFooter />
			</footer>
		</>
	)
}

export default HomePage
