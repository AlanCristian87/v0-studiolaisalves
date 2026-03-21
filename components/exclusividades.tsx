"use client"

import { Heart, CheckCircle } from "lucide-react"

export function Exclusividades() {
  return (
    <section id="exclusividades" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-card via-card to-primary/5 rounded-2xl border border-primary/20 p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-serif font-bold mb-3">
                  Meu Método de{" "}
                  <span className="text-primary">Terapia Capilar</span>
                </h2>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Combinando cuidados específicos para o couro cabeludo e tratamentos profundos para os fios, meu método de terapia capilar promove a saúde e a beleza dos cabelos. Cada sessão é personalizada para atender às necessidades individuais.
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <div className="flex items-center gap-1.5 text-xs">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Cuidados personalizados</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Resultados duradouros</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Saúde capilar</span>
                  </div>
                </div>
                
                <p className="mt-4 text-sm font-medium text-primary">
                  Venha transformar seus cabelos e cuide da sua autoestima!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
