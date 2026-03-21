"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, MapPin } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#grupo-vip", label: "Grupo VIP" },
  { href: "#localizacao", label: "Localização" },
]

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/lais.alveshair1988?igsh=Yjl6am96b3ozanFl",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/share/18QvY2vvMY/?mibextid=wwXIfr",
  },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {/* Logo and info */}
          <div className="space-y-3">
            <Image
              src="/images/logo-horizontal-lais-alves.png"
              alt="Laís Alves Studio e Beleza"
              width={150}
              height={50}
              className="h-10 w-auto"
            />
            <p className="text-primary text-sm font-medium">Especialista em Cabelos</p>
            <div className="flex items-start gap-2 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3 mt-0.5 text-primary flex-shrink-0" />
              <address className="not-italic">
                Av. Jaime Torres, 138 - Jardim Popular, São Paulo - SP
              </address>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-foreground">Links Rápidos</h3>
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-xs"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Social links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-foreground">Redes Sociais</h3>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Laís Alves Studio e Beleza. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
