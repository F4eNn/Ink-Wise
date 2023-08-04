import React from 'react'
import { VStack, Box, Flex, Text} from '@/lib/chakra'
import { BlobContact } from './ui/BlobContact'
import { Reveal } from '@/components/ui/Reveal'
import { ContactLink } from './ui/ContactLink'
export const Contact = () => {
	return (
		<VStack
			zIndex='0'
			mt={['100px', null, null, '150px', '300px']}
			gap='5'
			pos='relative'
			justifyContent='center'>
			<Reveal>
				<Flex gap='1'>
					<Box
						as='h2'
						lineHeight={['32px', '40px', '44px']}
						textStyle='h2'
						pos='relative'>
						Contact
					</Box>
					<Box
						alignSelf='flex-end'
						bottom='0'
						right='-20px'
						height='15px'
						width='15px'
						bg='primary.900'
						rounded='full'
					/>
				</Flex>
			</Reveal>
			<Reveal>
				<Text
					color='grayish'
					maxW={'lg'}
					textAlign='center'>
					Get in touch with us now and discover how InkWise can make your note-taking experience even more inspiring!
				</Text>
			</Reveal>
			<ContactLink/>
			<BlobContact/>
		</VStack>
	)
}
