import React from "react"

interface GridProps {
  children: React.ReactNode
}

export default function Grid({ children }: GridProps) {
  return (
    <div className="mt-2 flex h-fit w-full gap-12 overflow-x-auto px-2 pb-10 max-sm:flex-wrap">
      {children}
    </div>
  )
}
