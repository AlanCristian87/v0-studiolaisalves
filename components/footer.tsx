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
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo and info */}
          <div className="space-y-4">
            <Image
              src="/images/logo-horizontal-lais-alves.png"
              alt="Laís Alves Studio e Beleza"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
            <p className="text-primary font-medium">Especialista em Cabelos</p>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
              <address className="not-italic">
                Av. Jaime Torres, 138<br />
                Jardim Popular<br />
                São Paulo - SP
              </address>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Links Rápidos</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Social links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Redes Sociais</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Laís Alves Studio e Beleza. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
