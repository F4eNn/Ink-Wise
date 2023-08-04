'use client'
import React, { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { ChakraUiProvider } from './theme/ChakraUiProvider'
import { AuthProvider } from '@/context/AuthProvider'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<title>Ink Wise</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<meta
					name='desc'
					content='Ink Wise - Your intelligent notebook for organizing and managing notes.'
				/>
			</head>

			<body className={inter.className}>
				<ChakraUiProvider>
					<AuthProvider>{children}</AuthProvider>
				</ChakraUiProvider>
			</body>
		</html>
	)
}
