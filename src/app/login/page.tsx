import { Login } from '@/components/register/Login'
import React from 'react'
import { Flex } from '../../lib/chakra'

const LoginPage = () => {
	return (
		<Flex
			as='main'
			justifyContent={'center'}>
			<Login />
		</Flex>
	)
}

export default LoginPage
