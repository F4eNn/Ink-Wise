import { Box } from '@/lib/chakra'
import React from 'react'
import Image from 'next/image'
import { Dashboard } from '@/components/core/dashboard/Dashboard'

const UserPage = () => {
	return (
		<Box
			as='main'
			display='flex'
			justifyContent='center'>
			<Dashboard />
		</Box>
	)
}

export default UserPage
