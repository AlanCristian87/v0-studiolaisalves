"use client"

import Image from "next/image"
import { MessageCircle, Crown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const whatsappLink = "https://wa.me/5511959866634?text=Olá,%20vim%20pelo%20site,%20gostaria%20de%20fazer%20um%20agendamento…"
const whatsappTerapiaLink = "https://wa.me/5511959866634?text=Olá,%20vim%20pelo%20site,%20gostaria%20de%20conhecer%20a%20Terapia%20Capilar…"
const grupoVipLink = "https://chat.whatsapp.com/HWT0IbtObLVHnnRb3F8Ygw"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] flex items-center justify-center pt-20 md:pt-28"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/salon-background.jpg"
          alt="Salão de beleza"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.75)' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 animate-gold-shimmer">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Especialista em Cabelos</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight text-balance text-white">
            Cuide da saúde dos seus{" "}
            <span style={{ color: '#D4A574' }}>cabelos</span> com uma especialista
          </h1>
          
          <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            Tratamentos personalizados para restaurar, hidratar e transformar seus fios com cuidado profissional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1">
            <Button
              asChild
              size="lg"
              className="text-black transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
              style={{ backgroundColor: '#D4A574' }}
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Agendar pelo WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
              style={{ borderColor: '#D4A574', color: '#D4A574', backgroundColor: 'transparent' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(212, 165, 116, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <a href={grupoVipLink} target="_blank" rel="noopener noreferrer">
                <Crown className="w-5 h-5 mr-2" />
                Entrar Grupo VIP
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
