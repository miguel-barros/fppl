import Image from "next/image"
import React from "react"

interface TextAreaProps {
  text: string
  image?: string
  className?: string
}

export default function TextArea({ text, image, className }: TextAreaProps) {
  return (
    <div
      className={`flex h-[350px] items-center justify-center gap-10 rounded-lg bg-primary ${className || ""} max-sm:h-fit max-sm:flex-wrap max-sm:py-10`}
    >
      {image && (
        <div className="relative h-[250px] w-[250px] rounded-full">
          <Image
            src={image || ""}
            layout="fill"
            alt=""
            className="rounded-full object-cover"
          />
        </div>
      )}
      <p className="w-8/12 text-justify text-lg text-white max-sm:w-10/12 max-sm:text-base">
        {text}
      </p>
    </div>
  )
}
