import React from "react"

interface GridProps {
  children: React.ReactNode
  className?: string
}

export default function Grid({ children, className }: GridProps) {
  return (
    <div
      className={`flex h-full w-full flex-col justify-around max-sm:gap-3 ${className}`}
    >
      {children}
    </div>
  )
}
