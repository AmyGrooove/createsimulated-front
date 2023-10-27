import Image from "next/image"

import { cl } from "@shared/utils"

import st from "./Button.module.scss"

interface IButton {
  children: string
  image: string

  height?: number
  width?: number
  onClick?: () => void
  isDisabled?: boolean
  className?: string
}

const Button = ({
  children,
  image,
  onClick,
  isDisabled = false,
  className,
  width,
  height,
}: IButton) => {
  return (
    <button
      className={cl(st.root, className)}
      onClick={onClick}
      disabled={isDisabled}
      style={{ width: width + "px", height: height + "px" }}
    >
      <div className={st.text}>{children}</div>
      <Image
        className={st.background}
        src={image}
        width={100}
        height={60}
        alt={children}
      />
    </button>
  )
}

export { Button }
