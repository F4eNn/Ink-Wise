import React from 'react'
import { Box, Text, Link } from '../../../lib/chakra'
import NextLink from 'next/link'

export const HasAccount = ({ hasAccount }: { hasAccount: boolean }) => {
	return (
		<Box
			my={3}
			textAlign={'right'}>
			{hasAccount ? (
				<>
					<Text as='span'>{'have an account already?'}</Text>
					<Link
                    color={'orange'}
						as={NextLink}
						href={'/signup'}
					>Log in</Link>
				</>
			) : (
				<>
					<Text as='span'>{"Don't have an account?"}</Text>
					<Link
						as={NextLink}
						href={'/login'}
					/>
				</>
			)}
		</Box>
	)
}
