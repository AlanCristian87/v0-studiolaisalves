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
    <section id="grupo-vip" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image - Stories style frame */}
          <div className="flex justify-center animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="relative">
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-[#6B0F1A] to-primary p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/20">
                <Image
                  src="/images/grupo-vip-lais-alves.png"
                  alt="Grupo VIP Laís Alves"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Decorative badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                VIP
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
              Quer ter um{" "}
              <span className="text-primary">Cabelo de Salão</span>{" "}
              todos os dias?
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Muitas vezes o segredo não está apenas no produto, mas no cuidado certo!
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Eu, como cabeleireira, decidi criar um <strong className="text-foreground">Grupo VIP</strong> para ajudar vocês a manterem a saúde dos fios entre uma visita e outra ao salão.
            </p>
            
            <div className="space-y-3 text-left">
              <p className="font-medium text-foreground">Acompanhe no grupo VIP:</p>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-in fade-in slide-in-from-left-4 duration-500"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <p className="text-lg font-medium text-foreground pt-4">
              Quer o acompanhamento de uma profissional de perto?
            </p>
            
            <div className="space-y-3">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 w-full sm:w-auto"
              >
                <a href={grupoVipLink} target="_blank" rel="noopener noreferrer">
                  <Scissors className="w-5 h-5 mr-2" />
                  Clique aqui e entre no Grupo VIP
                </a>
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Dicas e promoções para cuidados com seu cabelo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
