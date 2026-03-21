"use client"

import { 
  Sparkles, 
  CalendarDays, 
  Wind, 
  Droplets, 
  Apple, 
  Hammer, 
  Heart 
} from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Alisamento Capilar",
    description: "Fios lisos, alinhados e com brilho intenso.",
  },
  {
    icon: CalendarDays,
    title: "Cronograma Capilar",
    description: "Planejamento personalizado de cuidados.",
  },
  {
    icon: Wind,
    title: "Escova",
    description: "Modelagem com volume e movimento natural.",
  },
  {
    icon: Droplets,
    title: "Hidratação",
    description: "Nutrientes essenciais para fios macios.",
  },
  {
    icon: Apple,
    title: "Nutrição",
    description: "Reposição de lipídios e proteínas.",
  },
  {
    icon: Hammer,
    title: "Reconstrução",
    description: "Recuperação da fibra capilar danificada.",
  },
  {
    icon: Heart,
    title: "Terapia Capilar",
    description: "Tratamento completo para saúde total.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">
            Tratamentos <span className="text-primary">Capilares</span>
          </h2>
          <p className="text-muted-foreground">
            Cuidados completos para saúde e beleza dos seus cabelos.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group text-center p-4 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold mb-1 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
