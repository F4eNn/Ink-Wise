import React from 'react'
import { Heading as ChakraHeading } from '@/lib/chakra'

export const Heading = ({ title }: { title: string }) => {
	return (
		<ChakraHeading
			as='h1'
			mb='16'>
			{title}
		</ChakraHeading>
	)
}
