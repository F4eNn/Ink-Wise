import React from 'react'

const initValues = {
	listenOnSubmitForm: (value?: boolean, username?: string) => {},
	logout: () => {},
	authUser: { displayName: '' },
}

export const AuthCtx = React.createContext(initValues)
