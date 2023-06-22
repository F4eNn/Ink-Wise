import { Login } from '@/components/Register/Login'
import React from 'react'
import { Flex } from '../../lib/chakra'

const LoginPage = () => {
	return (
		<Flex  as='main' justifyContent={'center'}  h={'100%'} >
			<Login />
		</Flex >
	)
}

export default LoginPage
