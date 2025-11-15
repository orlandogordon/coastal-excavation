import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Navigation Links */}
          <div className="flex space-x-8 mb-8 md:mb-0">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/services" className="hover:text-gray-300">
              Our Services
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact Us
            </Link>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <div className="text-2xl font-bold mb-2">(732) 123-4567</div>
            <div className="text-gray-300 mb-2">info@coastalexcavation.construction</div>
            <div className="text-gray-300">
              <div>Mon-Fri 8:00AM-5:00PM</div>
              <div>Saturday By Appointment</div>
            </div>
            <div className="mt-4">
              <span className="text-gray-400">@coastalexcavation</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>Copyright 2025 Coastal Excavation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
