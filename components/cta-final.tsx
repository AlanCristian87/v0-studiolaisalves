"use client"

import { MessageCircle, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"

const whatsappLink = "https://wa.me/5511959866634?text=Olá,%20vim%20pelo%20site,%20gostaria%20de%20fazer%20um%20agendamento…"
const grupoVipLink = "https://chat.whatsapp.com/HWT0IbtObLVHnnRb3F8Ygw"

export function CtaFinal() {
  return (
    <section className="py-10 md:py-12" style={{ background: 'linear-gradient(to bottom, transparent, rgba(212, 165, 116, 0.05), transparent)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-white">
            Agende seu{" "}
            <span style={{ color: '#D4A574' }}>atendimento</span>{" "}
            agora
          </h2>
          
          <p className="text-sm text-gray-400">
            Transforme seus cabelos com cuidado profissional. Entre em contato e agende sua visita.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1">
            <Button
              asChild
              size="lg"
              className="text-black"
              style={{ backgroundColor: '#D4A574' }}
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
              className="hover:text-black"
              style={{ borderColor: '#D4A574', color: '#D4A574' }}
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
