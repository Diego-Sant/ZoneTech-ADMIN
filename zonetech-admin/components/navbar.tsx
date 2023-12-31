// Componente do Servidor

import prismadb from "@/lib/prismadb";

import { UserButton, auth } from "@clerk/nextjs"

import { MainNav } from "./mainNav"
import StoreSwitcher from "./storeSwitcher"
import { ModeToggle } from "./themeToggles";

import { redirect } from "next/navigation";

const Navbar = async () => {
  const {userId} = auth();

  if (!userId) {
    redirect("/entrar");
  }

  // Procura a loja comparando com o id que está na url
  const stores = await prismadb.store.findMany({
    where: {
      userId
    }
  });

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6" />
        <div className="flex items-center ml-auto space-x-4">
          <ModeToggle />
          <UserButton afterSignOutUrl="/" /> {/* Feito isso pois normalmente quando o usuário desloga no clerk ele manda para a página deles */}
        </div>
      </div>
    </div>
  )
}

export default Navbar