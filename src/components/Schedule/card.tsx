import Image from "next/image"
import React from "react"

interface CardProps {
  title: string
  date: string | string[]
  image: string
}

export default function Card({ title, date, image }: CardProps) {
  const formatDate = (inputDate: string) => {
    const [day, month] = inputDate.split("-")
    return `${day}/${month}`
  }
  const formattedDate = () => {
    if (typeof date === "string") return formatDate(date)
    return date?.map((singleDate) => formatDate(singleDate)).join(" e ")
  }
  if (!date) return null
  return (
    <div className="h-96 w-96 rounded-lg border shadow-xl">
      <div className="flex h-12 w-full items-center justify-center rounded-t-lg bg-primary">
        <span className="text-lg font-medium text-white">
          {formattedDate()}
        </span>
      </div>
      <div className="relative flex h-52 w-full items-center justify-center bg-secondary">
        {image ? (
          <Image src={image} layout="fill" objectFit="cover" alt="" />
        ) : (
          <span className="text-2xl font-medium text-primary opacity-25">
            Sem imagem
          </span>
        )}
      </div>
      <div className="flex h-32 w-full items-center justify-center rounded-b-lg">
        <span className="text-md w-11/12 text-center font-medium text-primary">
          {title}
        </span>
      </div>
    </div>
  )
}
