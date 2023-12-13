import React from "react"

export default function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col justify-around max-sm:w-11/12 max-sm:gap-3">
      {children}
    </div>
  )
}
