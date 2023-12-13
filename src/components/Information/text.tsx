import React from "react"

interface TextProps {
  label: string
  description: string
}

export default function Text({ label, description }: TextProps) {
  return (
    <span className="text-md font-semibold text-secondary">
      {label} <span className="font-medium text-primary">{description}</span>
    </span>
  )
}
