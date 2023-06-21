'use client'
import { StyleFunctionProps } from '@/lib/chakra'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
export const ChakraUiProvider = ({ children }: { children: React.ReactNode }) => {
	const theme = extendTheme({
		styles: {
			global: (props: Record<string, any> | StyleFunctionProps) => ({
				'html,body': {
					height: '100vh',
					margin: 0,
					backgroundImage: mode(
						'linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.468312324929972) 37%, rgba(238,233,216,1) 100%)',
						'linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(38,27,5,1) 100%, rgba(0,212,255,1) 100%)'
					)(props),
				},
				'#__next': {
					minHeight: `100vh`,
				},
				li: {
					listStyle: 'none',
				},
			}),
		},
		config: {
			initialColorMode: 'dark',
			useSystemColorMode: true,
		},
	})

	return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
