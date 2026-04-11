import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Newspaper, Calendar, Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-12">
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

        <section className="py-12">
          <div className="container mx-auto px-4 flex flex-col items-center gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow max-w-2xl w-full border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/20 p-3 shrink-0">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>08.04.2026</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Наши победители и призёры Республиканской олимпиады</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Поздравляем учеников нашей школы с выдающимися результатами на Республиканской олимпиаде школьников
                      2026 года в г. Сухум!
                    </p>
                    <div className="space-y-3">
                      <div className="grid gap-1">
                        <span className="text-sm font-semibold">Победители:</span>
                        <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                          <li>Тевренчиди Николь Георгиевна (9 «Б») — Русский язык и Математика</li>
                          <li>Допуа Баграт Саидович (11 «А») — Абхазский язык</li>
                        </ul>
                      </div>
                      <div className="grid gap-1">
                        <span className="text-sm font-semibold">Призёры:</span>
                        <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                          <li>Кистаури Лаша Вячеславович (10 «Б») — Математика</li>
                          <li>Халиф Кира Львовна (10 «А») — Математика</li>
                          <li>Калинин Иван Вячеславович (11 «А») — Химия</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-primary font-medium mt-4 text-center">ПОЗДРАВЛЯЕМ ВСЕХ!!!</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow max-w-2xl w-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 shrink-0">
                    <Newspaper className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>27.02.2026</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Неделя английского языка</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Наша тематическая неделя подошла к концу, оставив массу ярких впечатлений и новых знаний.
                      Ребята проявили креативность в конкурсах, блеснули знаниями на викторинах и попробовали себя в роли ораторов.
                      Благодарим всех за энтузиазм и погружение в атмосферу англоязычной культуры. Keep calm and learn English!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
