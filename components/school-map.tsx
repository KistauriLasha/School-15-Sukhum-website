import { MapPin } from "lucide-react"

export function SchoolMap() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наше местоположение</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto flex items-center justify-center gap-2">
            <MapPin className="h-5 w-5 text-accent" />
            Сухум, ул. Аргун, 5
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg border border-border h-[450px] relative bg-muted">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=40.971980%2C43.015488&z=17&mode=search&ol=biz&oid=88296569640"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen={true}
            className="absolute inset-0"
            title="Яндекс Карта — Школа №15"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
