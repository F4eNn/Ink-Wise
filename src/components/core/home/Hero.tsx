'use client'
import React from 'react'
import Image from 'next/image'
import { Flex, Heading, AspectRatio, Text, Box } from '@/lib/chakra'
import { Reveal } from '@/components/ui/Reveal'
import { LinkButton } from './ui/LinkButton'
import { motion, useScroll } from 'framer-motion'
import { useAuth } from '@/hooks/useAuth'
export const Hero = () => {
	const { scrollYProgress } = useScroll()
	const { authUser } = useAuth()
	const isAuth = authUser ? `/${authUser.displayName}` : '/signup'

	return (
		<Flex
			mt={['10', null, '16']}
			pl={['0', null, '7']}
			gap='5'
			borderRightWidth={[null, null, null, '1px']}
			borderLeftWidth={[null, null, '1px']}
			borderLeftColor='borderColor'
			borderRightColor='borderColor'
			flexDir={['column', null, 'row-reverse']}>
			<AspectRatio
				ratio={1}
				width={['full', null, '80%']}
				pos='relative'>
				<Image
					src='/home-hero.png'
					alt=''
					fill
				/>
			</AspectRatio>
			<Box
				w='full'
				color='default'
				textAlign={['center', null, 'left']}
				my='auto'>
				<Reveal>
					<Heading
						as='h1'
						fontSize={['40px', '56px', '66px', '96px']}
						textTransform='capitalize'>
						Ignite Your Inkspiration
					</Heading>
				</Reveal>
				<Reveal>
					<Text
						mt='9'
						color='grayish'
						fontSize='lg'>
						{
							'Stay organized with customizable organization options, allowing you to tag, categorize, and label your notes for easy retrieval. Need to find specific content? InkWise\'s powerful search functionality enables you to locate information quickly, saving you valuable time and effort.'
						}
					</Text>
				</Reveal>
				<Box
					w='150px'
					mt='8'
					mx={['auto', null, '0']}
					color='white'>
					<LinkButton url={isAuth}>Get started</LinkButton>
				</Box>
			</Box>
			<Box
				as={motion.div}
				pos='fixed'
				top='0'
				left='0'
				bottom='0'
				w='4px'
				bg='primary.900'
				transformOrigin='0 0'
				zIndex='999'
				style={{ scaleY: scrollYProgress }}
			/>
		</Flex>
	)
}
