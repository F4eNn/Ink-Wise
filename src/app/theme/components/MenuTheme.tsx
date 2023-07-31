import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(menuAnatomy.keys)

const baseStyle = definePartsStyle({
	list: {
		py: '4',
		borderRadius: 'xl',
		border: '1px solid borderColor',
		bg: 'teal.500',
	},
	item: {
		bg: 'reversePrimary300',
		rounded: 'lg',
		py: '3',
        width: '80%',
        color: 'white',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		transition: 'background-color .3s',
		_hover: {
			bg: 'reversePrimary300Hover',
			textDecoration: 'none',
		},
	},
})
// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle })
