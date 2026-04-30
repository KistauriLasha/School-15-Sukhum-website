import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Newspaper } from "lucide-react"
import { NewsList } from "@/components/news-list"

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Newspaper className="h-8 w-8" />
              <h1 className="text-3xl md:text-4xl font-bold">Новости школы</h1>
            </div>
            <p className="text-center text-primary-foreground/90 max-w-2xl mx-auto">
              Последние события, достижения учеников и важные мероприятия нашей школы
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <NewsList />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
