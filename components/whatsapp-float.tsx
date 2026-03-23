"use client"

import { MessageCircle } from "lucide-react"

const whatsappLink = "https://wa.me/5511959866634?text=Olá,%20vim%20pelo%20site,%20gostaria%20de%20fazer%20um%20agendamento…"

export function WhatsappFloat() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      style={{ backgroundColor: '#25D366' }}
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: '#25D366' }} />
    </a>
  )
}
