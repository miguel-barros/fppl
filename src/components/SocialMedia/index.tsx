import React from "react"
import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

interface SocialMediaProps {
  theme?: "blue" | "transparent"
  title?: string
  links: {
    facebook?: string
    instagram?: string
  }
}

export default function SocialMedia({
  theme = "transparent",
  title,
  links,
}: SocialMediaProps) {
  return (
    <section
      className={`flex h-64 w-full flex-col items-center justify-center gap-3 rounded-md border border-primary text-center max-sm:px-10 ${
        theme === "blue" ? "bg-primary" : ""
      }`}
    >
      <span
        className={`text-3xl text-primary max-sm:text-xl ${
          theme === "blue" ? "text-white" : ""
        }`}
      >
        {title ? title : "Siga-nos nas redes socias"}
      </span>
      <div className="flex justify-center gap-20">
        <Link
          href={links.facebook || ""}
          className="flex h-fit w-fit flex-col max-sm:items-center"
        >
          <FacebookLogo
            size={115}
            weight="regular"
            className={`max-sm:h-20 max-sm:w-20 ${
              theme === "blue" ? "text-white" : "text-primary"
            }`}
          />
          <span
            className={`text-xl text-primary ${
              theme === "blue" ? "text-white" : "text-primary"
            }`}
          >
            Facebook
          </span>
        </Link>
        <Link
          href={links.instagram || ""}
          className="flex h-fit w-fit flex-col max-sm:items-center"
        >
          <InstagramLogo
            size={115}
            weight="regular"
            className={`max-sm:h-20 max-sm:w-20 ${
              theme === "blue" ? "text-white" : "text-primary"
            }`}
          />
          <span
            className={`text-xl text-primary ${
              theme === "blue" ? "text-white" : "text-primary"
            }`}
          >
            Instagram
          </span>
        </Link>
      </div>
    </section>
  )
}
