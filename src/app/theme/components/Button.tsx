import { defineStyleConfig } from '../../../lib/chakra'
import { StyleFunctionProps } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const Button = defineStyleConfig({
	baseStyle: {
		textTransform: 'capitalize',
		fontSize: '1em',
	},
	sizes: {
		sm: {
			py: 8,
		},
	},
	variants: {
		outline: {
			boxShadow: '0 0 10px 1px #b6b6b634',
		},
		outlineDark: (props: Record<string, any> | StyleFunctionProps) => ({
			bg: mode('#fff', '#2b2522')(props),
			boxShadow: mode('0 0 10px 1px #b6b6b634', '')(props),
			_hover: {
				bg: mode('#fafafa', '#3f3836')(props),
			},
		}),
		primary: {
			bg: 'reversePrimary300',
			rounded: 'lg',
			p: '3',
			color: 'white',
			transition: 'background-color .3s',
			_hover: {
				bg: 'reversePrimary300Hover',
				textDecoration: 'none',
			},
		},
	},
	defaultProps: {},
})
