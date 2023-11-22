import { shorts } from "@/mock/shorts"
import Logo from "@assets/logo.svg"
import Image from "next/image"
import Link from "next/link"
import Hamburguer from "./hamburguer"

export default function Header() {
  return (
    <div className="group m-auto flex h-32 w-full max-w-screen-xl items-center justify-between overflow-hidden">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" />
        <div className="text-md ml-8 flex gap-8 font-semibold text-[#00398D] max-md:hidden">
          {shorts.map((short, indx) => (
            <Link
              key={indx}
              href={short.link}
              className="text-md duration-300 ease-in-out hover:text-[#00000050]"
            >
              <span>{short.label}</span>
            </Link>
          ))}
        </div>
      </div>
      <button className="text-md rounded-xl border px-8 py-3 font-semibold text-[#00398D] shadow-md duration-300 ease-in-out hover:opacity-50 max-md:hidden">
        <span>Entre em contato</span>
      </button>
      <Hamburguer />
    </div>
  )
}
