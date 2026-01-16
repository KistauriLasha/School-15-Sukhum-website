import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Video, Lock, AlertCircle } from "lucide-react"

export default function CamerasPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Video className="h-8 w-8" />
              <h1 className="text-3xl md:text-4xl font-bold">Система видеонаблюдения</h1>
            </div>
            <p className="text-center text-primary-foreground/90 max-w-2xl mx-auto">
              Безопасность наших учеников - наш главный приоритет
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="border-dashed">
                <CardContent className="p-12 text-center">
                  <div className="mb-6 inline-flex items-center justify-center rounded-full bg-muted p-6">
                    <Lock className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Раздел в разработке</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed max-w-md mx-auto">
                    Система видеонаблюдения находится на стадии внедрения. Доступ к камерам будет предоставлен только
                    авторизованным пользователям.
                  </p>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/10 border border-accent/20 text-left">
                    <AlertCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <strong className="text-foreground block mb-1">Информация для родителей:</strong>
                      После завершения настройки системы родители смогут получить ограниченный доступ к камерам в
                      общественных зонах школы через личный кабинет.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
