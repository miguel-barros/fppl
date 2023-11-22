import React from "react"

interface TitleProps {
  title: string
  subTitle?: string
}

export default function Title({ title, subTitle }: TitleProps) {
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center gap-1 max-sm:text-center">
      <h1 className="text-3xl text-primary">{title}</h1>
      <h2 className="text-md text-secondary">{subTitle}</h2>
    </div>
  )
}
