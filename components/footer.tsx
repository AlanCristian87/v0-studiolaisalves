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
    <footer className="border-t py-6" style={{ backgroundColor: '#0a0a0a', borderColor: '#2a2a2a' }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-5 items-start">
          {/* Logo and info */}
          <div className="space-y-2">
            <Image
              src="/images/logo-horizontal-lais-alves.png"
              alt="Laís Alves Studio e Beleza"
              width={140}
              height={45}
              className="h-9 w-auto"
            />
            <p className="text-sm font-medium" style={{ color: '#D4A574' }}>Especialista em Cabelos</p>
            <div className="flex items-start gap-2 text-xs text-gray-400">
              <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: '#D4A574' }} />
              <address className="not-italic">
                Av. Jaime Torres, 138 - Jardim Popular, São Paulo - SP
              </address>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="space-y-2">
            <h3 className="font-semibold text-sm text-white">Links Rápidos</h3>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-[#D4A574] transition-colors text-xs"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Social links */}
          <div className="space-y-2">
            <h3 className="font-semibold text-sm text-white">Redes Sociais</h3>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-black transition-colors"
                  style={{ backgroundColor: '#1a1a1a' }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#D4A574'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-5 pt-3 border-t text-center" style={{ borderColor: '#2a2a2a' }}>
          <p className="text-xs text-gray-500">
            © 2026 Laís Alves Studio e Beleza. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
