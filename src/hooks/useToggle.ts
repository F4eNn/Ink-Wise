import { useState } from 'react'

export const useToggle = (defaultState = false) => {
	const [isToggled, setIsToggled] = useState(defaultState)
	const handleToggle = () => {
		setIsToggled(prev => !prev)
	}
	return [isToggled, handleToggle] as const
}
