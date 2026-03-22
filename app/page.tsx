import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import { Goals } from "@/components/goals"
import { Facilities } from "@/components/facilities"
import { SchoolMap } from "@/components/school-map"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Goals />
        <Facilities />
        <SchoolMap />
      </main>
      <Footer />
    </div>
  )
}
