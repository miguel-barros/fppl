import DirectorCard from "@/components/DirectorCard"
import Title from "@/components/Title"
import { directors } from "@/mock/directors"
import React from "react"

export default function Page() {
  return (
    <section className="flex flex-col items-center gap-4">
      <Title
        title="Diretores"
        subTitle="Aqui você pode entrar em contato e consultar diretamente algum dos nossos diretores"
      />
      {directors.map((director, idx) => (
        <DirectorCard
          theme={idx % 2 === 0 ? "blue" : "light"}
          key={director.id}
          director={director}
        />
      ))}
    </section>
  )
}
