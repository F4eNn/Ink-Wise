import { Drawer } from '@/components/core/Drawer/Drawer' 
import React from 'react'
const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Drawer />
			{children}
		</div>
	)
}

export default layout
