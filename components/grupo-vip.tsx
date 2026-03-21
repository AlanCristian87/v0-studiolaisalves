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
    <section id="grupo-vip" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-56 h-56 md:w-64 md:h-64">
              <Image
                src="/images/grupo-vip-lalves.jpg"
                alt="Grupo VIP Laís Alves"
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="text-center lg:text-left space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold leading-tight">
              Quer ter um{" "}
              <span className="text-primary">Cabelo de Salão</span>{" "}
              todos os dias?
            </h2>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              Muitas vezes o segredo não está apenas no produto, mas no cuidado certo! Eu, como cabeleireira, decidi criar um <strong className="text-foreground">Grupo VIP</strong> para ajudar vocês a manterem a saúde dos fios entre uma visita e outra ao salão.
            </p>
            
            <div className="space-y-2 text-left">
              <p className="font-medium text-foreground text-sm">Acompanhe no grupo VIP:</p>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2"
                >
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <p className="text-sm font-medium text-foreground pt-2">
              Quer o acompanhamento de uma profissional de perto?
            </p>
            
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
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
