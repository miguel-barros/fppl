import React from "react"
import { Envelope, LinkedinLogo, Phone } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"
import Image from "next/image"

export interface IDirector {
  id: string
  image: string
  name: string
  email: string
  phone: string
  socialMedia: {
    linkedin: string
  }
}

export interface IDirectorCardProps {
  director: IDirector
  theme: "blue" | "light"
}

export default function DirectorCard({ director, theme }: IDirectorCardProps) {
  return (
    <article
      className={`flex h-fit w-full flex-col md:flex-row md:w-[896px] items-center justify-between rounded-lg px-10 py-4 shadow-lg ${
        theme === "blue" ? " bg-primary" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-6 flex-col md:flex-row">
        <Image
          src={director.image}
          alt={director.name}
          width={140}
          height={140}
          className="h-[140px] w-[140px] rounded-full"
        />
        <div className="flex flex-col gap-2">
          <p
            className={`${
              theme === "blue" ? "text-[#ffffff80]" : "text-[#00000080]"
            }`}
          >
            Nome:{" "}
            <span
              className={`${theme === "blue" ? "text-white" : "text-primary"}`}
            >
              {director.name}
            </span>
          </p>
          <p
            className={`${
              theme === "blue" ? "text-[#ffffff80]" : "text-[#00000080]"
            }`}
          >
            E-mail:{" "}
            <span
              className={`${theme === "blue" ? "text-white" : "text-primary"}`}
            >
              {director.email}
            </span>
          </p>
          <p
            className={`${
              theme === "blue" ? "text-[#ffffff80]" : "text-[#00000080]"
            }`}
          >
            Telefone:{" "}
            <span
              className={`${theme === "blue" ? "text-white" : "text-primary"}`}
            >
              {director.phone}
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <Link href={`tel:+55 ${director.phone}`}>
          <Phone size={48} color={theme === "blue" ? "white" : "#00398D"} />
        </Link>
        <Link href={director.socialMedia.linkedin}>
          <LinkedinLogo
            size={48}
            color={theme === "blue" ? "white" : "#00398D"}
          />
        </Link>
        <Link href={`mailto:${director.email}`}>
          <Envelope size={48} color={theme === "blue" ? "white" : "#00398D"} />
        </Link>
      </div>
    </article>
  )
}
