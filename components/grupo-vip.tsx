"use client"

import Image from "next/image"
import { Check, Scissors } from "lucide-react"
import { Button } from "@/components/ui/button"

const grupoVipLink = "https://chat.whatsapp.com/HWT0IbtObLVHnnRb3F8Ygw"

const benefits = [
  "Como manter seu alisamento impecável por mais tempo",
  "Inspirações de cortes e cores tendência 2026",
  "Dicas de tratamentos para cada tipo de dano",
  "Avisos de horários disponíveis e promoções exclusivas",
]

export function GrupoVip() {
  return (
    <section id="grupo-vip" className="py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 items-center max-w-4xl mx-auto">
          {/* Image with animated gradient border */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Animated gradient border */}
              <div className="absolute -inset-1 rounded-full animate-gradient-border p-[3px]">
                <div className="w-full h-full rounded-full bg-black" />
              </div>
              {/* Image container */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-transparent">
                <div className="absolute -inset-[3px] rounded-full animate-gradient-border" />
                <div className="absolute inset-0 rounded-full bg-black" />
                <Image
                  src="/images/grupo-vip-lalves.jpg"
                  alt="Grupo VIP Laís Alves"
                  fill
                  className="object-cover rounded-full relative z-10"
                />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="text-center lg:text-left space-y-3">
            <h2 className="text-xl md:text-2xl font-serif font-bold leading-tight text-white">
              Quer ter um{" "}
              <span style={{ color: '#D4A574' }}>Cabelo de Salão</span>{" "}
              todos os dias?
            </h2>
            
            <p className="text-sm text-gray-300 leading-relaxed">
              Muitas vezes o segredo não está apenas no produto, mas no cuidado certo! Eu, como cabeleireira, decidi criar um <strong className="text-white">Grupo VIP</strong> para ajudar vocês a manterem a saúde dos fios entre uma visita e outra ao salão.
            </p>
            
            <div className="space-y-1.5 text-left">
              <p className="font-medium text-white text-sm">Acompanhe no grupo VIP:</p>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2"
                >
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#D4A574' }} />
                  <span className="text-sm text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            
            <p className="text-sm font-medium text-white pt-1">
              Quer o acompanhamento de uma profissional de perto?
            </p>
            
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
              style={{ backgroundColor: '#D4A574', color: '#000000' }}
            >
              <a href={grupoVipLink} target="_blank" rel="noopener noreferrer">
                <Scissors className="w-4 h-4 mr-2" />
                Clique aqui e entre no Grupo VIP
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
