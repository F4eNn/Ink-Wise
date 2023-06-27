
import React from 'react'

const initValues = {
    listenOnSubmitForm: (value?:boolean) => {}
}

export const AuthCtx =  React.createContext(initValues)
