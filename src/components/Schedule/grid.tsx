import React from "react"

interface GridProps {
  children: React.ReactNode
}

export default function Grid({ children }: GridProps) {
  return (
    <div className="mt-2 flex h-fit w-full justify-center gap-12">
      {children}
    </div>
  )
}
