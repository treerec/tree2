import { Card, CardContent } from "@/components/ui/card"
import { TreePine, Zap, Scissors, Shield, Truck, Clock } from "lucide-react"

const services = [
  {
    icon: TreePine,
    title: "Tree Removal",
    description: "Safe and efficient removal of trees of all sizes, including difficult-to-reach locations.",
  },
  {
    icon: Scissors,
    title: "Tree Trimming & Pruning",
    description: "Professional pruning to maintain tree health and enhance your property's appearance.",
  },
  {
    icon: Zap,
    title: "Emergency Services",
    description: "24/7 emergency response for storm damage and hazardous tree situations.",
  },
  {
    icon: Truck,
    title: "Stump Grinding",
    description: "Complete stump removal and grinding services to restore your landscape.",
  },
  {
    icon: Shield,
    title: "Lot Clearing",
    description: "Full property clearing services for construction and development projects.",
  },
  {
    icon: Clock,
    title: "Tree Health Assessment",
    description: "Professional evaluation of tree health and safety recommendations.",
  },
]

export function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine maintenance to emergency removals, we provide comprehensive tree care services with the highest
            safety standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
