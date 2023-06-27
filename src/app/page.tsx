'use client'
import { Box } from '../lib/chakra'
import { Button, useToast} from '@chakra-ui/react'
export default function Home() {
	const toast = useToast()
	console.log(toast)
	return (
		<Box as='main'>
			Home
		
		</Box>
	)
}
