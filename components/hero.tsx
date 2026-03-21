"use client"

import Image from "next/image"
import { MessageCircle, Crown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const whatsappLink = "https://wa.me/5511959866634?text=Olá,%20vim%20pelo%20site,%20gostaria%20de%20fazer%20um%20agendamento…"
const grupoVipLink = "https://chat.whatsapp.com/HWT0IbtObLVHnnRb3F8Ygw"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center justify-center pt-20"
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
        <div className="absolute inset-0 bg-black/75" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Especialista em Cabelos</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight text-balance">
            Cuide da saúde dos seus{" "}
            <span className="text-primary">cabelos</span> com uma especialista
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Tratamentos personalizados para restaurar, hidratar e transformar seus fios com cuidado profissional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
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
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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
