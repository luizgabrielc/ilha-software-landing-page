"use client"

import { useScrollTop } from "@/hooks/use-scroll-top"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

export const Navbar = () => {
    const scrolled = useScrollTop()
    return (
        <div className={cn(
            "z-50 bg-background dark:bg-[#181717] top-0 flex items-center w-full p-6",
            scrolled && "border-b-2 shadow-sm"
        )}>
            <div className="flex gap-x-4">
                <div>LOGO</div>
                <h1 className="w-max">Ilha Software</h1>
            </div>
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-12">
                <div>Início</div>
                <div>Sobre Nós</div>
                <div>Serviços</div>
                <div>Contato</div>
            </div>
        </div>
    )
}