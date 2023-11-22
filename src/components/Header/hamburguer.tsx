"use client"
import useScrollLock from "@/hooks/useScrollLock"
import React, { useState } from "react"
import { List } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"
import { shorts } from "@/mock/shorts"

export default function Hamburguer() {
  const [isOpen, isClosed] = useState(false)
  useScrollLock(isOpen)

  return (
    <>
      <div
        className={`z-20 flex flex-col gap-1 rounded-full border border-primary p-1 max-sm:visible md:hidden
        ${isOpen && "bg-primary"}
        `}
        onClick={() => isClosed(!isOpen)}
      >
        <List
          className={`h-10 w-10 duration-300 ease-linear ${
            isOpen ? "text-white" : "text-primary"
          }`}
        />
      </div>
      {isOpen && (
        <div className="fixed left-0 top-0 z-10 flex h-screen w-screen flex-col items-center justify-center gap-5 bg-[#00398D] duration-300 ease-linear">
          {shorts.map((short, indx) => (
            <Link
              key={indx}
              href={short.link}
              className="text-2xl text-white duration-300 ease-in-out hover:text-[#00000050]"
            >
              <span>{short.label}</span>
            </Link>
          ))}
          <button className="text-md rounded-xl border px-8 py-3 font-semibold text-white shadow-md duration-300 ease-in-out hover:opacity-50 ">
            <span>Entre em contato</span>
          </button>
        </div>
      )}
    </>
  )
}
