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
    <section className="py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold">
            Acompanhe nossas{" "}
            <span className="text-primary">redes sociais</span>
          </h2>
          
          <p className="text-sm text-muted-foreground">
            Veja transformações, dicas e novidades do salão.
          </p>
          
          <div className="flex justify-center gap-3 flex-wrap pt-2">
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                asChild
                variant="outline"
                className={`border-border bg-card hover:border-transparent hover:text-white transition-all duration-300 ${social.color}`}
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <social.icon className="w-5 h-5" />
                  <span>{social.name}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
