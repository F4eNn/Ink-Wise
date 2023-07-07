import React from 'react'
import { AspectRatio, Box, Flex } from '@/lib/chakra'
import Image from 'next/image'
import { Feature } from './ui/Feature'
import { BlobFeatures } from './ui/BlobFeatures'
export const Features = () => {
	return (
		<Box mt={['36', null, '56']}>
			<Box
				as='h2'
				textAlign='center'
				textStyle='h2'>
				Innovative Capabilities
			</Box>
			<Box
				pos='relative'
				mt={{ base: '100px', xl: '400px' }}
				display='flex'
				flexDir='column'
				alignItems='center'
				gap='10'
				justifyContent='center'>
				<AspectRatio
					order='2'
					width={['100%', '85%', null, '60%', '50%']}
					ratio={1}>
					<Image
						src='/Features-1.png'
						alt=''
						fill
					/>
				</AspectRatio>
					<Feature
						top='-100px'
						left='0'
						title='Intuitive Organization'
						desc='Easily organize your notes with our intuitive system of categories, tags, and search functionality. Find the information you need at a glance.'
					/>
				<Flex
					pos='relative'
					gap='5'
					w='full'
					zIndex='0'
					mb='10'
					flexDir={{ base: 'column', md: 'row' }}
					alignItems={{ base: 'center', md: 'unset' }}
					justifyContent='space-around'>
					<Feature
						top='-300px'
						left='50%'
						translate='-50%'
						title='Sleek and Minimalist Design'
						desc='Enjoy a sleek and minimalist design that provides a clutter-free environmentt, allowing you to focus on your notes and boost your productivity.'
					/>
					<Feature
						top='-100px'
						right='0'
						title='Notes in the New Era'
						desc='Prepare for a new era of note-taking. Our Modern Notepad app combines advanced features with user-friendly design, providing you with the ultimate tools for creating and organizing notes.'
					/>
					<BlobFeatures />
				</Flex>
				<Flex
					w='full'
					gap='5'
					flexDir={{ base: 'column', md: 'row' }}
					alignItems={{ base: 'center', md: 'unset' }}
					justifyContent='space-around'
					order='3'>
					<Feature
						bottom='-100px'
						right='0'
						title='Seamless Multimedia Integration'
						desc=' Seamlessly integrate multimedia elements like images, audio clips, and videos into your notes. Bring your ideas to life with dynamic and engaging content.'
					/>
					<Feature
						bottom='-100px'
						left='0'
						title='Cross-Device Accessibility'
						desc='Access your notes anytime, anywhere, across multiple devices. Our modern notepad app works seamlessly on computers, smartphones, and tablets, ensuring full synchronization.'
					/>
				</Flex>
			</Box>
		</Box>
	)
}
