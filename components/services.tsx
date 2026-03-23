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
    <section id="servicos" className="py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="text-xl md:text-2xl font-serif font-bold mb-1.5 text-white">
            Tratamentos <span style={{ color: '#D4A574' }}>Capilares</span>
          </h2>
          <p className="text-sm text-gray-400">
            Cuidados completos para saúde e beleza dos seus cabelos.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group text-center p-3 rounded-xl bg-gradient-to-b from-[#D4A574]/5 to-transparent border border-[#D4A574]/10 hover:border-[#D4A574]/30 transition-all duration-300"
            >
              <div className="w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform" style={{ backgroundColor: 'rgba(212, 165, 116, 0.15)' }}>
                <service.icon className="w-5 h-5" style={{ color: '#D4A574' }} />
              </div>
              <h3 className="text-xs font-semibold mb-0.5 text-white group-hover:text-[#D4A574] transition-colors">
                {service.title}
              </h3>
              <p className="text-[10px] text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
