import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary/95 text-primary-foreground">
      <div className="absolute inset-0 bg-[url('/---------------.jpg')] opacity-15 bg-cover bg-center" />
      <div className="container relative mx-auto px-4 py-24 md:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl tracking-tight text-balance">
            Школа №15 имени А. К. Назадзе
          </h1>
          <p className="mb-8 text-lg md:text-2xl text-primary-foreground/90 leading-relaxed text-balance max-w-3xl mx-auto">
            Мы рады приветствовать вас на сайте Средней школы №15 имени Александры Константиновны Назадзе. Наша школа – это не просто образовательное учреждение, это дружная семья с богатой историей.
          </p>
        </div>
      </div>
    </section>
  )
}
