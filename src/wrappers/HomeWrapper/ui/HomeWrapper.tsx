import Image from "next/image"
import Link from "next/link"

import { GROUND_IMAGE, MAIN_LOGO, TEXT_BACKGROUND } from "@shared/constants"
import { Button } from "@shared/ui/Button/ui/Button"
import { SocialButton } from "@shared/ui/SocialButton/ui/SocialButton"

import { pageButtons } from "../static/pageButtons"
import { linkNames } from "../static/linkNames"

import st from "./HomeWrapper.module.scss"

const HomeWrapper = () => {
  return (
    <>
      <Image
        className={st.backgroundImage}
        src={GROUND_IMAGE}
        alt="ground_image"
        width={1000}
        height={400}
      />
      <div className={st.root}>
        <Image
          className={st.mainImage}
          src={MAIN_LOGO}
          alt="main_logo"
          width={800}
          height={210}
        />
        <div className={st.textBackground}>
          <div className={st.mainText}>
            Expanding the Minecraft Create mod with interactive physics-based
            contraptions. This is the home page of the Create Simulated project.
          </div>
          <Image
            className={st.textImage}
            src={TEXT_BACKGROUND}
            alt="text_background"
            width={500}
            height={150}
          />
        </div>
        <div className={st.pagesWrapper}>
          {pageButtons.map((el) => (
            <Link href={el.href} key={el.name}>
              <Button
                width={150}
                height={80}
                image={el.background}
                isDisabled={el.disabled}
              >
                {el.name}
              </Button>
            </Link>
          ))}
        </div>
        <div className={st.socialWrapper}>
          {linkNames.map((link) => (
            <SocialButton key={link} link={link} />
          ))}
        </div>
      </div>
    </>
  )
}

export { HomeWrapper }
