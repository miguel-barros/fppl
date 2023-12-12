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
      <span className="text-md font-medium text-primary">{title}</span>
      <div className="w-h-full flex gap-5 ">
        {options.map((option) => (
          <select
            key={option.value}
            className="w-fit cursor-pointer rounded-xl border bg-transparent px-5 py-3 text-sm text-primary shadow-sm"
            {...rest}
          >
            <option value={option.value}>{option.label}</option>
          </select>
        ))}
      </div>
    </>
  )
}
