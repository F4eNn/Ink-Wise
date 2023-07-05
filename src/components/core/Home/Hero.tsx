import React from 'react'
import Image from 'next/image'
import { Flex, Heading, AspectRatio, Text, Box } from '@/lib/chakra'
import { Reveal } from '@/components/ui/Reveal'
import { LinkButton } from './ui/LinkButton'

export const Hero = () => {
	return (
		<Reveal>
			<Flex flexDir='row-reverse'>
				<AspectRatio
					ratio={1}
					w='80%'
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
					mt='16'>
					<Heading
						as='h1'
						fontSize='96px'
						textTransform='capitalize'>
						Ignite Your Inkspiration
					</Heading>
					<Text
						mt='9'
						fontSize='lg'>
						{
							"Our user-friendly interface allows you to create, edit, and categorize your notes with simplicity and efficiency. Whether you're in a meeting, attending a lecture, or simply struck by a brilliant idea, InkWise is there to capture every precious thought."
						}
					</Text>

					<Box w='150px' mt='8' color='white'>
						<LinkButton url='/signup'>Get started</LinkButton>
					</Box>
				</Box>
			</Flex>
		</Reveal>
	)
}
