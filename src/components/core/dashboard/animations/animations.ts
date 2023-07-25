import { Variants } from 'framer-motion'

export const noteAnimation = {
	initial: { opacity: 0, x: 100 },
	whileInView: { opacity: 1, x: 0 },
	whileHover: { scale: 1.04 },
	viewport: { once: true },
}
export const buttonAnimation: Variants = {
	whileTap: { scale: 0.9 },
}
export const modalAnimation: Variants = {
	initial: { opacity: 0, y: -100 },
	whileInView: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.5 } },
}
