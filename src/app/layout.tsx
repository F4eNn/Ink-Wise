'use client'
import { Inter } from 'next/font/google'
import { ChakraUiProvider } from './theme/ChakraUiProvider'
import { Nav } from '@/components/nav/Nav'
import { Suspense } from 'react'
import Loading from './loading'
import { AuthProvider } from '@/components/register/context/AuthProvider'
import { usePathname } from 'next/navigation'
import { ProtectedRoute } from '@/components/ProtectedRoute'
const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }: { children: React.ReactNode }) {
	const currentPath = usePathname()
	const registerPaths = ['/login', '/signup']
	const noAuthRequired = ['/', '/login', '/signup']

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
						{registerPaths.includes(currentPath) ? null : <Nav />}
						{noAuthRequired.includes(currentPath) ? (
							<Suspense fallback={<Loading />}>{children}</Suspense>
						) : (
							<ProtectedRoute>
								<Suspense fallback={<Loading />}>{children}</Suspense>
							</ProtectedRoute>
						)}
					</AuthProvider>
				</ChakraUiProvider>
			</body>
		</html>
	)
}
