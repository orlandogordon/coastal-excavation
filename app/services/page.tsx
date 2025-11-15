import Image from "next/image";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Coastal Excavation offers comprehensive excavation services including excavating, concrete, drainage, underground utilities, sitework, stone spreading, pavers, retaining walls, and water & sewer services.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Services Section */}
      <section className="py-16 bg-gray-100 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Excavating */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/services/excavating.jpeg"
                alt="Excavating services - site preparation and earthwork"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Excavating</h2>
                <p className="text-gray-600">
                  Coastal Excavation can offer many excavation & earthwork services. These include preparation for
                  basements, pools, driveways, and many other residential and commercial projects.
                </p>
              </div>
            </div>

            {/* Concrete */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/services/concrete.jpeg"
                alt="Concrete services - driveways, sidewalks, and foundations"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Concrete</h2>
                <p className="text-gray-600">
                  At Coastal Excavation our team delivers professional concrete solutions for residential and commercial
                  projects. We offer services such as driveways, sidewalks, patios & foundation work with quality craftsmanship.
                </p>
              </div>
            </div>

            {/* Underground Utilities */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/services/utilities.jpeg"
                alt="Underground utility installation and repair"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Underground Utilities</h2>
                <p className="text-gray-600">
                  At Coastal Excavation, we are first for all of your underground utility installation needs and underground
                  utility installations.
                </p>
              </div>
            </div>

            {/* Drainage */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/services/drainage.jpeg"
                alt="Drainage solutions - French drains and water management"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Drainage</h2>
                <p className="text-gray-600">
                  At Coastal Excavation, we offer many drainage & water management services including French drains,
                  dry well systems, and much more.
                </p>
              </div>
            </div>

            {/* Sitework */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/services/sitework.jpeg"
                alt="Site preparation and land clearing services"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Sitework</h2>
                <p className="text-gray-600">
                  At Coastal Excavation, we offer many site preparation and earthwork services including land clearing, concrete
                  demolition, and site prep.
                </p>
              </div>
            </div>

            {/* Stone Spreading */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/services/stones.jpeg"
                alt="Stone spreading and installation"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Stone Spreading</h2>
                <p className="text-gray-600">
                  At Coastal Excavation, we are experts in stone spreading and stone installation. We offer stone for backyards, driveways,
                  walkways and much more.
                </p>
              </div>
            </div>

            {/* Pavers */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/services/pavers.jpeg"
                alt="Paver installation - patios, walkways, and driveways"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Pavers</h2>
                <p className="text-gray-600">
                  At Coastal Excavation our team creates beautiful hardscaping with quality paver installations. We offer services such as
                  paver patios, walkways, driveways & decorative stonework to enhance your property.
                </p>
              </div>
            </div>

            {/* Retaining Walls */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/services/rwall.jpeg"
                alt="Retaining wall construction and repair"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Retaining Walls</h2>
                <p className="text-gray-600">
                  At Coastal Excavation our team builds durable retaining walls to prevent erosion and create usable space. We offer services
                  such as stone walls, block walls & terracing solutions.
                </p>
              </div>
            </div>

            {/* Water & Sewer Services */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/services/sewer.jpeg"
                alt="Water and sewer installation and repair"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Water & Sewer Services</h2>
                <p className="text-gray-600">
                  At Coastal Excavation we specialize in water and sewer line repair and installation. Our experienced team handles new
                  installations, emergency repairs, pipe replacements, and system upgrades for residential and commercial properties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
