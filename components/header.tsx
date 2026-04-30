"use client"

import Link from "next/link"
import { useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Главная" },
    { href: "/schedule", label: "Расписание" },
    { href: "/menu", label: "Меню столовой" },
    { href: "/news", label: "Новости" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#003C6C] text-white font-bold text-lg">
              15
            </div>
            <div className="hidden md:block">
              <div className="text-sm font-bold leading-tight">Школа №15</div>
              <div className="text-xs text-muted-foreground">им. А. К. Назадзе</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Переключить тему"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Link href="/login" className="hidden md:block">
              <Button variant="outline" size="sm">
                Войти
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Меню"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-border py-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/login"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Войти
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
