import Image from "next/image"

import { cl } from "@shared/utils"

import st from "./SocialButton.module.scss"
import Link from "next/link"
import { linkButtons } from "../static/linkButtons"

interface ISocialButton {
  link: "youtube" | "twitter" | "discord"

  className?: string
}

const SocialButton = ({ link, className }: ISocialButton) => {
  const selectLink = {
    discord: linkButtons[0],
    youtube: linkButtons[1],
    twitter: linkButtons[2],
  }[link]

  return (
    <Link
      href={selectLink.href}
      className={cl(st.root, className)}
      target="_blank"
    >
      <Image
        className={st.icon}
        src={selectLink.icon}
        width={50}
        height={50}
        alt={link}
      />
    </Link>
  )
}

export { SocialButton }
