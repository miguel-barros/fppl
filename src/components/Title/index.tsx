import React from "react"

interface TitleProps {
  title: string
  subTitle?: string
}

export default function Title({ title, subTitle }: TitleProps) {
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center gap-1">
      <h1 className="text-primary text-3xl">{title}</h1>
      <h2 className="text-secondary text-md">{subTitle}</h2>
    </div>
  )
}
