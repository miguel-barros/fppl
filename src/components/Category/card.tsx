import React from "react"
import { IconProps } from "@phosphor-icons/react/"
import Link from "next/link"

interface CardProps {
  icon: React.FC<IconProps>
  title: string
  className?: string
  description: string
  route: string
}

export default function Card({
  icon: Icon,
  title,
  description,
  className,
  route,
}: CardProps) {
  return (
    <Link
      href={route}
      className={`group flex h-80 w-64 cursor-pointer flex-col items-center justify-center gap-14 rounded-lg border shadow-xl shadow-[#00000015] duration-300 ease-in-out hover:-translate-y-2  hover:bg-secondary ${className || ""}`}
    >
      <Icon
        weight="regular"
        size={115}
        className="text-primary duration-300 ease-in group-hover:opacity-0"
      />
      <span className="text-xl font-semibold text-primary duration-300 group-hover:opacity-0 ">
        {title}
      </span>
      <span className="absolute px-5 text-center text-xl font-medium text-white opacity-0 duration-300 ease-in group-hover:opacity-100">
        {description}
      </span>
    </Link>
  )
}
