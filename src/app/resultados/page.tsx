import Select from "@/components/Select"
import Title from "@/components/Title"
import { results } from "@/mock/results"
import { FileDoc } from "@phosphor-icons/react/dist/ssr"
import React from "react"

export default function Resultados() {
  return (
    <main className="m-auto flex max-w-screen-xl flex-col items-center gap-5">
      <Title
        title="Resultados"
        subTitle="Aqui você poderá encontrar a planilha de resultados do campeonato desejado"
      />
      <Select
        title="Escolha cada um dos itens a seguir para filtrar a busca da sua panlilha de resultados:"
        options={results}
      />
      <div className="flex flex-col items-center gap-3">
        <span className="relative flex h-[150px] w-[150px] cursor-pointer items-center justify-center rounded-full bg-primary">
          <FileDoc className="h-5/6 w-11/12 text-white" />
        </span>
        <span className="text-md font-medium text-primary">Download</span>
      </div>
      <span className="text-md font-medium text-secondary max-sm:text-center">
        Clique no botão para fazer o download da panilha desejada.
      </span>
    </main>
  )
}
