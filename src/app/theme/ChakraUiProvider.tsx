'use client'
import React, { ReactNode } from 'react'
import dynamic from 'next/dynamic'
const ChakraProvider = dynamic(() => import('@chakra-ui/react').then(mod => mod.ChakraProvider))

import { Theme } from './Theme'

export const ChakraUiProvider = ({ children }: { children: ReactNode }) => {
	return <ChakraProvider theme={Theme}>{children}</ChakraProvider>
}
