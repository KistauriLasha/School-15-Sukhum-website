import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">В честь кого названа наша школа</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="mb-4">
                <strong className="text-foreground">Александр Константинович Назадзе</strong> — выдающийся абхазский
                просветитель, педагог и общественный деятель. Он посвятил свою жизнь развитию образования в Абхазии и
                воспитанию нескольких поколений учеников.
              </p>
              <p className="mb-4">
                Его педагогические принципы основывались на уважении к личности ученика, развитии критического мышления
                и стремлении к знаниям. Эти ценности продолжают жить в стенах нашей школы.
              </p>
              <p>
                Мы гордимся носить имя А. К. Назадзе и продолжаем его традиции качественного образования и воспитания
                достойных граждан.
              </p>
            </div>
          </div>
          <div className="relative">
            <Card className="overflow-hidden">
              <img src="/-------------------------------------.jpg" alt="А. К. Назадзе" className="w-full h-auto object-cover" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
