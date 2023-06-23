'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { Theme } from './Theme'
export const ChakraUiProvider = ({ children }: { children: React.ReactNode }) => {
	return <ChakraProvider theme={Theme}>{children}</ChakraProvider>
}
