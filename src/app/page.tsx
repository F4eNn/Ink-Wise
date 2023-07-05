import { Hero } from '@/components/core/Home/Hero'
import { Container } from '@/lib/chakra'
import React from 'react'

const HomePage = () => {
	return (
		<>
			<Container maxW='1440px' as='main'  w='90%'>
				<Hero />
			</Container>
			<footer></footer>
		</>
	)
}

export default HomePage
