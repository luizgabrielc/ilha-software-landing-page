import { Button } from "@/components/ui/button"

export const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#181717]">
      <div>LOGO</div>
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Política de privacidade
        </Button>
        <Button variant="ghost" size="sm">
          Termos e condições
        </Button>
      </div>
    </div>
  )
}