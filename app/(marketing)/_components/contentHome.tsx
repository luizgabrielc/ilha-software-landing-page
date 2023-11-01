"use client"

import { Footer } from "@/components/ui/footer"
import { PrincipalSection } from "./sectionPrincipal"
import { Services } from "./services"

export const Content = () => {
    return (
        <div className="h-screen w-screen mt-[72px]">
            <PrincipalSection />
            <Services />
            <Footer />
        </div>
    )
} 