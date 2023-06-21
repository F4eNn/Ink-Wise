import { Inter } from 'next/font/google'
import { ChakraUiProvider } from './ChakraUiProvider'
import { Nav } from '@/components/Nav/Nav'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Ink Wise',
	description: 'All your stuff in one place',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ChakraUiProvider>
					<Nav />
					{children}
				</ChakraUiProvider>
			</body>
		</html>
	)
}
