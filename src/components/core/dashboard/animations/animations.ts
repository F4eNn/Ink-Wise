import { Variants } from 'framer-motion'

export const noteAnimation = {
	initial: { opacity: 0, x: 100 },
	whileInView: { opacity: 1, x: 0 },
	whileHover: { scale: 1.03 },
	viewport: { once: true },
}
export const buttonAnimation: Variants = {
	whileTap: { scale: 0.9 },
}
export const modalAnimation: Variants = {
	initial: { opacity: 0, y: -100 },
	whileInView: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.5 } },
}
export const linkVariant: Variants = {
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
