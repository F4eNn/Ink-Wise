import React from 'react'

const initValues = {
	listenOnSubmitForm: (value?: boolean, username?: string) => {},
	logout: () => {},
	authUser: {},
}

export const AuthCtx = React.createContext(initValues)
