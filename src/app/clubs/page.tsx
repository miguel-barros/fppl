import { Information } from "@/components/Information"
import Select from "@/components/Select"
import SocialMedia from "@/components/SocialMedia"
import Title from "@/components/Title"
import React from "react"

export default function Clubs() {
  const selectOptions = [
    {
      label: "Nome do clube",
      value: "name",
    },
  ]

  return (
    <main className="m-auto flex max-w-screen-xl flex-col gap-10">
      <Title
        title="Clubes"
        subTitle="Encontre todos os clubes que atualmente são associados a FPPL"
      />
      <div className="flex h-fit w-full flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-1">
          <div className="h-[115px] w-[115px] rounded-full bg-secondary" />
          <Select options={selectOptions} />
        </div>
        <div className="flex w-full gap-5 max-sm:flex-wrap">
          <Information.Grid className="gap-3">
            <Information.Text
              label="Nome do clube:"
              description="Clube de pesca"
            />
            <Information.Text label="Fundação:" description="01/01/2021" />
            <Information.Text label="Total de trofeus:" description="6" />
            <Information.Text label="Presidente:" description="João da Silva" />
            <Information.Text
              label="Vice-presidente:"
              description="Maria da Silva"
            />
            <Information.Text
              label="Historia:"
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum est ac tellus pellentesque, ac faucibus urna bibendum. Integer eros tellus, viverra non tristique at, elementum et magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum est ac tellus pellentesque, ac faucibus urna bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum est ac tellus pellentesque, ac faucibus urna bibendum. Integer eros tellus, viverra non tristique at, elementum et magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum est ac tellus pellentesque, ac faucibus urna bibendum elementum et magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum est ac tellus pellentesque, ac faucibus urna bibendum elementum et magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum est ac tellus pellentesque, ac faucibus urna bibendum."
              }
              className="text-justify"
            />
          </Information.Grid>
          <div className="h-[500px] w-[600px] rounded-lg bg-secondary"></div>
        </div>
        <SocialMedia
          title="Encontre mais informações sobre o clube nas redes sociais abaixo:"
          links={{
            facebook: "",
            instagram: "",
          }}
          theme="blue"
        />
      </div>
    </main>
  )
}
