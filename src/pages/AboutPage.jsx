
import { Award, Star, Users, Building } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Logo */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gastro-orange to-gastro-yellow opacity-90"></div>
        <div className="container-custom mx-auto py-24 relative z-10">
          <div className="flex flex-col items-center justify-center">
            <img 
              src="/lovable-uploads/2c78969d-6267-4cfd-8009-989dfa27f7fa.png" 
              alt="Main Gastroland GmbH Logo" 
              className="w-64 md:w-80 mb-8"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-gastro-navy text-center">Über Uns</h1>
            <p className="mt-6 text-xl text-gastro-navy max-w-2xl text-center">
              Main Gastroland GmbH ist Ihr zuverlässiger Partner für hochwertige Lebensmittel und Gastronomieprodukte.
            </p>
          </div>
        </div>
      </div>

      {/* Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gastro-light-yellow p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-gastro-navy flex items-center">
                <Star className="mr-3 text-gastro-orange" size={32} />
                Unsere Vision
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Wir streben danach, der führende Anbieter von Qualitätsprodukten für die Gastronomie in Deutschland zu werden. 
                Unser Ziel ist es, die kulinarische Landschaft zu bereichern, indem wir authentische und hochwertige Produkte anbieten, 
                die die Vielfalt der globalen Küche widerspiegeln. Wir glauben an nachhaltige Geschäftspraktiken und 
                an die Unterstützung lokaler Produzenten, wo immer möglich.
              </p>
            </div>
            
            <div className="bg-gastro-light-yellow p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-gastro-navy flex items-center">
                <Award className="mr-3 text-gastro-orange" size={32} />
                Unsere Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Main Gastroland GmbH widmet sich der Bereitstellung erstklassiger Lebensmittel und Gastronomiebedarf zu 
                wettbewerbsfähigen Preisen. Wir verpflichten uns zu exzellentem Kundenservice, pünktlicher Lieferung und 
                der Pflege langfristiger Beziehungen zu unseren Kunden und Lieferanten. Unser engagiertes Team arbeitet 
                unermüdlich daran, die sich ändernden Bedürfnisse der Gastronomiebranche zu antizipieren und zu erfüllen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Restaurants */}
      <section className="py-16 bg-gastro-navy text-white">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 flex items-center justify-center">
            <Building className="mr-3 text-gastro-yellow" size={32} />
            Unsere Partnerrestaurants
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Restaurant Anadolu</h3>
              <p className="mb-4">Ein authentisches türkisches Restaurant im Herzen von Berlin.</p>
              <p className="italic">"Main Gastroland ist unser exklusiver Lieferant für authentische türkische Zutaten."</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Café Istanbul</h3>
              <p className="mb-4">Gemütliches Café mit orientalischen Spezialitäten.</p>
              <p className="italic">"Die Qualität der Produkte von Main Gastroland hat unseren Ruf als bestes orientalisches Café gestärkt."</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Mediterran Kitchen</h3>
              <p className="mb-4">Mediterrane Küche mit frischen Zutaten und authentischen Rezepten.</p>
              <p className="italic">"Die Zuverlässigkeit und Produktvielfalt von Main Gastroland ist für unseren täglichen Betrieb unverzichtbar."</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Olive Garden</h3>
              <p className="mb-4">Italienisches Restaurant mit mediterranem Flair.</p>
              <p className="italic">"Wir schätzen die pünktlichen Lieferungen und die konstant hohe Qualität der Produkte."</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Spice Route</h3>
              <p className="mb-4">Indische Küche mit authentischen Gewürzen und Aromen.</p>
              <p className="italic">"Main Gastroland versorgt uns mit einer exzellenten Auswahl an Gewürzen und Spezialitäten."</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">El Toro</h3>
              <p className="mb-4">Spanisches Restaurant spezialisiert auf Tapas und Paella.</p>
              <p className="italic">"Die spanischen Produkte von Main Gastroland sind von höchster Qualität und Authentizität."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications and References */}
      <section className="py-16 bg-white">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gastro-navy flex items-center justify-center">
            <Users className="mr-3 text-gastro-orange" size={32} />
            Zertifizierungen & Referenzen
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gastro-navy">Unsere Zertifizierungen</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-gastro-yellow/30 p-2 rounded-full mr-3 mt-1">
                    <Award size={20} className="text-gastro-navy" />
                  </div>
                  <div>
                    <h4 className="font-bold">ISO 22000:2018</h4>
                    <p className="text-gray-600">Zertifizierung für Lebensmittelsicherheits-Managementsysteme</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-gastro-yellow/30 p-2 rounded-full mr-3 mt-1">
                    <Award size={20} className="text-gastro-navy" />
                  </div>
                  <div>
                    <h4 className="font-bold">HACCP</h4>
                    <p className="text-gray-600">Hazard Analysis and Critical Control Points</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-gastro-yellow/30 p-2 rounded-full mr-3 mt-1">
                    <Award size={20} className="text-gastro-navy" />
                  </div>
                  <div>
                    <h4 className="font-bold">EU Bio-Zertifizierung</h4>
                    <p className="text-gray-600">Für biologische Produkte im Sortiment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-gastro-yellow/30 p-2 rounded-full mr-3 mt-1">
                    <Award size={20} className="text-gastro-navy" />
                  </div>
                  <div>
                    <h4 className="font-bold">Halal-Zertifizierung</h4>
                    <p className="text-gray-600">Für unsere nach islamischen Vorschriften hergestellten Produkte</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gastro-navy">Unsere Referenzen</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gastro-light-yellow rounded-lg">
                  <p className="italic mb-2">"Main Gastroland ist seit über 5 Jahren unser vertrauenswürdiger Partner für alle unsere Gastronomiebedürfnisse."</p>
                  <p className="font-bold">- Berlin Restaurant Association</p>
                </div>
                <div className="p-4 bg-gastro-light-yellow rounded-lg">
                  <p className="italic mb-2">"Die Produktvielfalt und der ausgezeichnete Kundenservice haben Main Gastroland zu unserem bevorzugten Großhändler gemacht."</p>
                  <p className="font-bold">- Bayerischer Hotelverband</p>
                </div>
                <div className="p-4 bg-gastro-light-yellow rounded-lg">
                  <p className="italic mb-2">"Für authentische mediterrane und türkische Produkte gibt es keinen besseren Lieferanten als Main Gastroland."</p>
                  <p className="font-bold">- Frankfurt Culinary Institute</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
