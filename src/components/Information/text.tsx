import React from "react"

interface TextProps {
  label: string
  description: string
  className?: string
}

export default function Text({ label, description, className }: TextProps) {
  return (
    <span
      className={`text-md w-full font-semibold text-secondary ${className}`}
    >
      {label} <span className="font-normal text-primary">{description}</span>
    </span>
  )
}
