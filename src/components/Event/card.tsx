import Image from "next/image"
import React from "react"

export interface CardProps {
  type: "long" | "short"
  title: string
  image?: string
  description?: string
  className?: string
}

export default function Card({
  type = "short",
  title,
  description,
  image,
  className,
}: CardProps) {
  if (type === "long") {
    return (
      <div
        className={`flex w-full items-center gap-8 ${className || ""} max-sm:flex-wrap`}
      >
        <div className="relative h-[423px] w-[830px] overflow-hidden rounded-lg bg-secondary">
          <Image
            className="h-full w-full object-cover"
            src={image || ""}
            layout="fill"
            alt=""
          />
        </div>
        <div className="flex w-1/3 flex-col gap-3 max-sm:w-full max-sm:text-center">
          <span className="text-2xl text-primary max-sm:text-xl">{title}</span>
          <span className="text-lg text-secondary max-sm:text-base">
            {description}
          </span>
        </div>
      </div>
    )
  } else {
    return (
      <div className={`flex-1 shadow-lg ${className || ""} rounded-lg`}>
        <div className="relative h-52 flex-1 rounded-t-lg bg-secondary">
          <Image
            className="h-full w-full rounded-t-lg object-cover"
            src={image || ""}
            layout="fill"
            alt=""
          />
        </div>
        <div className="text-md flex h-24 items-center justify-center rounded-b-lg border-2 font-medium text-primary">
          {title}
        </div>
      </div>
    )
  }
}
