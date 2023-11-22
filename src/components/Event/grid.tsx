import React from "react"
import Card, { type CardProps } from "./card"

export default function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap justify-between gap-10">
      {children ||
        [].map((child: CardProps, indx) => <Card key={indx} {...child} />)}
    </div>
  )
}
