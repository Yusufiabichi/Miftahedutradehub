import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import GallerySection from '../../components/feature/GallerySection';
import { useSEO, generateOrganizationSchema, generateWebPageSchema } from '../../utils/seo';
import BackToTop from '../../components/BackToTop';

export default function Home() {
  // SEO
  useSEO({
    title: 'Kano Miftah Edu-Trade Hub Ltd - Import Export Education Travel Services Nigeria',
    description: 'Miftah Edu-Trade Hub Ltd offers comprehensive international trade, global education consulting, visa processing, currency exchange, and travel services in Kano, Nigeria. Your trusted partner for import-export solutions, study abroad programs, and worldwide business opportunities in Northern Nigeria.',
    keywords: 'import export Nigeria, Kano trade services, study abroad Nigeria, visa processing Kano, currency exchange, international trade Nigeria, education consulting, travel services Kano',
    canonical: '/',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        generateOrganizationSchema(),
        generateWebPageSchema(
          'Miftah Edu-Trade Hub Ltd - Global Trade & Education Services',
          'Connecting you to global opportunities in trade, education, and travel from Kano, Nigeria',
          '/'
        )
      ]
    }
  });

  const [selectedCategory, setSelectedCategory] = useState('All');

  const services = [
    {
      icon: 'ri-ship-line',
      title: 'Import & Export Solutions',
      description: 'Seamless international trade services connecting businesses across borders with reliable logistics and customs support.',
      path: '/services/import-export',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'Global Education & Scholarships',
      description: 'Expert guidance for studying abroad, scholarship applications, and university admissions worldwide.',
      path: '/services/education',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: 'ri-exchange-dollar-line',
      title: 'Currency Exchange & Remittance',
      description: 'Competitive rates for currency exchange and secure international money transfer services.',
      path: '/services/currency-exchange',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: 'ri-shopping-bag-line',
      title: 'Goods & Services Sourcing',
      description: 'Professional sourcing solutions for quality products and services from global markets.',
      path: '/services/sourcing',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'ri-flight-takeoff-line',
      title: 'Flights & Hotel Bookings',
      description: 'Best deals on international flights and hotel reservations for business and leisure travel.',
      path: '/services/travel',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: 'ri-passport-line',
      title: 'Visa Processing & Travel Advisory',
      description: 'Complete visa assistance and travel consultation for hassle-free international journeys.',
      path: '/services/visa',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const products = [
    {
      id: 1,
      name: 'Heavy Duty Cargo Truck',
      category: 'Trucks',
      image: 'https://readdy.ai/api/search-image?query=modern%20heavy%20duty%20cargo%20truck%20white%20background%20professional%20product%20photography%20clean%20simple%20backdrop%20commercial%20vehicle%20front%20three%20quarter%20view%20high%20quality%20detailed&width=600&height=600&seq=truck1&orientation=squarish',
      description: 'High-performance cargo truck with 20-ton capacity, fuel-efficient engine, and advanced safety features.',
      specs: ['20-ton capacity', 'Euro 5 engine', 'GPS tracking']
    },
    {
      id: 2,
      name: 'Commercial Tipper Truck',
      category: 'Tippers',
      image: 'https://readdy.ai/api/search-image?query=commercial%20tipper%20dump%20truck%20yellow%20color%20white%20background%20professional%20product%20photography%20clean%20simple%20backdrop%20construction%20vehicle%20side%20view%20high%20quality%20detailed&width=600&height=600&seq=tipper1&orientation=squarish',
      description: 'Robust tipper truck ideal for construction and mining operations with hydraulic lifting system.',
      specs: ['15-ton payload', 'Hydraulic system', 'Reinforced body']
    },
    {
      id: 3,
      name: 'Agricultural Tractor 4WD',
      category: 'Tractors',
      image: 'https://readdy.ai/api/search-image?query=modern%20agricultural%20tractor%20red%20color%20white%20background%20professional%20product%20photography%20clean%20simple%20backdrop%20farming%20equipment%20side%20view%20high%20quality%20detailed&width=600&height=600&seq=tractor1&orientation=squarish',
      description: 'Powerful 4WD tractor with 85HP engine, perfect for farming and agricultural operations.',
      specs: ['85HP engine', '4WD system', 'Multi-function']
    },
    {
      id: 4,
      name: 'Electric City Bike Pro',
      category: 'Electric Bikes',
      image: 'https://readdy.ai/api/search-image?query=modern%20electric%20bicycle%20sleek%20design%20black%20color%20white%20background%20professional%20product%20photography%20clean%20simple%20backdrop%20urban%20commuter%20bike%20side%20view%20high%20quality%20detailed&width=600&height=600&seq=ebike1&orientation=squarish',
      description: 'Eco-friendly electric bike with 50km range, lightweight aluminum frame, and smart display.',
      specs: ['50km range', 'Aluminum frame', 'Smart display']
    },
    {
      id: 5,
      name: 'Smartphone Pro Max',
      category: 'Phones',
      image: 'https://readdy.ai/api/search-image?query=premium%20smartphone%20modern%20design%20black%20color%20white%20background%20professional%20product%20photography%20clean%20simple%20backdrop%20mobile%20phone%20front%20view%20high%20quality%20detailed%20screen%20display&width=600&height=600&seq=phone1&orientation=squarish',
      description: 'Latest flagship smartphone with 6.7" AMOLED display, 108MP camera, and 5G connectivity.',
      specs: ['6.7" AMOLED', '108MP camera', '5G ready']
    }
  ];

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const features = [
    {
      icon: 'ri-shield-check-line',
      title: 'Trusted & Reliable',
      description: 'Years of experience delivering exceptional service with complete transparency and integrity.'
    },
    {
      icon: 'ri-global-line',
      title: 'Global Network',
      description: 'Extensive partnerships worldwide ensuring seamless service delivery across continents.'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Expert Support',
      description: 'Dedicated team of professionals providing personalized assistance every step of the way.'
    },
    {
      icon: 'ri-price-tag-3-line',
      title: 'Competitive Pricing',
      description: 'Best value services with transparent pricing and no hidden charges.'
    }
  ];

  const testimonials = [
    {
      name: 'Ismail Yunus',
      role: 'Business Owner',
      image: '',
      text: 'Miftah Edu-Trade Hub made our import process incredibly smooth. Their expertise in international trade is unmatched.',
      rating: 5
    },
    {
      name: 'Fatima Sulaiman',
      role: 'Student',
      image: '',
      text: 'Thanks to their scholarship guidance, I am now studying at my dream university in Canada. Highly recommended!',
      rating: 5
    },
    {
      name: 'Abdulkarim Hassan',
      role: 'Entrepreneur',
      image: '',
      text: 'Their sourcing services helped us find quality suppliers at competitive prices. Excellent service and support.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'What services does Miftah Edu-Trade Hub provide?',
      answer: 'We offer comprehensive international services including Import & Export solutions, Global Education & Scholarship guidance, Currency Exchange & Remittance, Goods & Services Sourcing, Flight & Hotel Bookings, and Visa Processing & Travel Advisory.'
    },
    {
      question: 'How can I apply for scholarships through your service?',
      answer: 'Our education consultants will guide you through the entire scholarship application process, from identifying suitable opportunities to preparing application materials and submitting them to universities worldwide. Contact us to schedule a consultation.'
    },
    {
      question: 'What countries do you provide visa processing services for?',
      answer: 'We provide visa processing assistance for over 50 countries including USA, Canada, UK, Australia, European nations, and many more. Our team stays updated with the latest visa requirements and procedures for each country.'
    },
    {
      question: 'How competitive are your currency exchange rates?',
      answer: 'We offer highly competitive exchange rates with transparent pricing and no hidden fees. Our rates are updated in real-time to ensure you get the best value for your money transfers and currency exchanges.'
    },
    {
      question: 'Do you provide customs clearance for import/export?',
      answer: 'Yes, we provide complete customs clearance services including documentation, compliance checking, duty calculation, and coordination with customs authorities to ensure smooth clearance of your shipments.'
    },
    {
      question: 'What is your customer support availability?',
      answer: 'Our customer support team is available Monday to Saturday from 9:00 AM to 6:00 PM. For urgent matters, you can reach us through our WhatsApp support or email, and we will respond as quickly as possible.'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Countries for International Students in 2026',
      excerpt: 'Discover the best destinations for higher education with excellent scholarship opportunities and post-study work options for international students.',
      image: 'https://readdy.ai/api/search-image?query=diverse%20international%20students%20studying%20together%20in%20modern%20university%20library%20with%20laptops%20and%20books%20bright%20natural%20lighting%20multicultural%20education%20environment%20clean%20professional%20photography&width=600&height=400&seq=blog1&orientation=landscape',
      category: 'Education',
      date: 'Jan 01, 2025',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Understanding Import-Export Regulations in Nigeria',
      excerpt: 'A comprehensive guide to navigating customs procedures, documentation requirements, and compliance standards for successful international trade.',
      image: 'https://readdy.ai/api/search-image?query=modern%20cargo%20port%20with%20shipping%20containers%20international%20trade%20logistics%20customs%20clearance%20professional%20business%20environment%20blue%20sky%20clean%20organized%20warehouse&width=600&height=400&seq=blog2&orientation=landscape',
      category: 'Trade',
      date: 'March 12, 2025',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Visa Application Tips: Avoiding Common Mistakes',
      excerpt: 'Learn from experts about the most common visa application errors and how to ensure your application is approved on the first attempt.',
      image: 'https://readdy.ai/api/search-image?query=passport%20with%20visa%20stamps%20travel%20documents%20on%20desk%20professional%20office%20setting%20international%20travel%20planning%20clean%20organized%20workspace%20natural%20lighting&width=600&height=400&seq=blog3&orientation=landscape',
      category: 'Travel',
      date: 'Aug 8, 2025',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Currency Exchange: Best Practices for International Transfers',
      excerpt: 'Maximize your money transfers with expert tips on timing, exchange rates, and choosing the right service for your international transactions.',
      image: 'https://readdy.ai/api/search-image?query=international%20currency%20exchange%20money%20transfer%20digital%20banking%20financial%20technology%20modern%20office%20professional%20business%20environment%20clean%20minimalist%20design&width=600&height=400&seq=blog4&orientation=landscape',
      category: 'Finance',
      date: 'Apr 5, 2025',
      readTime: '4 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />
      <BackToTop />
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=stunning%20aerial%20view%20of%20modern%20international%20cargo%20port%20with%20massive%20container%20ships%20being%20loaded%20and%20unloaded%20colorful%20shipping%20containers%20organized%20in%20precise%20rows%20giant%20cranes%20working%20against%20dramatic%20sunset%20sky%20with%20golden%20orange%20and%20deep%20blue%20colors%20reflecting%20on%20calm%20ocean%20water%20representing%20global%20trade%20and%20logistics%20professional%20high%20quality%20cinematic%20photography%20wide%20angle%20perspective%20showing%20scale%20of%20international%20commerce&width=1920&height=1080&seq=hero-bg-new&orientation=landscape')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Connecting You to<br />
            <span className="text-yellow-400">Global Opportunities</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-4xl mx-auto">
            Import–Export | Education Scholarship | Currency Exchange
          </p>
          <p className="text-lg md:text-xl text-blue-200 mb-12 max-w-4xl mx-auto">
            Visa & Travel Services | Sourcing Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all whitespace-nowrap cursor-pointer"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all whitespace-nowrap cursor-pointer"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">About Miftah Edu-Trade Hub</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We are a leading provider of comprehensive international trade, education scholarships, and travel services. With years of experience and a global network of partners, we help individuals and businesses achieve their international goals with confidence and ease.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mb-6">
                  <i className={`${feature.icon} text-3xl text-yellow-400`}></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" data-product-shop>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive solutions for all your international business, education, and travel needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white border-2 shadow-xl border-gray-100 rounded-xl p-8 hover:border-yellow-400 hover:shadow-2xl transition-all">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <i className={`${service.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link
                  to={service.path}
                  className="inline-flex items-center text-blue-900 font-semibold hover:text-yellow-600 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Learn More
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blue-50 to-white" data-product-shop>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Featured Products</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Quality products sourced from trusted manufacturers worldwide
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg'
                    : 'bg-white text-blue-900 border-2 border-gray-200 hover:border-blue-900 hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <div className="relative w-full h-64 bg-gray-50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-yellow-400 text-blue-900 text-xs font-semibold rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-yellow-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                  <div className="mb-4">
                    {product.specs.map((spec, index) => (
                      <span key={index} className="inline-block text-xs bg-blue-50 text-blue-900 px-2 py-1 rounded mr-2 mb-2">
                        {spec}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/product/${product.id}#inquiry-form`}
                    className="block w-full text-center px-4 py-2.5 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg font-semibold text-lg hover:shadow-xl transition-all whitespace-nowrap cursor-pointer inline-block text-center"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <GallerySection />

      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">3+</div>
              <p className="text-blue-100 text-lg">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">5+</div>
              <p className="text-blue-100 text-lg">Countries Served</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">100+</div>
              <p className="text-blue-100 text-lg">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">98%</div>
              <p className="text-blue-100 text-lg">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Client Testimonials</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">What our clients say about us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400"></i>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">&ldquo;{testimonial.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Latest News & Insights</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">Stay updated with the latest trends and tips in international trade, education, and travel</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-yellow-400 text-blue-900 text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <i className="ri-calendar-line mr-2"></i>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <i className="ri-time-line mr-2"></i>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-900 font-semibold hover:text-yellow-600 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Read More
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg font-semibold hover:shadow-xl transition-all whitespace-nowrap cursor-pointer inline-block"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">Find answers to common questions about our services</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-blue-50 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-blue-900 pr-4">{faq.question}</h3>
                  <i className="ri-arrow-down-s-line text-2xl text-blue-900 group-open:rotate-180 transition-transform flex-shrink-0"></i>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">Still have questions?</p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg font-semibold hover:shadow-xl transition-all whitespace-nowrap cursor-pointer"
            >
              Contact Us
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Global Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us help you achieve your international goals with our expert services and global network
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all whitespace-nowrap cursor-pointer"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
