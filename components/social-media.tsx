"use client"

import { Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/lais.alveshair1988?igsh=Yjl6am96b3ozanFl",
    color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/share/18QvY2vvMY/?mibextid=wwXIfr",
    color: "hover:bg-[#1877F2]",
  },
]

export function SocialMedia() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Acompanhe nossas{" "}
            <span className="text-primary">redes sociais</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Veja transformações, dicas e novidades do salão.
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                asChild
                size="lg"
                variant="outline"
                className={`border-border bg-card hover:border-transparent hover:text-white transition-all duration-300 px-8 py-6 ${social.color}`}
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <social.icon className="w-6 h-6" />
                  <span className="text-lg">{social.name}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
