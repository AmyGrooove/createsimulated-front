import { ReactElement } from "react"

import { ClientProvider } from "./ClientProvider"

interface IProviders {
  children: ReactElement
}

const Providers = ({ children }: IProviders) => {
  return <ClientProvider>{children}</ClientProvider>
}

export { Providers }
