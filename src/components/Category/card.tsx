import React from "react"
import { IconProps } from "@phosphor-icons/react/"

interface CardProps {
  icon: React.FC<IconProps>
  title: string
  className?: string
  description: string
}

export default function Card({
  icon: Icon,
  title,
  description,
  className,
}: CardProps) {
  return (
    <div
      className={`hover:bg-secondary group flex h-80 w-64 cursor-pointer flex-col items-center justify-center gap-14 rounded-lg border shadow-xl shadow-[#00000015] duration-300 ease-in-out  hover:-translate-y-2 ${className}`}
    >
      <Icon
        weight="regular"
        size={125}
        className="text-primary duration-300 ease-in group-hover:opacity-0"
      />
      <span className="text-primary text-2xl font-semibold duration-300 group-hover:opacity-0 ">
        {title}
      </span>
      <span className="absolute px-5 text-center text-2xl font-medium text-white opacity-0 duration-300 ease-in group-hover:opacity-100">
        {description}
      </span>
    </div>
  )
}
