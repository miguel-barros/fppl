import React from "react"

export default function Grid({ children }: { children: React.ReactNode }) {
  return <div className="flex h-full flex-col justify-around">{children}</div>
}
