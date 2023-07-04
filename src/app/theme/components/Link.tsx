import { defineStyleConfig } from '../../../lib/chakra'

export const Link = defineStyleConfig({
	variants: {
		linkButton: {
			bg: 'reversePrimary300',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',

			rounded: 'lg',
			p: '3',
			transition: 'background-color .3s',
			_hover: {
				bg: 'reversePrimary300Hover',
				textDecoration: 'none',
			},
		},
	},
})
