import { Signup } from '@/components/register/Signup'
import { Flex } from '../../lib/chakra'
import React from 'react'

const SignupPage = () => {
	return (
		<Flex
			as='main'
			justifyContent={'center'}>
			<Signup />
		</Flex>
	)
}

export default SignupPage
