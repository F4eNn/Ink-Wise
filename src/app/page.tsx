import { Contact } from '@/components/core/Home/Contact'
import { Features } from '@/components/core/Home/Features'
import { Footer } from '@/components/core/Home/Footer'
import { Hero } from '@/components/core/Home/Hero'
import { Container } from '@/lib/chakra'
import React from 'react'

const HomePage = () => {
	return (
		<>
			<Container
				maxW='1440px'
				as='main'
				w={['90%', null, 'full']}>
				<Hero />
				<Features />
				<Contact />
				<Footer />
			</Container>
			<footer></footer>
		</>
	)
}

export default HomePage
