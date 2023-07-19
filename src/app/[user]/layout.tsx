import { Drawer } from '@/components/core/drawer/Drawer' 
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
