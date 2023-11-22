import React from "react"

interface TextAreaProps {
  text: string
  image?: string
  className?: string
}

export default function TextArea({ text, image, className }: TextAreaProps) {
  return (
    <div
      className={`flex h-[350px] items-center justify-center gap-10 rounded-lg bg-primary ${className}`}
    >
      {image && (
        <div className="h-[250px] w-[250px] rounded-full bg-white opacity-40" />
      )}
      <p className="w-8/12 text-justify text-lg text-white">{text}</p>
    </div>
  )
}
