import Link from "next/link"

interface WarningProps {
  title: string
  label?: string
  link: string
}

export default function Warning({
  title,
  label = "Clique aqui para saber mais",
  link,
}: WarningProps) {
  return (
    <div className="flex h-28 w-full flex-col items-center justify-center gap-2 rounded-lg bg-primary">
      <p className="text-2xl font-semibold text-white">{title}</p>
      <Link
        href={link}
        className="text-md cursor-pointer text-gray-400 duration-300 ease-in-out hover:text-white"
      >
        {label}
      </Link>
    </div>
  )
}
