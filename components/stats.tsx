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
      icon: Trophy,
      value: "10+",
      label: "Победителей и призёров олимпиад",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-card border border-border/50 rounded-lg p-8 text-center shadow-sm transition-all duration-300 w-full max-w-[280px]"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="mb-1 text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground text-balance">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
