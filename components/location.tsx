"use client"

import { MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.6023456789!2d-46.5126951!3d-23.5186441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce609bc2f9e535%3A0xd95a0308e42c5fd1!2sAv.%20Jaime%20Torres%2C%20138%20-%20Jardim%20Popular%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003659-130!5e0!3m2!1spt-BR!2sbr!4v1234567890"
const mapsLink = "https://www.google.com/maps/place/Av.+Jaime+Torres,+138+-+Jardim+Popular,+S%C3%A3o+Paulo+-+SP,+03659-130/@-23.5186441,-46.5126951,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce609bc2f9e535:0xd95a0308e42c5fd1!8m2!3d-23.518649!4d-46.5101202!16s%2Fg%2F11c43vc47c?entry=ttu"

export function Location() {
  return (
    <section id="localizacao" className="py-10 md:py-12" style={{ backgroundColor: 'rgba(26, 26, 26, 0.3)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-xl md:text-2xl font-serif font-bold mb-1.5 text-white">
              Venha nos <span style={{ color: '#D4A574' }}>visitar</span>
            </h2>
            
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4" style={{ color: '#D4A574' }} />
              <address className="not-italic">
                Av. Jaime Torres, 138 - Jardim Popular, São Paulo - SP
              </address>
            </div>
          </div>
          
          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-[#2a2a2a]">
            <div className="aspect-video w-full">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Laís Alves Studio e Beleza"
                className="w-full h-full"
              />
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-3">
            <Button
              asChild
              className="text-black"
              style={{ backgroundColor: '#D4A574' }}
            >
              <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                <Navigation className="w-4 h-4 mr-2" />
                Como chegar
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
