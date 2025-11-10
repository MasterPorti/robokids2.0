"use client";

interface StructuredDataProps {
  type: "Organization" | "LocalBusiness" | "Course" | "BreadcrumbList" | "FAQPage" | "VideoObject" | "Service";
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case "Organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Robokids Education",
          url: "https://robokidsedu.com",
          logo: "https://robokidsedu.com/LogoWhite.svg",
          description: "Escuela de robótica, corte láser e impresión 3D para niños y jóvenes en Coacalco y Cuautitlán Izcalli, Estado de México",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Coacalco de Berriozábal",
            addressRegion: "Estado de México",
            addressCountry: "MX",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+52-55-4078-1607",
            contactType: "customer service",
            areaServed: "MX",
            availableLanguage: "Spanish",
          },
          sameAs: [
            // Agregar redes sociales cuando las tengas
            // "https://www.facebook.com/robokids",
            // "https://www.instagram.com/robokids",
          ],
        };

      case "LocalBusiness":
        return {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "@id": "https://robokidsedu.com",
          name: "Robokids Education",
          description: "Curso de robótica para niños y jóvenes en Coacalco y Cuautitlán Izcalli, Estado de México. Escuela de robótica #1.",
          url: "https://robokidsedu.com",
          telephone: "+52-55-4078-1607",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Múltiples ubicaciones",
            addressLocality: "Coacalco de Berriozábal",
            addressRegion: "Estado de México",
            postalCode: "55700",
            addressCountry: "MX",
          },
          location: [
            {
              "@type": "Place",
              name: "Plaza Coacalco",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Coacalco de Berriozábal",
                addressRegion: "Estado de México",
                addressCountry: "MX",
              },
            },
            {
              "@type": "Place",
              name: "Cofradía",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cuautitlán Izcalli",
                addressRegion: "Estado de México",
                addressCountry: "MX",
              },
            },
            {
              "@type": "Place",
              name: "Plaza Periférico",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cuautitlán Izcalli",
                addressRegion: "Estado de México",
                addressCountry: "MX",
              },
            },
          ],
          areaServed: [
            {
              "@type": "City",
              name: "Coacalco de Berriozábal",
            },
            {
              "@type": "City",
              name: "Cuautitlán Izcalli",
            },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Cursos de Robokids",
            itemListElement: [
              {
                "@type": "OfferCatalog",
                name: "Curso de Robótica",
                itemListElement: {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Course",
                    name: "Curso de Robótica para Niños y Jóvenes",
                  },
                },
              },
            ],
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "19.6319",
            longitude: "-99.1083",
          },
          priceRange: "$$",
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Saturday",
              "Sunday",
            ],
            opens: "15:00",
            closes: "18:00",
          },
        };

      case "Course":
        return {
          "@context": "https://schema.org",
          "@type": "Course",
          name: data.name,
          description: data.description,
          provider: {
            "@type": "Organization",
            name: "Robokids Education",
            url: "https://robokidsedu.com",
          },
          courseCode: data.courseCode,
          educationalLevel: "Beginner to Advanced",
          teaches: data.teaches,
          inLanguage: "es-MX",
          audience: {
            "@type": "EducationalAudience",
            educationalRole: "student",
            audienceType: "Children and Youth",
          },
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "MXN",
            availability: "https://schema.org/InStock",
            url: data.url,
          },
        };

      case "BreadcrumbList":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: data.items.map((item: any, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };

      case "FAQPage":
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.questions.map((q: any) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: q.answer,
            },
          })),
        };

      case "VideoObject":
        return {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: data.name,
          description: data.description,
          thumbnailUrl: data.thumbnailUrl,
          uploadDate: data.uploadDate || new Date().toISOString(),
          contentUrl: data.contentUrl,
          embedUrl: data.embedUrl,
          duration: data.duration,
          publisher: {
            "@type": "Organization",
            name: "Robokids Education",
            logo: {
              "@type": "ImageObject",
              url: "https://robokidsedu.com/LogoWhite.svg",
            },
          },
        };

      case "Service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: data.serviceType,
          provider: {
            "@type": "EducationalOrganization",
            name: "Robokids Education",
            url: "https://robokidsedu.com",
          },
          areaServed: [
            {
              "@type": "City",
              name: "Coacalco de Berriozábal",
            },
            {
              "@type": "City",
              name: "Cuautitlán Izcalli",
            },
          ],
          description: data.description,
          offers: {
            "@type": "Offer",
            price: data.price || "0",
            priceCurrency: "MXN",
            availability: "https://schema.org/InStock",
            url: data.url,
          },
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

