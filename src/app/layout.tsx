'use client'
import { Inter } from 'next/font/google'
import { ChakraUiProvider } from './theme/ChakraUiProvider'
import { Nav } from '@/components/Nav/Nav'
import { Suspense } from 'react'
import Loading from './loading'
import { AuthProvider } from '@/components/Register/context/AuthProvider'
import { usePathname } from 'next/navigation'
const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }: { children: React.ReactNode }) {
	const currentPath = usePathname()

	const paths = ['/login', '/signup']

	return (
		<html lang='en'>
			<head>
				<title>Ink Wise</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
			</head>

			<body className={inter.className}>
				<ChakraUiProvider>
					<AuthProvider>
						{paths.includes(currentPath) ? null : <Nav />}
						<Suspense fallback={<Loading />}>{children}</Suspense>
					</AuthProvider>
				</ChakraUiProvider>
			</body>
		</html>
	)
}
