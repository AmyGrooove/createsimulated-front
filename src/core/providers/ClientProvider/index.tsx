"use client"

import { ReactElement, createContext } from "react"

interface IProviders {
  children: ReactElement
}

const UserContext = createContext({})

const ClientProvider = ({ children }: IProviders) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>
}

export { ClientProvider, UserContext }
