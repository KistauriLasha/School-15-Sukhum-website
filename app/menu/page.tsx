import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MenuList } from "@/components/menu-list"
import { UtensilsCrossed } from "lucide-react"

export default function MenuPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <UtensilsCrossed className="h-8 w-8" />
              <h1 className="text-3xl md:text-4xl font-bold">Меню школьной столовой</h1>
            </div>
            <p className="text-center text-primary-foreground/90 max-w-2xl mx-auto">
              Вкусное и полезное питание для наших учеников. Все блюда готовятся из свежих продуктов
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <MenuList />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
