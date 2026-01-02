import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import { useSEO, generateWebPageSchema } from '../../utils/seo';
import BackToTop from '../../components/BackToTop';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  specs: string[];
}

const productsData: Product[] = [
  {
    id: 1,
    name: 'Heavy Duty Cargo Truck',
    category: 'Trucks',
    description: 'Reliable heavy-duty cargo truck designed for long-haul transportation with superior fuel efficiency and durability.',
    image: 'https://readdy.ai/api/search-image?query=Modern%20heavy%20duty%20cargo%20truck%20with%20large%20cargo%20bed%20on%20highway%2C%20professional%20commercial%20vehicle%20photography%2C%20powerful%20diesel%20engine%20truck%20with%20robust%20build%20quality%2C%20bright%20daylight%20showing%20industrial%20strength%20and%20reliability&width=600&height=400&seq=truck-product-1&orientation=landscape',
    specs: ['Payload: 15-20 tons', 'Engine: 400HP Diesel', 'Transmission: 12-speed', 'Fuel Tank: 400L']
  },
  {
    id: 2,
    name: 'Commercial Delivery Truck',
    category: 'Trucks',
    description: 'Efficient commercial delivery truck perfect for urban logistics and last-mile delivery operations.',
    image: 'https://readdy.ai/api/search-image?query=White%20commercial%20delivery%20truck%20with%20box%20cargo%20area%20in%20city%20environment%2C%20clean%20professional%20vehicle%20photography%2C%20modern%20logistics%20truck%20with%20efficient%20design%2C%20bright%20urban%20setting%20showing%20practical%20delivery%20solution&width=600&height=400&seq=truck-product-2&orientation=landscape',
    specs: ['Payload: 5-8 tons', 'Engine: 180HP Diesel', 'Transmission: 6-speed', 'Fuel Tank: 150L']
  },
  {
    id: 3,
    name: 'Mining Dump Tipper',
    category: 'Tippers',
    description: 'Heavy-duty mining tipper built for extreme conditions with reinforced chassis and powerful hydraulic system.',
    image: 'https://readdy.ai/api/search-image?query=Large%20yellow%20mining%20dump%20tipper%20truck%20at%20construction%20site%2C%20industrial%20heavy%20equipment%20photography%2C%20massive%20hydraulic%20tipper%20with%20reinforced%20build%2C%20bright%20outdoor%20lighting%20showing%20power%20and%20capacity&width=600&height=400&seq=tipper-product-1&orientation=landscape',
    specs: ['Capacity: 30-40 cubic meters', 'Engine: 500HP', 'Hydraulic System: Heavy-duty', 'Body: Reinforced steel']
  },
  {
    id: 4,
    name: 'Construction Tipper Truck',
    category: 'Tippers',
    description: 'Versatile construction tipper ideal for building sites and infrastructure projects with quick unloading capability.',
    image: 'https://readdy.ai/api/search-image?query=Orange%20construction%20tipper%20truck%20with%20raised%20bed%20unloading%20materials%2C%20professional%20construction%20equipment%20photography%2C%20robust%20tipper%20with%20hydraulic%20lift%20system%2C%20bright%20construction%20site%20showing%20operational%20efficiency&width=600&height=400&seq=tipper-product-2&orientation=landscape',
    specs: ['Capacity: 15-20 cubic meters', 'Engine: 350HP', 'Hydraulic System: Standard', 'Body: High-strength steel']
  },
  {
    id: 5,
    name: 'Agricultural Tractor',
    category: 'Tractors',
    description: 'Powerful agricultural tractor designed for farming operations with excellent fuel efficiency and versatile attachments.',
    image: 'https://readdy.ai/api/search-image?query=Red%20modern%20agricultural%20tractor%20in%20green%20farm%20field%2C%20professional%20farming%20equipment%20photography%2C%20powerful%20tractor%20with%20large%20wheels%20and%20modern%20cabin%2C%20bright%20sunny%20day%20showing%20agricultural%20productivity&width=600&height=400&seq=tractor-product-1&orientation=landscape',
    specs: ['Power: 100-150HP', 'Drive: 4WD', 'PTO: 540/1000 RPM', 'Hydraulics: Category II']
  },
  {
    id: 6,
    name: 'Compact Utility Tractor',
    category: 'Tractors',
    description: 'Compact utility tractor perfect for small farms and landscaping with easy maneuverability and multiple attachments.',
    image: 'https://readdy.ai/api/search-image?query=Green%20compact%20utility%20tractor%20with%20front%20loader%20in%20garden%20setting%2C%20professional%20small%20farm%20equipment%20photography%2C%20versatile%20tractor%20with%20modern%20features%2C%20bright%20outdoor%20lighting%20showing%20practical%20utility&width=600&height=400&seq=tractor-product-2&orientation=landscape',
    specs: ['Power: 40-60HP', 'Drive: 4WD', 'PTO: 540 RPM', 'Hydraulics: Category I']
  },
  {
    id: 7,
    name: 'Urban Electric Bike',
    category: 'Electric Bikes',
    description: 'Sleek urban electric bike with long battery life, perfect for city commuting and eco-friendly transportation.',
    image: 'https://readdy.ai/api/search-image?query=Modern%20sleek%20electric%20bike%20in%20urban%20city%20setting%20with%20clean%20design%2C%20professional%20e-bike%20photography%2C%20stylish%20electric%20bicycle%20with%20battery%20pack%2C%20bright%20city%20environment%20showing%20sustainable%20transportation&width=600&height=400&seq=ebike-product-1&orientation=landscape',
    specs: ['Range: 60-80km', 'Battery: 48V 15Ah', 'Motor: 500W', 'Speed: 25km/h']
  },
  {
    id: 8,
    name: 'Mountain Electric Bike',
    category: 'Electric Bikes',
    description: 'Rugged mountain electric bike built for off-road adventures with powerful motor and durable suspension.',
    image: 'https://readdy.ai/api/search-image?query=Robust%20mountain%20electric%20bike%20on%20trail%20with%20suspension%20system%2C%20professional%20outdoor%20e-bike%20photography%2C%20powerful%20electric%20mountain%20bicycle%20with%20thick%20tires%2C%20bright%20natural%20setting%20showing%20adventure%20capability&width=600&height=400&seq=ebike-product-2&orientation=landscape',
    specs: ['Range: 50-70km', 'Battery: 48V 17.5Ah', 'Motor: 750W', 'Speed: 32km/h']
  },
  {
    id: 9,
    name: 'Premium Smartphone Pro',
    category: 'Phones',
    description: 'Flagship smartphone with advanced camera system, powerful processor, and stunning display for professionals.',
    image: 'https://readdy.ai/api/search-image?query=Premium%20flagship%20smartphone%20with%20edge-to-edge%20display%20showing%20camera%20system%2C%20professional%20product%20photography%20on%20clean%20white%20surface%2C%20modern%20phone%20with%20sleek%20design%2C%20bright%20studio%20lighting%20highlighting%20premium%20quality&width=600&height=400&seq=phone-product-1&orientation=landscape',
    specs: ['Display: 6.7" AMOLED', 'Camera: 108MP Triple', 'RAM: 12GB', 'Storage: 256GB']
  },
  {
    id: 10,
    name: 'Budget Smartphone Plus',
    category: 'Phones',
    description: 'Affordable smartphone with excellent battery life and reliable performance for everyday use.',
    image: 'https://readdy.ai/api/search-image?query=Affordable%20modern%20smartphone%20with%20large%20screen%20on%20clean%20surface%2C%20professional%20budget%20phone%20photography%2C%20practical%20smartphone%20with%20good%20features%2C%20bright%20studio%20lighting%20showing%20value%20and%20quality&width=600&height=400&seq=phone-product-2&orientation=landscape',
    specs: ['Display: 6.5" LCD', 'Camera: 48MP Dual', 'RAM: 6GB', 'Storage: 128GB']
  },
  {
    id: 11,
    name: 'Long Haul Transport Truck',
    category: 'Trucks',
    description: 'Premium long-haul truck with advanced comfort features and exceptional fuel economy for interstate transport.',
    image: 'https://readdy.ai/api/search-image?query=Premium%20long%20haul%20transport%20truck%20on%20open%20highway%2C%20professional%20commercial%20vehicle%20photography%2C%20modern%20truck%20with%20aerodynamic%20design%20and%20comfortable%20cabin%2C%20bright%20daylight%20showing%20long%20distance%20capability&width=600&height=400&seq=truck-product-3&orientation=landscape',
    specs: ['Payload: 25 tons', 'Engine: 450HP Diesel', 'Transmission: 16-speed', 'Fuel Tank: 600L']
  },
  {
    id: 12,
    name: 'Articulated Dump Tipper',
    category: 'Tippers',
    description: 'Articulated dump tipper with superior off-road capability and all-terrain performance for challenging sites.',
    image: 'https://readdy.ai/api/search-image?query=Yellow%20articulated%20dump%20tipper%20on%20rough%20terrain%2C%20professional%20heavy%20equipment%20photography%2C%20flexible%20articulated%20truck%20with%20large%20capacity%2C%20bright%20outdoor%20setting%20showing%20off-road%20capability&width=600&height=400&seq=tipper-product-3&orientation=landscape',
    specs: ['Capacity: 25 cubic meters', 'Engine: 400HP', 'Drive: 6x6 All-wheel', 'Body: Articulated design']
  }
];

