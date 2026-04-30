import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Trophy, Newspaper, type LucideIcon } from "lucide-react"

interface NewsItem {
  id: number
  title: string
  date: string
  category: "Достижения" | "Мероприятия" | "Объявления" | "Спорт"
  description: string
  content?: React.ReactNode
  image?: string
  icon: LucideIcon
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Международная онлайн-олимпиада по информатике",
    date: "24.04.2026",
    category: "Достижения",
    description:
      "Ученики 10-ых и 11-ых классов нашей школы приняли участие в международной онлайн-олимпиаде по информатике от университета АГПУ. Это мероприятие позволило ребятам продемонстрировать свои навыки программирования и алгоритмического мышления на международном уровне.",
    icon: Trophy,
  },
  {
    id: 2,
    title: "Наши победители и призёры Республиканской олимпиады",
    date: "08.04.2026",
    category: "Достижения",
    description:
      "Поздравляем учеников нашей школы с выдающимися результатами на Республиканской олимпиаде школьников 2026 года в г. Сухум!",
    content: (
      <div className="space-y-4 mt-6">
        <div className="grid gap-2">
          <span className="text-base font-bold">Победители:</span>
          <ul className="text-muted-foreground list-disc pl-5 space-y-1">
            <li>Тевренчиди Николь Георгиевна (9 «Б») — Русский язык и Математика</li>
            <li>Допуа Баграт Саидович (11 «А») — Абхазский язык</li>
          </ul>
        </div>
        <div className="grid gap-2">
          <span className="text-base font-bold">Призёры:</span>
          <ul className="text-muted-foreground list-disc pl-5 space-y-1">
            <li>Кистаури Лаша Вячеславович (10 «Б») — Математика</li>
            <li>Халиф Кира Львовна (10 «А») — Математика</li>
            <li>Калинин Иван Вячеславович (11 «А») — Химия</li>
          </ul>
        </div>
        <div className="mt-8 pt-6 border-t border-primary/10">
          <p className="text-primary text-xl font-black text-center uppercase tracking-widest">ПОЗДРАВЛЯЕМ ВСЕХ!!!</p>
        </div>
      </div>
    ),
    icon: Trophy,
  },
  {
    id: 3,
    title: "Неделя английского языка",
    date: "27.02.2026",
    category: "Мероприятия",
    description:
      "Наша тематическая неделя подошла к концу, оставив массу ярких впечатлений и новых знаний. Ребята проявили креативность в конкурсах, блеснули знаниями на викторинах и попробовали себя в роли ораторов. Благодарим всех за энтузиазм и погружение в атмосферу англоязычной культуры. Keep calm and learn English!",
    icon: Newspaper,
  },
]

export function NewsList() {
  const getCategoryColor = (category: NewsItem["category"]) => {
    switch (category) {
      case "Достижения":
        return "bg-accent/10 text-accent border-accent/20"
      case "Мероприятия":
        return "bg-primary/10 text-primary border-primary/20"
      case "Спорт":
        return "bg-chart-1/10 text-chart-1 border-chart-1/20"
      case "Объявления":
        return "bg-chart-2/10 text-chart-2 border-chart-2/20"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid gap-8">
        {newsItems.map((news) => {
          const Icon = news.icon
          return (
            <Card key={news.id} className="overflow-hidden shadow-sm border-border/50">
              <div className={news.image ? "grid md:grid-cols-[320px_1fr] gap-0" : ""}>
                {news.image && (
                  <div className="relative aspect-video md:aspect-auto bg-muted">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <CardHeader className="p-8">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <Badge variant="secondary" className={`${getCategoryColor(news.category)} px-3 py-1 text-xs font-bold uppercase tracking-wider`}>
                      {news.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                      <Calendar className="h-4 w-4" />
                      <span>{news.date}</span>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start mb-4">
                    <div className="rounded-xl bg-primary/10 p-2.5 shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold leading-tight text-balance tracking-tight">{news.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground leading-relaxed text-lg">{news.description}</p>
                    {news.content}
                  </CardContent>
                </CardHeader>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
