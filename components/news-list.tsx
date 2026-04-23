import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Trophy, Users, BookOpen, Award, PartyPopper } from "lucide-react"

interface NewsItem {
  id: number
  title: string
  date: string
  category: "Достижения" | "Мероприятия" | "Объявления" | "Спорт"
  description: string
  image?: string
  icon: typeof Trophy
}

import { Trophy } from "lucide-react"

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Новость",
    date: "2024-07-29",
    category: "Объявления",
    description: "Описание новости",
    image: "/news-image.jpg",
    icon: Trophy,
  },
]

export function NewsList() {
  const getCategoryColor = (category: NewsItem["category"]) => {
    switch (category) {
      case "Достижения":
        return "bg-transparent text-foreground border-border"
      case "Мероприятия":
        return "bg-transparent text-foreground border-border"
      case "Спорт":
        return "bg-transparent text-foreground border-border"
      case "Объявления":
        return "bg-transparent text-foreground border-border"
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
            <Card key={news.id} className="overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border-border/50">
              <div className="grid md:grid-cols-[320px_1fr] gap-0">
                <div className="relative aspect-video md:aspect-auto bg-muted">
                  <img src={news.image || "/placeholder.svg"} alt={news.title} className="w-full h-full object-cover" />
                </div>
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
                    <div className="rounded-md bg-primary/10 p-2.5 shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold leading-tight text-balance tracking-tight">{news.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground leading-relaxed text-lg">{news.description}</p>
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
