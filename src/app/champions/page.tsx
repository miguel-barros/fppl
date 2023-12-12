import Select from "@/components/Select"
import Title from "@/components/Title"
import { selectOptions } from "@/mock/select"
import React from "react"

export default function Champions() {
  return (
    <main className="m-auto flex max-w-screen-xl flex-col items-center gap-10">
      <Title
        title="Campeões"
        subTitle="Aqui você poderá encontrar seu campeão utilizando os filtros de pesquisa"
      />
      <div className="flex h-fit w-full gap-8">
        <div className="h-[500px] w-[400px] rounded-lg bg-secondary"></div>
        <div className="flex flex-1 flex-col gap-5">
          <Select
            options={selectOptions}
            title=" Escolha cada um dos itens a seguir para filtrar a busca de seu campeão"
          />
          <div className="flex h-full flex-col justify-around">
            <span className="text-md font-semibold text-secondary">
              Nome do participante:{" "}
              <span className="font-medium text-primary">John doe</span>
            </span>{" "}
            <span className="text-md font-semibold text-secondary">
              Idade: <span className="font-medium text-primary">23</span>
            </span>{" "}
            <span className="text-md font-semibold text-secondary">
              Trofeus ganhos:{" "}
              <span className="font-medium text-primary">6</span>
            </span>{" "}
            <span className="text-md font-semibold text-secondary">
              Clube associado:{" "}
              <span className="font-medium text-primary">Clube de pesca</span>
            </span>{" "}
            <span className="text-md font-semibold text-secondary">
              Nota de agradecimento:{" "}
              <span className="font-medium text-primary">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur interdum est ac tellus pellentesque, ac faucibus urna
                bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Curabitur interdum est ac tellus pellentesque, ac faucibus
                urna bibendum.”
              </span>
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
