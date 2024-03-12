import Title from "@/components/Title"
import Image from "next/image"
import React from "react"
import organogramaImage from "@assets/storage/organograma-fppl.svg"

export default function Organograma() {
  return (
    <section className="flex flex-col items-center overflow-hidden">
      <Title
        title="Organograma"
        subTitle="Veja abaixo o organograma da FPPL:"
      />
      <Image
        alt="Organograma da FPPL"
        src={organogramaImage}
        width={1280}
        height={600}
      />
    </section>
  )
}
