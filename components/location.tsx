import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Shield, Award } from "lucide-react"

export function Location() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're your local tree care experts with the experience and equipment to handle any job safely and
            efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Fully Insured</h3>
              <p className="text-gray-300">Licensed and insured for your protection</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Certified Arborists</h3>
              <p className="text-gray-300">ISA certified tree care professionals</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">24/7 Emergency</h3>
              <p className="text-gray-300">Round-the-clock emergency response</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <MapPin className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Local Experts</h3>
              <p className="text-gray-300">Serving the community for 15+ years</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Our Service Area</h3>
            <p className="text-lg text-gray-300 mb-6">
              Based in Rockville, MD, we serve customers throughout Maryland, Northern Virginia, and Washington D.C.
              area.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-green-400 mb-2">Maryland</h4>
                <p className="text-gray-300">
                  Montgomery, Prince George's, Anne Arundel, Howard, Baltimore, Carroll, Frederick, Charles, Calvert,
                  St. Mary's Counties
                </p>
              </div>
              <div>
                <h4 className="font-bold text-green-400 mb-2">Virginia</h4>
                <p className="text-gray-300">Fairfax, Loudoun, Arlington, Alexandria, Falls Church</p>
              </div>
              <div>
                <h4 className="font-bold text-green-400 mb-2">Washington D.C.</h4>
                <p className="text-gray-300">All quadrants and surrounding areas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
