import { Information } from "@/components/Information"
import Title from "@/components/Title"
import { fees, regulations } from "@/mock/statutes"
import { FilePdf } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"
import React from "react"

export default function Documentacao() {
  return (
    <main className="m-auto flex max-w-screen-xl flex-col items-center gap-5">
      <Title
        title="Normas e Estatutos"
        subTitle="Consulte nossas normas e estatutos:"
      />
      <div className="flex w-full max-sm:flex-wrap">
        <div className="flex w-full flex-col gap-5">
          {regulations.map((regulation, index) => (
            <div className="flex items-center gap-5" key={index}>
              <Link
                href={regulation.link}
                className="flex h-[150px] w-[150px] cursor-pointer items-center justify-center rounded-full bg-primary"
              >
                <FilePdf className="h-5/6 w-11/12 text-white" />
              </Link>
              <div key={index} className="flex w-6/12 flex-col gap-1">
                <span className="text-md font-medium text-primary">
                  {regulation.title}
                </span>
                <span className="text-md font-medium text-secondary">
                  Clique no icone de PDF para baixar o arquivo
                </span>
              </div>
            </div>
          ))}
        </div>
        <Information.Grid className="gap-2">
          <span className="mb-1 text-lg font-semibold text-primary max-sm:text-center">
            Sobre as taxas:
          </span>
          {fees.map((fee, index) => (
            <Information.Text
              key={index}
              label={fee.label}
              description={fee.description}
            />
          ))}
        </Information.Grid>
      </div>
    </main>
  )
}
