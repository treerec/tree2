import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Sarah Johnson",
    location: "Montgomery County",
    rating: 5,
    text: "Absolutely fantastic service! They removed a massive oak tree that was threatening our house. The crew was professional, efficient, and cleaned up everything perfectly. Highly recommend!",
  },
  {
    name: "Mike Rodriguez",
    location: "Fairfax County",
    rating: 5,
    text: "Called them for emergency tree removal after a storm. They came out the same day and handled everything safely. Fair pricing and excellent work quality.",
  },
  {
    name: "Jennifer Chen",
    location: "Anne Arundel County",
    rating: 5,
    text: "Professional tree trimming service that transformed our backyard. The team was knowledgeable about tree health and gave great advice for future care.",
  },
  {
    name: "David Thompson",
    location: "Howard County",
    rating: 5,
    text: "Best tree service company in the area! They've been maintaining our property for 3 years now. Always reliable, insured, and reasonably priced.",
  },
  {
    name: "Lisa Martinez",
    location: "Prince George's County",
    rating: 5,
    text: "Impressed with their stump grinding service. They removed 5 old stumps and left our yard looking perfect. Will definitely use them again.",
  },
  {
    name: "Robert Wilson",
    location: "Baltimore County",
    rating: 5,
    text: "Quick response time and excellent communication. They explained everything they were doing and why. True professionals who care about their work.",
  },
]

export function Reviews() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our tree services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-green-600 mr-2" />
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">"{review.text}"</p>

                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-green-600 font-medium">{review.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white px-8 py-4 rounded-full shadow-lg">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-xl font-bold text-gray-900">4.9/5</span>
            <span className="text-gray-600">from 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
