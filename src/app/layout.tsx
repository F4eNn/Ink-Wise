'use client'
import { Inter } from 'next/font/google'
import { ChakraUiProvider } from './theme/ChakraUiProvider'
import { Nav } from '@/components/Nav/Nav'
import { usePathname } from 'next/navigation'
import { Suspense } from 'react'
import Loading from './loading'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname()

	const hidePaths = ['/login', '/signup']

	return (
		<html lang='en'>
			<head>
				<title>Ink Wise</title>
			</head>
			<body className={inter.className}>
				<ChakraUiProvider>
					{hidePaths.includes(pathname) ? '' : <Nav />}

					<Suspense fallback={<Loading />}>{children}</Suspense>
				</ChakraUiProvider>
			</body>
		</html>
	)
}
