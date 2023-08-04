import { Variants } from 'framer-motion'
export const pulseAnimation: Variants = {
	hidden: { scale: 1 },
	visible: {
		scale: [1, 1.05, 1],
		transition: {
			duration: 2,
			ease: 'easeInOut',
			times: [0, 0.2, 0.5, 0.8, 1],
			repeat: Infinity,
		},
	},
}
export const transitionPage: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.75 } },
}
