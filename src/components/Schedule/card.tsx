import React from "react"

interface CardProps {
  title: string
  date: string
  image: string
}

export default function Card({ title, date, image }: CardProps) {
  return (
    <div className="h-96 w-96 rounded-lg border shadow-xl ">
      <div className="bg-primary flex h-12 w-full items-center justify-center rounded-t-lg">
        <span className="text-lg font-medium text-white">{date}</span>
      </div>
      <div className="h-52 w-full bg-secondary">{image}</div>
      <div className="flex h-32 w-full items-center justify-center rounded-b-lg">
        <span className="text-md text-center font-medium text-primary">
          {title}
        </span>
      </div>
    </div>
  )
}
