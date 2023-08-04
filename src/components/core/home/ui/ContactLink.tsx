'use client'
import React from 'react'
import { MdEmail } from 'react-icons/md'
import { MotionNextLink } from '@/components/ui/MotionNextLink'

export const ContactLink = () => {
	return (
		<MotionNextLink
			targetBlank={true}
			width='max-content'
			url='mailto:mateusz4k@outlook.com'>
			Share Thoughts <MdEmail size='1.6em' />
		</MotionNextLink>
	)
}
