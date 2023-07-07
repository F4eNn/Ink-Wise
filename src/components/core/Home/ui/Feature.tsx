import React from 'react'
import { Box, Flex, Heading, Text } from '@/lib/chakra'
import { Reveal } from '@/components/ui/Reveal'
type BubbleBoxProps = {
	title?: string
	desc?: string
	left?: string
	top?: string
	right?: string
	bottom?: string
	translate?: string
}

export const Feature = ({ desc, title, bottom, left, right, top, translate }: BubbleBoxProps) => {
	return (
		<Box
			pos={{ xl: 'absolute' }}
			left={left}
			top={top}
			bottom={bottom}
			right={right}
			zIndex='100'
			transform={{ xl: `translate(${translate})` }}
			p={['5', null, '7']}
			maxW='300px'
			bg='alphaLightBrown'
			borderWidth='1px'
			rounded='2xl'
			borderColor='borderColor'
			display='flex'
			justifyContent='center'>
			<Flex
				flexDir='column'
				gap='5'>
				<Reveal>
					<Heading
						fontSize='26px'
						as='h3'>
						{title}
					</Heading>
				</Reveal>
				<Reveal>
					<Text color='grayish'>{desc}</Text>
				</Reveal>
			</Flex>
		</Box>
	)
}
