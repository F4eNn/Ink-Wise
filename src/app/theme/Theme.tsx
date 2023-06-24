'use client'
import { StyleFunctionProps, extendTheme, withDefaultVariant } from '../../lib/chakra'
import { mode } from '@chakra-ui/theme-tools'
import { Button } from './components/Button'
export const Theme = extendTheme(
	{
		clampText: {
			'--clamp': 'clamp(.8em, 2.5vw, 1em)', //
		},
		colors: {
			gold: '#e49800',
			lightBrown: '#9a531b',
			veryLightBrown: '#c28f6813',
			darkBrown: '#2b2522',
			darkBrownHover: '#3f3632',
			veryLightGrey: '#f7f7f7eb',
		},
		styles: {
			global: (props: Record<string, any> | StyleFunctionProps) => ({
				'html,body': {
					minHeight: '100vh',

					margin: 0,
					backgroundReapeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundImage: mode(
						'linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.468312324929972) 37%, rgba(238,233,216,1) 100%)',
						'linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(38,27,5,1) 100%, rgba(0,212,255,1) 100%)'
					)(props),
				},
				'#__next': {
					minHeight: `100vh`,
				},
				li: {
					listStyle: 'none',
				},
			}),
		},

		config: {
			initialColorMode: 'dark',
			useSystemColorMode: true,
		},
		components: {
			Button,
		},
	},
	withDefaultVariant({
		variant: 'solid',
		components: ['Button'],
	})
)
