import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

const counties = [
  "Montgomery County",
  "Prince George's County",
  "Anne Arundel County",
  "Howard County",
  "Baltimore County",
  "Carroll County",
  "Frederick County",
  "Charles County",
  "Calvert County",
  "St. Mary's County",
  "Fairfax County",
  "Loudoun County",
]

export function Counties() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-8 h-8 text-green-700" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Service Areas</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We proudly serve homeowners and businesses across multiple counties in Maryland, Virginia, and Washington
            D.C. area.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {counties.map((county, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-6 py-3 text-lg font-semibold bg-green-100 text-green-800 hover:bg-green-200 transition-colors"
              >
                {county}
              </Badge>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-4">Don't see your area listed? Give us a call!</p>
            <p className="text-2xl font-bold text-green-700">We may still be able to help you.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
