"use client"

import { Sparkles, Star, Heart, CheckCircle } from "lucide-react"

export function Exclusividades() {
  return (
    <section id="exclusividades" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-card via-card to-primary/5 rounded-3xl border border-primary/20 p-8 md:p-12 relative overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Corner decorations */}
            <div className="absolute top-4 right-4">
              <Star className="w-6 h-6 text-primary/30" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Sparkles className="w-6 h-6 text-primary/30" />
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                  <Heart className="w-12 h-12 md:w-16 md:h-16 text-primary" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                  Meu Método de{" "}
                  <span className="text-primary">Terapia Capilar</span>
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Combinando cuidados específicos para o couro cabeludo e tratamentos profundos para os fios, meu método de terapia capilar promove a saúde e a beleza dos cabelos.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Cada sessão é personalizada para atender às necessidades individuais, garantindo resultados visíveis e duradouros.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Cuidados personalizados</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Resultados duradouros</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Saúde capilar</span>
                  </div>
                </div>
                
                <p className="mt-6 text-lg font-medium text-primary">
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
