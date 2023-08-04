import React from 'react'
import { Link, Tooltip } from '@/lib/chakra'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

type IconButtonPannelProps = {
	ariaLabel: string
	icon: React.ReactElement
	url: string
}

export const LinkIconPannel = ({ ariaLabel, icon, url }: IconButtonPannelProps) => {
	const pathname = usePathname()
	const isActive = pathname === url

	return (
		<Tooltip hasArrow label={ariaLabel} placement='right'>
			<Link
				w='full'
				color='white'
				whiteSpace='nowrap'
				variant='linkButton'
				borderWidth={isActive ? '1px' : ''}
				borderColor={isActive ? 'focusColor' : 'unset'}
				as={NextLink}
				href={url}
				aria-label={ariaLabel}>
				{icon}
			</Link>
		</Tooltip>
	)
}
