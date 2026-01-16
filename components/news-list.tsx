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

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Победа на республиканской олимпиаде по математике",
    date: "10 января 2026",
    category: "Достижения",
    description:
      "Ученики 11А класса Давид Гулия и Анна Квициния заняли первое и второе места на республиканской олимпиаде по математике. Это выдающийся результат, подтверждающий высокий уровень преподавания в нашей школе.",
    image: "/-----------------------.jpg",
    icon: Trophy,
  },
  {
    id: 2,
    title: "Новогодний концерт для учеников и родителей",
    date: "25 декабря 2025",
    category: "Мероприятия",
    description:
      "В актовом зале школы прошел традиционный новогодний концерт. Учащиеся всех классов подготовили праздничные номера: танцы, песни, театральные постановки. Мероприятие посетило более 500 человек.",
    image: "/----------------.jpg",
    icon: PartyPopper,
  },
  {
    id: 3,
    title: "Спортивная команда школы - чемпионы города по баскетболу",
    date: "15 декабря 2025",
    category: "Спорт",
    description:
      "Наша баскетбольная команда одержала уверенную победу в городском первенстве среди школьных команд. В финальной игре со счетом 78:65 была обыграна команда школы №8. Поздравляем ребят с заслуженной победой!",
    image: "/-----------------.jpg",
    icon: Award,
  },
  {
    id: 4,
    title: "День открытых дверей для будущих первоклассников",
    date: "5 декабря 2025",
    category: "Мероприятия",
    description:
      "Приглашаем родителей будущих первоклассников на День открытых дверей. Вы сможете познакомиться с учителями, посетить классы, узнать о программах обучения и задать интересующие вопросы. Запись по телефону администрации.",
    image: "/-----------------.jpg",
    icon: Users,
  },
  {
    id: 5,
    title: "Литературный конкурс «Моя Абхазия»",
    date: "1 декабря 2025",
    category: "Достижения",
    description:
      "Ученица 9Б класса Нана Ачба стала победительницей республиканского литературного конкурса со своим эссе «Моя Абхазия - земля души моей». Её работа была отмечена жюри за глубину мысли и литературное мастерство.",
    image: "/---------------.jpg",
    icon: BookOpen,
  },
  {
    id: 6,
    title: "Экскурсия в национальный музей Абхазии",
    date: "20 ноября 2025",
    category: "Мероприятия",
    description:
      "Учащиеся 7-8 классов посетили национальный музей Абхазии, где познакомились с богатой историей и культурой нашей страны. Экскурсия включала посещение археологической, этнографической и исторической экспозиций.",
    image: "/----------------------.jpg",
    icon: Users,
  },
  {
    id: 7,
    title: "Научная конференция школьников",
    date: "10 ноября 2025",
    category: "Достижения",
    description:
      "В школе прошла ежегодная научно-практическая конференция. Более 30 учеников представили свои исследовательские проекты по биологии, физике, истории и литературе. Лучшие работы будут представлены на республиканском уровне.",
    image: "/--------------------.jpg",
    icon: BookOpen,
  },
  {
    id: 8,
    title: "Осенний легкоатлетический кросс",
    date: "25 октября 2025",
    category: "Спорт",
    description:
      "Традиционный осенний кросс собрал более 200 участников из всех классов школы. Победители в разных возрастных категориях получили грамоты и медали. Особенно отличились ученики 10А класса, занявшие призовые места.",
    image: "/----------------------.jpg",
    icon: Award,
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
      <div className="grid gap-6">
        {newsItems.map((news) => {
          const Icon = news.icon
          return (
            <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-[300px_1fr] gap-6">
                <div className="relative aspect-video md:aspect-square bg-muted">
                  <img src={news.image || "/placeholder.svg"} alt={news.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader className="pb-0">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <Badge variant="outline" className={getCategoryColor(news.category)}>
                      {news.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{news.date}</span>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="rounded-lg bg-primary/10 p-2.5 shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 leading-tight text-balance">{news.title}</h3>
                      <CardContent className="p-0">
                        <p className="text-muted-foreground leading-relaxed">{news.description}</p>
                      </CardContent>
                    </div>
                  </div>
                </CardHeader>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
