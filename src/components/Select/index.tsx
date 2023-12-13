import React from "react"

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: {
    value: string
    label: string
  }[]
  title: string
}

export default function Select({ options, title, ...rest }: SelectProps) {
  return (
    <>
      <span className="text-md font-medium text-primary max-sm:text-center">
        {title}
      </span>
      <div className="flex h-16 w-full gap-5 max-sm:snap-x max-sm:overflow-hidden max-sm:overflow-x-auto">
        {options.map((option) => (
          <select
            key={option.value}
            className="w-fit cursor-pointer rounded-xl border bg-transparent px-5 py-3 text-sm text-primary shadow-sm max-sm:snap-center"
            {...rest}
          >
            <option value={option.value}>{option.label}</option>
          </select>
        ))}
      </div>
    </>
  )
}
