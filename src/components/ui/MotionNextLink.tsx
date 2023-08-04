import { LinkProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { Link } from '@/lib/chakra'
import { pulseAnimation } from '@/animations/GeneralAnimations'
import NextLink from 'next/link'

interface MotionLinkProps extends LinkProps {
	children: ReactNode
}
const MotionLink = motion<MotionLinkProps>(Link)

interface MotionNextLinkProps extends MotionLinkProps {
	children: ReactNode
	url: string
	targetBlank?: boolean | false
	width?: 'max-content' | '300px'
}

export const MotionNextLink = ({ url, targetBlank = false, children, width = '300px' }: MotionNextLinkProps) => {
	return (
		<MotionLink
			as={NextLink}
			variants={pulseAnimation}
			variant='linkButton'
			color='#fff'
			initial='hidden'
			animate='visible'
			target={targetBlank ? '_blank' : ''}
			rel={targetBlank ? 'noopener noreferrer' : ''}
			w={width}
			href={url}>
			{children}
		</MotionLink>
	)
}
