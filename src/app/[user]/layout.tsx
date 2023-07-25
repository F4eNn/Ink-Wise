import { Drawer } from '@/components/core/drawer/Drawer'
import React, { ReactNode } from 'react'
const layout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<Drawer />
			{children}
		</div>
	)
}

export default layout