export default function ProductsPage() {
  // SEO
  useSEO({
    title: 'Products - Trucks Tractors Electric Bikes Phones | Miftah Edu-Trade Hub',
    description: 'Explore our comprehensive range of quality products including Heavy Duty Trucks, Commercial Tippers, Agricultural Tractors, Electric Bikes, and Smartphones sourced from trusted manufacturers worldwide.',
    keywords: 'trucks for sale Nigeria, agricultural tractors, electric bikes, smartphones, commercial vehicles, tippers, cargo trucks, product sourcing Nigeria',
    canonical: '/products',
    schema: generateWebPageSchema(
      'Our Products - Miftah Edu-Trade Hub Ltd',
      'Quality products sourced from trusted manufacturers worldwide',
      '/products'
    )
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const categories = ['All', 'Trucks', 'Tippers', 'Tractors', 'Electric Bikes', 'Phones'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(productsData);
    } else {
      setFilteredProducts(productsData.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <WhatsAppButton />
      <BackToTop />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Our Products
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of quality products sourced from trusted manufacturers worldwide
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-900 hover:text-blue-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600 text-center">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-blue-900 text-white text-sm font-semibold rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>

                  <div className="space-y-2 mb-6">
                    {product.specs.map((spec, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-checkbox-circle-fill text-green-600"></i>
                        </div>
                        <span className="ml-2">{spec}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/product/${product.id}`}
                    className="block w-full px-4 py-3 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg text-center font-semibold hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <i className="ri-inbox-line text-6xl text-gray-400 mb-4"></i>
              <p className="text-xl text-gray-600">No products found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We can source custom products based on your specific requirements
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg font-semibold hover:bg-yellow-300 transition-all whitespace-nowrap cursor-pointer inline-flex items-center"
            >
              <i className="ri-mail-line mr-2"></i>
              Contact Us
            </Link>
            <button
              onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all whitespace-nowrap cursor-pointer inline-flex items-center"
            >
              <i className="ri-customer-service-2-line mr-2"></i>
              Talk to Expert
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
