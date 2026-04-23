import { BookOpen, History, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Goals() {
  const goals = [
    {
      icon: BookOpen,
      text: "Дать прочные и актуальные знания, необходимые для успешного поступления в вузы и самореализации в современном мире.",
      title: "Качественное образование",
    },
    {
      icon: History,
      text: "Воспитать ответственных граждан, уважающих историю, культуру и традиции нашей страны.",
      title: "Патриотическое воспитание",
    },
    {
      icon: Lightbulb,
      text: "Раскрыть потенциал каждого ребёнка через индивидуальный подход, внеклассную деятельность и проектную работу.",
      title: "Развитие талантов",
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">НАША ЦЕЛЬ</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Создание комфортной и мотивирующей среды для всестороннего развития личности
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {goals.map((goal, index) => {
            const Icon = goal.icon
            return (
              <Card key={index} className="border-none shadow-none bg-muted/30">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-background p-4 shadow-sm">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{goal.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{goal.text}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
