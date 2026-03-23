"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, MessageCircle, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"

const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#exclusividades", label: "Exclusividades" },
  { href: "#grupo-vip", label: "Grupo VIP" },
  { href: "#localizacao", label: "Localização" },
]

const whatsappLink = "https://wa.me/5511959866634?text=Olá,%20vim%20pelo%20site,%20gostaria%20de%20fazer%20um%20agendamento…"
const grupoVipLink = "https://chat.whatsapp.com/HWT0IbtObLVHnnRb3F8Ygw"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-border/50"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="#inicio" className="flex-shrink-0">
            <Image
              src="/images/logo-horizontal-lais-alves.png"
              alt="Laís Alves Studio e Beleza"
              width={160}
              height={50}
              className="h-10 md:h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-1.5" />
                Agendar
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href={grupoVipLink} target="_blank" rel="noopener noreferrer">
                <Crown className="w-4 h-4 mr-1.5" />
                Grupo VIP
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-black border-border" style={{ backgroundColor: '#000000' }}>
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Image
                    src="/images/logo-horizontal-lais-alves.png"
                    alt="Laís Alves Studio e Beleza"
                    width={140}
                    height={45}
                    className="h-9 w-auto"
                  />
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Menu de navegação do site
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-3 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border/30"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                  >
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Agendar pelo WhatsApp
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
                  >
                    <a href={grupoVipLink} target="_blank" rel="noopener noreferrer">
                      <Crown className="w-4 h-4 mr-2" />
                      Entrar Grupo VIP
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
