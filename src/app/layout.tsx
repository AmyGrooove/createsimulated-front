import { ReactElement } from "react"
import { IBM_Plex_Serif } from "next/font/google"
import localFont from "next/font/local"

import { Providers } from "@core/providers"
import "@core/styles/global.scss"
import { cl } from "@shared/utils"

const googleFont = IBM_Plex_Serif({
  weight: ["400", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-imbPlexSerif",
})
const monocraftFont = localFont({
  src: "../../public/fonts/Monocraft.otf",
  variable: "--font-monocraft",
})

interface IHomeLayout {
  children: ReactElement
}

const MainLayout = ({ children }: IHomeLayout) => {
  return (
    <html lang="ru">
      <body className={cl(monocraftFont.variable, googleFont.variable)}>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}

export default MainLayout
