import { Information } from "@/components/Information"
import Select from "@/components/Select"
import Title from "@/components/Title"
import { selectOptions } from "@/mock/select"
import React from "react"

export default function Campeoes() {
  return (
    <main className="m-auto flex max-w-screen-xl flex-col items-center gap-10">
      <Title
        title="Campeões"
        subTitle="Aqui você poderá encontrar seu campeão utilizando os filtros de pesquisa"
      />
      <div className="flex h-fit w-full gap-8 max-sm:flex-wrap">
        <div className="h-[500px] w-[600px] rounded-lg bg-secondary"></div>
        <div className="flex w-full flex-col gap-5">
          <Select
            options={selectOptions}
            title="Escolha cada um dos itens a seguir para filtrar a busca de seu campeão"
          />
          <Information.Grid>
            <Information.Text
              label="Nome do participante:"
              description="John doe"
            />
            <Information.Text label="Idade:" description="23" />
            <Information.Text label="Trofeus ganhos:" description="6" />
            <Information.Text
              label="Clube associado:"
              description="Clube de pesca"
            />
            <Information.Text
              label="Nota de agradecimento:"
              description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum est ac tellus pellentesque, ac faucibus urna bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum est ac tellus pellentesque, ac faucibus urna bibendum.”"
              className="text-justify"
            />
          </Information.Grid>
        </div>
      </div>
    </main>
  )
}
