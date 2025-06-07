import { Button } from "@/components/ui/button"
import { Phone, Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.9/5 Rating</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Professional
            <span className="block text-yellow-400">Tree Removal</span>
            <span className="block">Services</span>
          </h1>

          <p className="text-xl lg:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
            Expert tree removal, trimming, and emergency services. Licensed, insured, and trusted by thousands of
            homeowners across the region.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call (555) 123-TREE
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 text-lg"
            >
              Get Free Quote
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400">15+</div>
              <div className="text-green-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">5000+</div>
              <div className="text-green-100">Trees Removed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">24/7</div>
              <div className="text-green-100">Emergency Service</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-400/20 rounded-full blur-xl" />
    </section>
  )
}
