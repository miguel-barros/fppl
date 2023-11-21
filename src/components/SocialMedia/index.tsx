import React from "react"
import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react/dist/ssr"

export default function SocialMedia() {
  return (
    <section className="border-primary flex h-64 w-full flex-col items-center justify-center gap-3 rounded-md border text-center">
      <span className="text-3xl text-primary">
        Nos encontre nas redes socias
      </span>
      <div className="flex justify-center gap-20">
        <span className="flex h-fit w-fit flex-col">
          <FacebookLogo size={115} weight="regular" className="text-primary" />
          <span className="text-xl text-primary">Facebook</span>
        </span>
        <span className="flex h-fit w-fit flex-col">
          <InstagramLogo size={115} weight="regular" className="text-primary" />
          <span className="text-xl text-primary">Instagram</span>
        </span>
      </div>
    </section>
  )
}
