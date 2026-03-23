"use client"

import { Heart, CheckCircle, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const whatsappTerapiaLink = "https://wa.me/5511959866634?text=Olá,%20vim%20pelo%20site,%20gostaria%20de%20conhecer%20a%20Terapia%20Capilar…"

export function Exclusividades() {
  return (
    <section id="exclusividades" className="py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-card via-card to-primary/5 rounded-2xl border border-primary/20 p-5 md:p-6">
            <div className="flex flex-col md:flex-row gap-5 items-center">
              {/* Icon with gold glow */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-18 md:h-18 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 animate-gold-glow">
                  <Heart className="w-8 h-8 md:w-9 md:h-9" style={{ color: '#D4A574' }} />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-lg md:text-xl lg:text-2xl font-serif font-bold mb-2 text-white">
                  Meu Método de{" "}
                  <span style={{ color: '#D4A574' }}>Terapia Capilar</span>
                </h2>
                
                <p className="text-sm text-gray-300 leading-relaxed mb-3">
                  Combinando cuidados específicos para o couro cabeludo e tratamentos profundos para os fios, meu método de terapia capilar promove a saúde e a beleza dos cabelos. Cada sessão é personalizada para atender às necessidades individuais.
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-3">
                  <div className="flex items-center gap-1.5 text-xs">
                    <CheckCircle className="w-3.5 h-3.5" style={{ color: '#D4A574' }} />
                    <span className="text-gray-200">Cuidados personalizados</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <CheckCircle className="w-3.5 h-3.5" style={{ color: '#D4A574' }} />
                    <span className="text-gray-200">Resultados duradouros</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <CheckCircle className="w-3.5 h-3.5" style={{ color: '#D4A574' }} />
                    <span className="text-gray-200">Saúde capilar</span>
                  </div>
                </div>
                
                <p className="text-sm font-medium mb-3" style={{ color: '#D4A574' }}>
                  Venha transformar seus cabelos e cuide da sua autoestima!
                </p>
                
                <Button
                  asChild
                  size="default"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
                  style={{ backgroundColor: '#D4A574', color: '#000000' }}
                >
                  <a href={whatsappTerapiaLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Conhecer Terapia Capilar
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
