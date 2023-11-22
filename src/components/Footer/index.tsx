import Image from "next/image"
import React from "react"
import CBPL from "@assets/cbplnpb.svg"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="m-auto mt-10 flex max-w-screen-xl flex-col items-center justify-center gap-5 border-t border-primary py-10">
      <Link href="https://cbpe.com.br/">
        <Image src={CBPL} width={125} height={80} alt="CBPLNPB" />
      </Link>
      <span className="text-base font-medium text-primary">
        2023 © Federação Paulista de Pesca e Lançamento
      </span>
    </footer>
  )
}
