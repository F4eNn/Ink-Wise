import { Contact } from '@/components/core/home/Contact'
import { Features } from '@/components/core/home/Features'
import { Footer } from '@/components/core/home/Footer'
import { Hero } from '@/components/core/home/Hero'
import { Nav } from '@/components/core/home/nav/Nav'
import { WaveFooter } from '@/components/core/home/ui/WaveFooter'
import { Container } from '@/components/ui/Container'
import { Box } from '@/lib/chakra'
import React from 'react'

const HomePage = () => {
	return (
		<>
			<Nav />
			<Container>
				<Hero />
				<Features />
				<Contact />
			</Container>
			<footer>
				<Box
					mt='40'
					h='1px'
					w='full'
					bg='primary.900'
				/>
				<Container>
					<Footer />
				</Container>
				<WaveFooter />
			</footer>
		</>
	)
}

export default HomePage
