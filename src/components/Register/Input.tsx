import React from 'react'
import { Input as ChakraInput } from '../../lib/chakra'

export const Input = () => {
	return (
		<ChakraInput
			fontSize={'.8em'}
			type='text'
			placeholder='Name'
			variant={'flushed'}
			focusBorderColor='#976a0a'
			mb={10}
            py={5}
		/>
	)
}
