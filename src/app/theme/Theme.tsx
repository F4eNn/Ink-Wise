'use client'
import { extendTheme, withDefaultVariant } from '../../lib/chakra'
import { StyleFunctionProps } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Button } from './components/Button'
import { IconButton } from './components/IconButton'
import { Link } from './components/Link'
export const Theme = extendTheme(
	{
		textStyles: {
			h2: {
				fontSize: ['42px', '50px', '58px'],
				fontWeight: 'bold',
			},
		},
		colors: {
			gold: '#e49800',
			mediumGold: '#eec063',
			lightGold: '#ffda9a',
			lightBrown: '#9a531b',
			veryLightBrown: '#c28f6813',
			darkBrown: '#2b2522',
			darkBrownHover: '#3f3632',
			veryLightGrey: '#f7f7f7eb',
			error: '#fc8181',
			'error.900': '#ff5e5e',
			primary: {
				900: '#e49800',
				600: '#eec063',
				300: '#ffda9a',
				100: '#f0e8db',
			},
			alphaLightBrown: '#c28f6813',
			alphaCustomWhite: '#ffffffea',
			borderColor: 'gray',
			default: '#fff',
			defaultReverse: '#2b2522',
			reversePrimary300: '#ffda9a',
			reversePrimary300Hover: '#3f3632',
			grayish: '#d1d1d1',
		},
		styles: {
			global: (props: Record<string, any> | StyleFunctionProps) => ({
				'html,body': {
					minHeight: '100vh',
					overflowX: 'hidden',

					margin: 0,
					backgroundReapeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundImage: mode(
						'linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.468312324929972) 37%, rgba(238,233,216,1) 100%)',
						'linear-gradient(45deg, rgba(2,0,36,1) 0%, #261b05 100%, rgba(0,212,255,1) 100%)'
					)(props),
				},
				':root': {
					'--chakra-colors-primary-900': mode('#9a531b', '#e49800')(props),
					'--chakra-colors-primary-600': mode('#9a531b', '#eec063')(props),
					'--chakra-colors-primary-300': mode('#2b2522', '#ffda9a')(props),
					'--chakra-colors-primary-100': mode('#f0e8db', '#44413f')(props),
					'--chakra-colors-reversePrimary300': mode(' #c27b44cf', '#2b2522')(props),
					'--chakra-colors-reversePrimary300Hover': mode(' #c27b44', '#3f3632')(props),
					'--chakra-colors-default': mode('#2b2522', '#fff ')(props),
					'--chakra-colors-defaultReverse': mode('#fff ', '#2b2522')(props),
					'--chakra-colors-alphaLightBrown': mode('#c28f6813', '')(props),
					'--chakra-colors-borderColor': mode('#9a531b', 'gray')(props),
					'--chakra-colors-grayish': mode('#808080', '#d1d1d1')(props),
					'--chakra-colors-alphaCustomWhite': mode('#ffffffea', '#000000b3')(props),
					
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
			IconButton,
			Link,
		},
	},
	withDefaultVariant({
		variant: 'solid',
		components: ['Button'],
	})
)
