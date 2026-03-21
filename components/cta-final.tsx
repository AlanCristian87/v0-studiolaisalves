"use client"

import { MessageCircle, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"

const whatsappLink = "https://wa.me/5511959866634?text=Olá,%20vim%20pelo%20site,%20gostaria%20de%20fazer%20um%20agendamento…"
const grupoVipLink = "https://chat.whatsapp.com/HWT0IbtObLVHnnRb3F8Ygw"

export function CtaFinal() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold">
            Agende seu{" "}
            <span className="text-primary">atendimento</span>{" "}
            agora
          </h2>
          
          <p className="text-sm text-muted-foreground">
            Transforme seus cabelos com cuidado profissional. Entre em contato e agende sua visita.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
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
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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
