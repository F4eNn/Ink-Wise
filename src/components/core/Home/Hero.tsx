import React from 'react'
import Image from 'next/image'
import { Flex, Heading, AspectRatio, Text, Box } from '@/lib/chakra'
import { Reveal } from '@/components/ui/Reveal'
import { LinkButton } from './ui/LinkButton'
export const Hero = () => {
	return (
		<Reveal>
			<Flex flexDir={['column', null, 'row-reverse']}>
				<AspectRatio
					ratio={1}
					w={['full', null, '80%']}
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
					<Heading
						as='h1'
						fontSize={['36px', '56px', '66px', '96px']}
						textTransform='capitalize'>
						Ignite Your Inkspiration
					</Heading>
					<Text
						mt='9'
						color='grayish'
						fontSize='lg'>
						{
							"Our user-friendly interface allows you to create, edit, and categorize your notes with simplicity and efficiency. Whether you're in a meeting, attending a lecture, or simply struck by a brilliant idea, InkWise is there to capture every precious thought."
						}
					</Text>
					<Box
						w='150px'
						mt='8'
						mx={['auto', null, '0']}
						color='white'>
						<LinkButton url='/signup'>Get started</LinkButton>
					</Box>
				</Box>
			</Flex>
		</Reveal>
	)
}
