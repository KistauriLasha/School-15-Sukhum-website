import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee, Sandwich, Soup, Dessert, Beef, Salad } from "lucide-react"

interface MenuItem {
  name: string
  price: number
  category: string
  icon: typeof Coffee
}

const menuItems: MenuItem[] = [
  // Горячие блюда
  { name: "Борщ с мясом", price: 85, category: "Первые блюда", icon: Soup },
  { name: "Суп куриный с лапшой", price: 75, category: "Первые блюда", icon: Soup },
  { name: "Суп гороховый", price: 70, category: "Первые блюда", icon: Soup },
  { name: "Солянка", price: 95, category: "Первые блюда", icon: Soup },

  // Вторые блюда
  { name: "Котлета с пюре", price: 120, category: "Вторые блюда", icon: Beef },
  { name: "Плов с курицей", price: 110, category: "Вторые блюда", icon: Beef },
  { name: "Гуляш с гречкой", price: 125, category: "Вторые блюда", icon: Beef },
  { name: "Рыба запеченная с рисом", price: 130, category: "Вторые блюда", icon: Beef },
  { name: "Макароны с сосисками", price: 95, category: "Вторые блюда", icon: Beef },
  { name: "Тефтели в томатном соусе", price: 115, category: "Вторые блюда", icon: Beef },

  // Салаты
  { name: "Салат овощной", price: 50, category: "Салаты", icon: Salad },
  { name: "Салат «Витаминный»", price: 60, category: "Салаты", icon: Salad },
  { name: "Салат из свеклы", price: 45, category: "Салаты", icon: Salad },
  { name: "Салат «Греческий»", price: 75, category: "Салаты", icon: Salad },

  // Выпечка
  { name: "Пирожок с мясом", price: 40, category: "Выпечка", icon: Sandwich },
  { name: "Пирожок с капустой", price: 35, category: "Выпечка", icon: Sandwich },
  { name: "Булочка с маком", price: 30, category: "Выпечка", icon: Sandwich },
  { name: "Ватрушка с творогом", price: 45, category: "Выпечка", icon: Sandwich },
  { name: "Пицца школьная", price: 65, category: "Выпечка", icon: Sandwich },

  // Напитки и десерты
  { name: "Чай", price: 15, category: "Напитки и десерты", icon: Coffee },
  { name: "Какао", price: 35, category: "Напитки и десерты", icon: Coffee },
  { name: "Компот", price: 20, category: "Напитки и десерты", icon: Coffee },
  { name: "Сок", price: 40, category: "Напитки и десерты", icon: Coffee },
  { name: "Йогурт", price: 50, category: "Напитки и десерты", icon: Dessert },
  { name: "Фрукты (яблоко/банан)", price: 35, category: "Напитки и десерты", icon: Dessert },
  { name: "Печенье", price: 25, category: "Напитки и десерты", icon: Dessert },
]

const categories = ["Первые блюда", "Вторые блюда", "Салаты", "Выпечка", "Напитки и десерты"]

export function MenuList() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <Card className="bg-accent/10 border-accent/20">
        <CardContent className="p-6">
          <p className="text-center text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Время работы столовой:</strong> 08:00 - 15:00 (Понедельник - Пятница)
            <br />
            <strong className="text-foreground">Большая перемена:</strong> 10:10 - 10:25 и 11:10 - 11:30
          </p>
        </CardContent>
      </Card>

      {categories.map((category) => {
        const items = menuItems.filter((item) => item.category === category)
        return (
          <Card key={category}>
            <CardHeader>
              <CardTitle className="text-2xl">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {items.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className="rounded-md bg-primary/10 p-2 shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{item.name}</span>
                      </div>
                      <Badge variant="secondary" className="shrink-0 text-base font-bold px-3 py-1">
                        {item.price} ₽
                      </Badge>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        )
      })}

      <Card className="bg-muted/50">
        <CardContent className="p-6">
          <h3 className="font-bold mb-3 text-lg">Комплексные обеды</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>• Первое + Второе + Салат + Компот</span>
              <strong className="text-foreground">250 ₽</strong>
            </div>
            <div className="flex justify-between">
              <span>• Второе + Салат + Напиток</span>
              <strong className="text-foreground">180 ₽</strong>
            </div>
            <div className="flex justify-between">
              <span>• Завтрак школьника (до 10:00)</span>
              <strong className="text-foreground">120 ₽</strong>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
