import isEmail from 'validator/lib/isEmail'

const containsSpecialChar = /(?=.*\W)/
const containsCapitalLetter = /(?=.*[A-Z])/

export const usernameVal = {
	required: {
		value: true,
		message: 'This field is required',
	},
	validate: {
		hasMinLength: (username: string) => {
			return username.trim().length >= 3 || 'min. 3 characters'
		},
		hasMaxLength: (username: string) => {
			return username.trim().length <= 12 || 'max. 12 characters'
		},
		hasSpecialChar: (username: string) => {
			return !containsSpecialChar.test(username) || 'Username can\'t contain special characters'
		},
	},
}

export const passwordVal = {
	required: {
		value: true,
		message: 'This field is required',
	},
	validate: {
		isShort: (password: string) => {
			return password.trim().length >= 6 || 'min. 6 characters'
		},
		hasBigLetter: (password: string) => {
			return containsCapitalLetter.test(password) || 'Atleast one capital letter'
		},
		hasSpecialChar: (password: string) => {
			return containsSpecialChar.test(password) || 'Atleast one special char.'
		},
	},
}

export const emailVal = {
	required: {
		value: true,
		message: 'This field is required',
	},
	validate: (email: string) => isEmail(email) || 'Provide valid email',
}

export const selectVal = {
    required: {
        value: true,
		message: 'Select relevant field',
	},
}

export const basicVal = {
    required: {
        value: true,
        message: 'This field is required',
    },
    validate: {
        hasMinLength: (username: string) => {
            return username.trim().length >= 3 || 'min. 3 characters'
        },
    },
}
