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
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Sparkles,
    title: "Alisamento Capilar",
    description: "Fios lisos, alinhados e com brilho intenso usando técnicas modernas e seguras.",
  },
  {
    icon: CalendarDays,
    title: "Cronograma Capilar",
    description: "Planejamento personalizado de cuidados para manter seus cabelos sempre saudáveis.",
  },
  {
    icon: Wind,
    title: "Escova",
    description: "Modelagem perfeita com técnicas que garantem volume e movimento natural.",
  },
  {
    icon: Droplets,
    title: "Hidratação",
    description: "Reposição de água e nutrientes essenciais para fios macios e com vida.",
  },
  {
    icon: Apple,
    title: "Nutrição",
    description: "Tratamento intensivo para devolver lipídios e proteínas aos cabelos.",
  },
  {
    icon: Hammer,
    title: "Reconstrução",
    description: "Recuperação profunda da fibra capilar para cabelos danificados.",
  },
  {
    icon: Heart,
    title: "Terapia Capilar",
    description: "Tratamento completo do couro cabeludo e fios para saúde total.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Tratamentos <span className="text-primary">Capilares</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cuidados completos para saúde e beleza dos seus cabelos.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
