"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ButtonHTMLAttributes } from "react"
import { CirclePlus } from "lucide-react"

type Props = {
  title: string,
  className?: string,
  onClick?: () => void,
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined,
} & ButtonHTMLAttributes<HTMLButtonElement>

export function CreateButton(
  { title, variant, onClick, className, ...props }: Props
) {

  return (
    <Button
      variant={variant}
      className={className}
      onClick={onClick}
    >
      <CirclePlus />
      {title}
    </Button>
  )
}