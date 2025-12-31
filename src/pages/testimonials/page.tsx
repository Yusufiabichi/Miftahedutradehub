import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import { useSEO, generateWebPageSchema } from '../../utils/seo';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  image: string;
  date: string;
  service: string;
}

export default function TestimonialsPage() {
  // SEO
  useSEO({
    title: 'Client Testimonials & Reviews - Miftah Edu-Trade Hub Ltd Success Stories',
    description: 'Read real success stories from our satisfied clients. Discover how Miftah Edu-Trade Hub Ltd has helped businesses and individuals achieve their international trade, education, and travel goals with 98% success rate.',
    keywords: 'client testimonials Nigeria, customer reviews Kano, success stories, import export reviews, education consulting testimonials, visa processing feedback',
    canonical: '/testimonials',
    schema: generateWebPageSchema(
      'Client Testimonials - Miftah Edu-Trade Hub Ltd',
      'Real experiences from clients who have trusted us with their business, education, and travel needs',
      '/testimonials'
    )
  });

  const [filter, setFilter] = useState('all');

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Ahmed Rahman',
      role: 'Business Owner',
      company: 'Rahman Enterprises',
      text: 'Miftah Edu-Trade Hub made our import process incredibly smooth. Their expertise in international trade is unmatched. We have been working with them for over 2 years and they consistently deliver exceptional results. The team is professional, responsive, and always goes the extra mile.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=professional%20bangladeshi%20businessman%20in%20formal%20attire%20standing%20confidently%20in%20modern%20office%20with%20clean%20white%20background%20natural%20lighting%20corporate%20portrait%20style&width=400&height=400&seq=test001&orientation=squarish',
      date: 'March 2024',
      service: 'Import/Export'
    },
    {
      id: 2,
      name: 'Fatima Khatun',
      role: 'Student',
      company: 'University of Toronto',
      text: 'Thanks to their scholarship guidance, I am now studying at my dream university in Canada. The counselors were patient, knowledgeable, and helped me every step of the way. They made the entire application process stress-free and I could not have done it without their support.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=young%20bangladeshi%20female%20student%20wearing%20hijab%20smiling%20warmly%20holding%20books%20in%20university%20campus%20with%20clean%20bright%20background%20natural%20daylight%20educational%20portrait&width=400&height=400&seq=test002&orientation=squarish',
      date: 'February 2024',
      service: 'Education'
    },
    {
      id: 3,
      name: 'Karim Hassan',
      role: 'Entrepreneur',
      company: 'Hassan Trading Co.',
      text: 'Their sourcing services helped us find quality suppliers at competitive prices. Excellent service and support throughout the entire process. The team understood our requirements perfectly and delivered beyond our expectations. Highly recommend their services!',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=confident%20bangladeshi%20entrepreneur%20in%20business%20casual%20attire%20standing%20in%20modern%20warehouse%20with%20clean%20minimalist%20background%20professional%20lighting%20corporate%20style&width=400&height=400&seq=test003&orientation=squarish',
      date: 'March 2024',
      service: 'Sourcing'
    },
    {
      id: 4,
      name: 'Nadia Islam',
      role: 'Traveler',
      company: 'Self-employed',
      text: 'Best visa processing service! They handled everything professionally and my visa was approved quickly. The staff was incredibly helpful and kept me informed throughout the entire process. I felt confident and supported from start to finish.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=happy%20bangladeshi%20woman%20in%20elegant%20casual%20wear%20holding%20passport%20smiling%20at%20airport%20with%20clean%20bright%20background%20natural%20lighting%20travel%20portrait%20style&width=400&height=400&seq=test004&orientation=squarish',
      date: 'March 2024',
      service: 'Visa Processing'
    },
    {
      id: 5,
      name: 'Rashid Ali',
      role: 'Importer',
      company: 'Ali International',
      text: 'Professional team with great knowledge of customs procedures. Made our first import experience hassle-free. They guided us through every step and ensured all documentation was perfect. Their attention to detail is remarkable.',
      rating: 4,
      image: 'https://readdy.ai/api/search-image?query=professional%20bangladeshi%20businessman%20in%20formal%20suit%20standing%20near%20shipping%20containers%20with%20clean%20industrial%20background%20natural%20daylight%20corporate%20portrait&width=400&height=400&seq=test005&orientation=squarish',
      date: 'February 2024',
      service: 'Import/Export'
    },
    {
      id: 6,
      name: 'Sadia Begum',
      role: 'Parent',
      company: 'N/A',
      text: 'My daughter got admission to her dream university with their help. The education consultants were amazing and provided excellent guidance throughout the application process. They truly care about their clients success.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=middle%20aged%20bangladeshi%20woman%20in%20traditional%20saree%20smiling%20warmly%20in%20home%20setting%20with%20clean%20bright%20background%20natural%20lighting%20family%20portrait%20style&width=400&height=400&seq=test006&orientation=squarish',
      date: 'January 2024',
      service: 'Education'
    },
    {
      id: 7,
      name: 'Mohammad Hasan',
      role: 'Business Manager',
      company: 'Hasan Group',
      text: 'Outstanding service for product sourcing from China. They found exactly what we needed at great prices. The quality control and shipping coordination were flawless. Will definitely use their services again.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=professional%20bangladeshi%20business%20manager%20in%20formal%20attire%20standing%20in%20modern%20office%20with%20clean%20white%20background%20natural%20lighting%20corporate%20portrait&width=400&height=400&seq=test007&orientation=squarish',
      date: 'March 2024',
      service: 'Sourcing'
    },
    {
      id: 8,
      name: 'Ayesha Siddique',
      role: 'Student',
      company: 'University of Melbourne',
      text: 'The visa processing was smooth and efficient. Got my student visa approved without any issues. The team was very professional and kept me updated at every stage. Thank you for making my dream come true!',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=young%20bangladeshi%20female%20student%20in%20modern%20casual%20wear%20smiling%20confidently%20in%20university%20library%20with%20clean%20bright%20background%20natural%20daylight&width=400&height=400&seq=test008&orientation=squarish',
      date: 'February 2024',
      service: 'Visa Processing'
    },
    {
      id: 9,
      name: 'Tariq Mahmud',
      role: 'Retailer',
      company: 'Mahmud Electronics',
      text: 'Excellent import consultation services. They helped us navigate complex customs regulations with ease. Their expertise saved us time and money. Highly professional and reliable team.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=confident%20bangladeshi%20retailer%20in%20business%20casual%20standing%20in%20electronics%20store%20with%20clean%20modern%20background%20natural%20lighting%20professional%20portrait&width=400&height=400&seq=test009&orientation=squarish',
      date: 'January 2024',
      service: 'Import/Export'
    },
    {
      id: 10,
      name: 'Rukhsana Akter',
      role: 'Entrepreneur',
      company: 'Akter Fashion',
      text: 'Their sourcing team helped us find the best fabric suppliers. Quality products at competitive prices. The entire process was transparent and efficient. Could not ask for better service!',
      rating: 4,
      image: 'https://readdy.ai/api/search-image?query=elegant%20bangladeshi%20female%20entrepreneur%20in%20stylish%20business%20attire%20standing%20in%20fashion%20boutique%20with%20clean%20bright%20background%20natural%20lighting%20professional%20portrait&width=400&height=400&seq=test010&orientation=squarish',
      date: 'March 2024',
      service: 'Sourcing'
    },
    {
      id: 11,
      name: 'Imran Khan',
      role: 'Student',
      company: 'University of Sydney',
      text: 'Got my scholarship with their expert guidance. The counselors were very supportive and knowledgeable. They helped me prepare a strong application and I am now studying in Australia. Forever grateful!',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=young%20bangladeshi%20male%20student%20in%20casual%20wear%20smiling%20happily%20holding%20laptop%20in%20university%20campus%20with%20clean%20bright%20background%20natural%20daylight&width=400&height=400&seq=test011&orientation=squarish',
      date: 'February 2024',
      service: 'Education'
    },
    {
      id: 12,
      name: 'Nasrin Sultana',
      role: 'Business Owner',
      company: 'Sultana Imports',
      text: 'Professional and reliable import services. They handled all the paperwork and logistics perfectly. The team is experienced and trustworthy. We have been working together for years and they never disappoint.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=professional%20bangladeshi%20businesswoman%20in%20formal%20business%20suit%20standing%20confidently%20in%20modern%20office%20with%20clean%20white%20background%20natural%20lighting&width=400&height=400&seq=test012&orientation=squarish',
      date: 'January 2024',
      service: 'Import/Export'
    }
  ];

  const services = ['all', 'Import/Export', 'Education', 'Sourcing', 'Visa Processing'];

  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.service === filter);

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: 'ri-user-smile-line' },
    { number: '98%', label: 'Success Rate', icon: 'ri-trophy-line' },
    { number: '15+', label: 'Years Experience', icon: 'ri-time-line' },
    { number: '4.9/5', label: 'Average Rating', icon: 'ri-star-line' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-blue-600/5 to-pink-600/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              <i className="ri-chat-quote-line text-lg"></i>
              <span>Client Success Stories</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Real experiences from real people who have trusted us with their business, education, and travel needs. Read their success stories and see why we are the preferred choice.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <i className={`${stat.icon} text-3xl text-white`}></i>
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-purple-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((service) => (
              <button
                key={service}
                onClick={() => setFilter(service)}
                className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  filter === service
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {service === 'all' ? 'All Services' : service}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-purple-200"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-4 border-purple-100">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-blue-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-purple-600 font-semibold">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 flex items-center justify-center">
                      <i
                        className={`${
                          i < testimonial.rating
                            ? 'ri-star-fill text-yellow-400'
                            : 'ri-star-line text-gray-300'
                        } text-lg`}
                      ></i>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">{testimonial.date}</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Join hundreds of satisfied clients who have achieved their goals with our expert guidance and support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-purple-600 rounded-lg font-bold text-lg hover:shadow-2xl transition-all whitespace-nowrap cursor-pointer"
              >
                Get Started Today
              </a>
              <a
                href="/services"
                className="px-8 py-4 bg-purple-700/50 text-white rounded-lg font-bold text-lg hover:bg-purple-700 transition-all whitespace-nowrap cursor-pointer border-2 border-white/30"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
