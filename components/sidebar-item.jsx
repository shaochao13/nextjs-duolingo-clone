"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"

const SideBarItem = ({ label, iconSrc, href }) => {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <Button
      variant={active ? "sidebarOutline" : "sidebar"}
      className="h-[52px] justify-start uppercase"
      asChild
    >
      <Link href={href}>
        <Image
          src={iconSrc}
          alt={label}
          className="mr-5"
          height={32}
          width={32}
        />
        {label}
      </Link>
    </Button>
  )
}

export default SideBarItem
