import React from 'react'

const initValues = {
	listenOnSubmitForm: (value?: boolean, username?:string) => {},
}

export const AuthCtx = React.createContext(initValues)
