import dynamic from 'next/dynamic'
const ChakraProvider = dynamic(() => import('@chakra-ui/react').then(mod => mod.ChakraProvider))

import { Theme } from './Theme'

export const ChakraUiProvider = ({ children }: { children: React.ReactNode }) => {
	return <ChakraProvider theme={Theme}>{children}</ChakraProvider>
}
