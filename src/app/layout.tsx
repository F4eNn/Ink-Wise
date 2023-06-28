'use client'
import { Inter } from 'next/font/google'
import { ChakraUiProvider } from './theme/ChakraUiProvider'
import { Nav } from '@/components/Nav/Nav'
import { usePathname } from 'next/navigation'
import { Suspense } from 'react'
import Loading from './loading'
import { AuthProvider } from '@/components/Register/context/AuthProvider'
const inter = Inter({ subsets: ['latin'] })
import { AuthDetails } from '@/components/Register/AuthDetails'
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
					<AuthDetails />
					<AuthProvider>
						<Suspense fallback={<Loading />}>{children}</Suspense>
					</AuthProvider>
				</ChakraUiProvider>
			</body>
		</html>
	)
}
