import { ContactForm } from "@/components/contact-form"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Counties } from "@/components/counties"
import { Reviews } from "@/components/reviews"
import { Location } from "@/components/location"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Counties />
      <Reviews />
      <ContactForm />
      <Location />
      <Footer />
    </main>
  )
}
