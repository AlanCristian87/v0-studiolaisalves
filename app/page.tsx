import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Exclusividades } from "@/components/exclusividades"
import { GrupoVip } from "@/components/grupo-vip"
import { SocialMedia } from "@/components/social-media"
import { Location } from "@/components/location"
import { CtaFinal } from "@/components/cta-final"
import { Footer } from "@/components/footer"
import { WhatsappFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Exclusividades />
        <GrupoVip />
        <SocialMedia />
        <Location />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}
