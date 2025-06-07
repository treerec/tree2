import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">Tree Removal Experts</h3>
            <p className="text-gray-300 mb-4">
              Professional tree care services you can trust. Licensed, insured, and committed to excellence.
            </p>
            <div className="flex items-center gap-2 text-yellow-400">
              <Clock className="w-5 h-5" />
              <span>24/7 Emergency Service</span>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span>(555) 123-TREE</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span>info@treeremovalexperts.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span>Rockville, MD 20850</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Tree Removal</li>
              <li>Tree Trimming & Pruning</li>
              <li>Emergency Tree Services</li>
              <li>Stump Grinding</li>
              <li>Lot Clearing</li>
              <li>Tree Health Assessment</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 Tree Removal Experts. All rights reserved. Licensed & Insured.</p>
        </div>
      </div>
    </footer>
  )
}
