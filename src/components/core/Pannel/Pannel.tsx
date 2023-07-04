'use client'
import React from 'react'
import { VStack, IconButton, Box, Flex } from '@/lib/chakra'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { IoMdPersonAdd } from 'react-icons/io'
import { AiOutlinePlus } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
import { DeleteIcon } from '@chakra-ui/icons'
import { useToggle } from '@/hooks/useToggle'
export const Pannel = () => {
	const [isOpen, toggleOpen] = useToggle()

	return (
		<Flex flexDir='row'>
			<VStack
				rounded='2xl'
				transition='width .3s'
				bg='ButtonFace'
				w={isOpen ? ['250px', '300px', '350px'] : ['50px', '70px', '70px']}
				h='calc(100vh - 100px)'
				mt='auto'>
				<IconButton
					_hover={{
						color: 'gold',
					}}
					color='primary.900'
					variant='default'
					size='lg'
					ml={isOpen ? 'auto' : 'center'}
					aria-label='open drawer'
					icon={isOpen ? <ArrowBackIcon /> : <ArrowForwardIcon />}
					onClick={toggleOpen}
					w={'50px'}
				/>
				{/* <Box>
					<DeleteIcon /> Trash
				</Box>
				<Box>
					<DeleteIcon /> Create New
				</Box>
				<Box>
					<DeleteIcon /> Friends
				</Box>
				<Box>
					<DeleteIcon /> Trash
				</Box> */}

				<Box>
					<AiOutlinePlus />
				</Box>
				<Box>
					<DeleteIcon />
				</Box>
				<Box>
					<FaUsers />
				</Box>
				<Box>
					<IoMdPersonAdd />
				</Box>
			</VStack>
		</Flex>
	)
}
