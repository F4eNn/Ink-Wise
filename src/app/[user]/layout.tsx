import { Pannel } from '@/components/core/Pannel/Pannel'
import React from 'react'
const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Pannel />
			{children}
		</div>
	)
}

export default layout
