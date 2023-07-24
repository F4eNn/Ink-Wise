import { Inter } from 'next/font/google'
import { ChakraUiProvider } from './theme/ChakraUiProvider'
import { Nav } from '@/components/core/home/nav/Nav'
import { Suspense } from 'react'
import Loading from './loading'
import { AuthProvider } from '@/components/register/context/AuthProvider'

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }: { children: React.ReactNode }) {
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
						<Suspense fallback={<Loading />}>
							<Nav />
							{children}
						</Suspense>
					</AuthProvider>
				</ChakraUiProvider>
			</body>
		</html>
	)
}
