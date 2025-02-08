import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { SideBar } from "./sidebar";
  

export const MobileSideBar = () => {
  return (
    <Sheet>
  <SheetTrigger className="md:hidden pr-4 hover:opacity-75 tranition">
    <Menu />
  </SheetTrigger>
  <SheetContent className="bg-white p-0" side="left">
    <SideBar />
  </SheetContent>
</Sheet>

  )
}
