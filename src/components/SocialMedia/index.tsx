import React from "react"
import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react/dist/ssr"

export default function SocialMedia() {
  return (
    <section className="flex h-64 w-full flex-col items-center justify-center gap-3 rounded-md border border-primary text-center max-sm:px-10">
      <span className="text-3xl text-primary max-sm:text-xl">
        Nos encontre nas redes socias
      </span>
      <div className="flex justify-center gap-20">
        <span className="flex h-fit w-fit flex-col max-sm:items-center">
          <FacebookLogo
            size={115}
            weight="regular"
            className="text-primary max-sm:h-20 max-sm:w-20"
          />
          <span className="text-xl text-primary">Facebook</span>
        </span>
        <span className="flex h-fit w-fit flex-col max-sm:items-center">
          <InstagramLogo
            size={115}
            weight="regular"
            className="text-primary  max-sm:h-20 max-sm:w-20"
          />
          <span className="text-xl text-primary">Instagram</span>
        </span>
      </div>
    </section>
  )
}
