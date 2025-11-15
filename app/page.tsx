import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  const galleryImages = [
    '/images/gallery/concrete01.jpeg',
    '/images/gallery/drainage02.jpeg',
    '/images/gallery/drainage03.jpeg',
    '/images/gallery/drainage04.jpeg',
    '/images/gallery/drainage05.jpeg',
    '/images/gallery/excavation02.jpeg',
    '/images/gallery/excavation03.jpeg',
    '/images/gallery/excavation04.jpeg',
    '/images/gallery/pavers00.jpeg',
    '/images/gallery/pavers02.jpeg',
    '/images/gallery/pavers03.jpeg',
    '/images/gallery/pavers04.jpeg',
    '/images/gallery/pavers05.jpeg',
    '/images/gallery/pavers06.jpeg',
    '/images/gallery/pavers07.jpeg',
    '/images/gallery/rwall01.jpeg',
    '/images/gallery/rwall02.jpeg',
    '/images/gallery/rwall03.jpeg',
    '/images/gallery/rwall04.jpeg',
    '/images/gallery/sitework01.jpeg',
    '/images/gallery/stones01.jpeg',
    '/images/gallery/stones02.jpeg',
    '/images/gallery/utilities01.jpeg',
    '/images/gallery/utilities02.jpeg',
    '/images/gallery/sewer01.jpeg',
    '/images/gallery/sewer03.jpeg',
    '/images/gallery/sewer04.jpeg',
    '/images/gallery/sewer05.jpeg',
    '/images/gallery/sewer06.jpeg',
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-gray-900 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero/hero01.jpeg')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>


        {/* Services Text */}
        <div className="absolute bottom-36 left-4 right-4 md:top-48 md:left-16 xl:left-42 md:right-auto text-white">
          <div className="text-2xl md:text-3xl font-black mb-4 text-center md:text-left drop-shadow-lg">
            <div className="block md:hidden">Excavating • Grading</div>
            <div className="block md:hidden">Sitework • Utilities</div>
            <div className="hidden md:block">Excavating • Grading</div>
            <div className="hidden md:block">Sitework • Underground Utilities</div>
          </div>
          <div className="text-base md:text-xl font-semibold max-w-full md:max-w-xl text-center md:text-left drop-shadow-md">
            Coastal Excavation is a family owned and operated team
            that is commited to serving the community with quality excavation and
            site preparation services. We specialize in the
            development of medium to large residential lots, small
            commercial site projects and public or municipal projects.
          </div>
        </div>
      </section>

      {/* The Full Package Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">The Full Package</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Excavating</h3>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Concrete</h3>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Underground Utilities</h3>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Drainage</h3>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sitework</h3>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Stone Spreading</h3>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pavers</h3>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Retaining Walls</h3>
                <p className="text-gray-600">
                  At Coastal Excavation our team builds durable retaining walls to prevent erosion and create usable space. We offer services
                  such as stone walls, block walls & terracing solutions.
                </p>
              </div>
            </div>

            {/* Water & Sewer */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/services/sewer.jpeg"
                alt="Water and sewer installation and repair"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Water & Sewer</h3>
                <p className="text-gray-600">
                  At Coastal Excavation our team provides professional water and sewer installation and repair services for residential
                  and commercial properties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg aspect-square">
                <Image
                  src={image}
                  alt={`Excavation project ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
