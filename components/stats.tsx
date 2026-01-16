import { Users, UserCheck, Trophy, Building2 } from "lucide-react"

export function Stats() {
  const stats = [
    {
      icon: UserCheck,
      value: "50+",
      label: "Квалифицированных учителей",
    },
    {
      icon: Users,
      value: "800+",
      label: "Учеников",
    },
    {
      icon: Building2,
      value: "3",
      label: "Этажа современного здания",
    },
    {
      icon: Trophy,
      value: "15+",
      label: "Наград и достижений",
    },
  ]

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="mb-2 text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground text-balance">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
