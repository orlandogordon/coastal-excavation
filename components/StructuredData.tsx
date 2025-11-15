export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://coastalexcavation.construction",
    "name": "Coastal Excavation",
    "image": "https://coastalexcavation.construction/images/hero/hero01.jpeg",
    "description": "Family owned and operated excavation company serving the community with quality excavating, grading, sitework, and underground utility services for residential and commercial projects.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Jersey",
      "addressRegion": "NJ",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.0583",
      "longitude": "-74.4057"
    },
    "url": "https://coastalexcavation.construction",
    "telephone": "+1-732-123-4567",
    "email": "info@coastalexcavation.construction",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "00:00",
        "closes": "00:00",
        "description": "By Appointment Only"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/coastalexcavation"
    ],
    "areaServed": {
      "@type": "State",
      "name": "New Jersey"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Excavation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Excavating",
            "description": "Excavation & earthwork services including preparation for basements, pools, driveways, and other residential and commercial projects."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Concrete",
            "description": "Professional concrete solutions for driveways, sidewalks, patios & foundation work."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Underground Utilities",
            "description": "Underground utility installation and repair services."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Drainage",
            "description": "Drainage & water management services including French drains and dry well systems."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sitework",
            "description": "Site preparation and earthwork services including land clearing and concrete demolition."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Stone Spreading",
            "description": "Stone spreading and installation for backyards, driveways, and walkways."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pavers",
            "description": "Quality paver installations for patios, walkways, driveways & decorative stonework."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Retaining Walls",
            "description": "Durable retaining wall construction including stone walls, block walls & terracing solutions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Water & Sewer",
            "description": "Water and sewer installation and repair services for residential and commercial properties."
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
