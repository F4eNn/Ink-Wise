'use client'
import React from 'react'
import { Box, Flex, VStack, Text, HStack } from '@/lib/chakra'
import { Logo } from '@/components/ui/Logo'
export const Footer = () => {
	return (
		<Box
			display='flex'
			justifyContent='space-between'
			mt='10'
			w='full'
			pos='relative'>
			<Logo />
			<Flex justifyContent='flex-start'>
				<VStack
					borderWidth='1px'
					borderColor='red'
					alignSelf='flex-start'
					justifySelf='flex-end'>
					<Text>email: mateusz4k@outlook.com</Text>
				</VStack>
			</Flex>
		</Box>
	)
}
