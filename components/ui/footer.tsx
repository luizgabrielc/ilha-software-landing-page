import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Footer = () => {
  return (
    <div className="z-50 bg-background flex items-center w-full p-6 border-t-2 shadow-sm mt-12">
      <div>LOGO</div>
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/">Política de privacidade</Link>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/">Termos e condições</Link>
        </Button>
      </div>
    </div>
  )
}