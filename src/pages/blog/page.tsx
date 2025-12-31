import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import { useSEO, generateWebPageSchema } from '../../utils/seo';

export default function Blog() {
  // SEO
  useSEO({
    title: 'Blog - International Trade Education Travel Tips | Miftah Edu-Trade Hub',
    description: 'Stay updated with expert advice, industry trends, and practical tips for international trade, education, and travel. Read articles about scholarships, visa applications, import-export regulations, and more.',
    keywords: 'international trade blog, education abroad tips, visa application guide, scholarship opportunities, import export articles, travel advice Nigeria',
    canonical: '/blog',
    ogType: 'blog',
    schema: generateWebPageSchema(
      'Blog - News & Insights',
      'Expert advice, industry trends, and practical tips for international trade, education, and travel',
      '/blog'
    )
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Education', 'Trade', 'Travel', 'Finance', 'Visa'];

  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Countries for International Students in 2024',
      excerpt: 'Discover the best destinations for higher education with excellent scholarship opportunities and post-study work options for international students.',
      image: 'https://readdy.ai/api/search-image?query=diverse%20international%20students%20studying%20together%20in%20modern%20university%20library%20with%20laptops%20and%20books%20bright%20natural%20lighting%20multicultural%20education%20environment%20clean%20professional%20photography&width=600&height=400&seq=blog1&orientation=landscape',
      category: 'Education',
      date: 'March 15, 2024',
      readTime: '5 min read',
      author: 'Dr. Sarah Ahmed',
      authorImage: 'https://readdy.ai/api/search-image?query=professional%20female%20education%20consultant%20wearing%20glasses%20friendly%20smile%20modern%20office%20background%20corporate%20headshot%20clean%20photography&width=100&height=100&seq=author1&orientation=squarish'
    },
    {
      id: 2,
      title: 'Understanding Import-Export Regulations in Bangladesh',
      excerpt: 'A comprehensive guide to navigating customs procedures, documentation requirements, and compliance standards for successful international trade.',
      image: 'https://readdy.ai/api/search-image?query=modern%20cargo%20port%20with%20shipping%20containers%20international%20trade%20logistics%20customs%20clearance%20professional%20business%20environment%20blue%20sky%20clean%20organized%20warehouse&width=600&height=400&seq=blog2&orientation=landscape',
      category: 'Trade',
      date: 'March 12, 2024',
      readTime: '7 min read',
      author: 'Mohammad Karim',
      authorImage: 'https://readdy.ai/api/search-image?query=professional%20male%20trade%20consultant%20formal%20business%20attire%20confident%20expression%20modern%20office%20background%20corporate%20headshot%20photography&width=100&height=100&seq=author2&orientation=squarish'
    },
    {
      id: 3,
      title: 'Visa Application Tips: Avoiding Common Mistakes',
      excerpt: 'Learn from experts about the most common visa application errors and how to ensure your application is approved on the first attempt.',
      image: 'https://readdy.ai/api/search-image?query=passport%20with%20visa%20stamps%20travel%20documents%20on%20desk%20professional%20office%20setting%20international%20travel%20planning%20clean%20organized%20workspace%20natural%20lighting&width=600&height=400&seq=blog3&orientation=landscape',
      category: 'Travel',
      date: 'March 8, 2024',
      readTime: '6 min read',
      author: 'Fatima Rahman',
      authorImage: 'https://readdy.ai/api/search-image?query=professional%20female%20travel%20consultant%20wearing%20hijab%20warm%20smile%20modern%20office%20background%20corporate%20headshot%20clean%20photography&width=100&height=100&seq=author3&orientation=squarish'
    },
    {
      id: 4,
      title: 'Currency Exchange: Best Practices for International Transfers',
      excerpt: 'Maximize your money transfers with expert tips on timing, exchange rates, and choosing the right service for your international transactions.',
      image: 'https://readdy.ai/api/search-image?query=international%20currency%20exchange%20money%20transfer%20digital%20banking%20financial%20technology%20modern%20office%20professional%20business%20environment%20clean%20minimalist%20design&width=600&height=400&seq=blog4&orientation=landscape',
      category: 'Finance',
      date: 'March 5, 2024',
      readTime: '4 min read',
      author: 'Ahmed Hassan',
      authorImage: 'https://readdy.ai/api/search-image?query=professional%20male%20financial%20advisor%20formal%20suit%20confident%20smile%20modern%20office%20background%20corporate%20headshot%20photography&width=100&height=100&seq=author4&orientation=squarish'
    },
    {
      id: 5,
      title: 'Scholarship Opportunities in Europe for 2024-2025',
      excerpt: 'Explore fully-funded and partially-funded scholarship programs available for international students planning to study in European universities.',
      image: 'https://readdy.ai/api/search-image?query=beautiful%20european%20university%20campus%20with%20historic%20architecture%20students%20walking%20bright%20sunny%20day%20academic%20environment%20clean%20professional%20photography&width=600&height=400&seq=blog5&orientation=landscape',
      category: 'Education',
      date: 'March 1, 2024',
      readTime: '8 min read',
      author: 'Dr. Sarah Ahmed',
      authorImage: 'https://readdy.ai/api/search-image?query=professional%20female%20education%20consultant%20wearing%20glasses%20friendly%20smile%20modern%20office%20background%20corporate%20headshot%20clean%20photography&width=100&height=100&seq=author1&orientation=squarish'
    },
    {
      id: 6,
      title: 'How to Source Quality Products from China',
      excerpt: 'A step-by-step guide to finding reliable suppliers, conducting quality checks, and managing your sourcing operations in Chinese markets.',
      image: 'https://readdy.ai/api/search-image?query=modern%20chinese%20manufacturing%20facility%20with%20quality%20control%20inspection%20professional%20industrial%20environment%20organized%20production%20line%20clean%20bright%20lighting&width=600&height=400&seq=blog6&orientation=landscape',
      category: 'Trade',
      date: 'February 28, 2024',
      readTime: '9 min read',
      author: 'Mohammad Karim',
      authorImage: 'https://readdy.ai/api/search-image?query=professional%20male%20trade%20consultant%20formal%20business%20attire%20confident%20expression%20modern%20office%20background%20corporate%20headshot%20photography&width=100&height=100&seq=author2&orientation=squarish'
    },
    {
      id: 7,
      title: 'Student Visa Requirements for Canada in 2024',
      excerpt: 'Complete guide to Canadian student visa application process, required documents, financial proof, and tips for successful approval.',
      image: 'https://readdy.ai/api/search-image?query=canadian%20flag%20with%20university%20campus%20background%20international%20students%20diverse%20group%20modern%20educational%20setting%20bright%20natural%20lighting%20professional%20photography&width=600&height=400&seq=blog7&orientation=landscape',
      category: 'Visa',
      date: 'February 25, 2024',
      readTime: '7 min read',
      author: 'Fatima Rahman',
      authorImage: 'https://readdy.ai/api/search-image?query=professional%20female%20travel%20consultant%20wearing%20hijab%20warm%20smile%20modern%20office%20background%20corporate%20headshot%20clean%20photography&width=100&height=100&seq=author3&orientation=squarish'
    },
    {
      id: 8,
      title: 'Best Time to Book International Flights',
      excerpt: 'Save money on your international travel by learning the optimal booking windows, seasonal trends, and insider tips from travel experts.',
      image: 'https://readdy.ai/api/search-image?query=modern%20airplane%20taking%20off%20during%20golden%20hour%20sunset%20beautiful%20sky%20commercial%20aviation%20international%20travel%20professional%20photography&width=600&height=400&seq=blog8&orientation=landscape',
      category: 'Travel',
      date: 'February 22, 2024',
      readTime: '5 min read',
      author: 'Fatima Rahman',
      authorImage: 'https://readdy.ai/api/search-image?query=professional%20female%20travel%20consultant%20wearing%20hijab%20warm%20smile%20modern%20office%20background%20corporate%20headshot%20clean%20photography&width=100&height=100&seq=author3&orientation=squarish'
    },
    {
      id: 9,
      title: 'Understanding Trade Finance and Payment Terms',
      excerpt: 'Navigate the complexities of international trade finance including letters of credit, payment terms, and risk mitigation strategies.',
      image: 'https://readdy.ai/api/search-image?query=business%20professionals%20reviewing%20financial%20documents%20international%20trade%20contracts%20modern%20office%20setting%20professional%20corporate%20environment%20clean%20lighting&width=600&height=400&seq=blog9&orientation=landscape',
      category: 'Finance',
      date: 'February 18, 2024',
      readTime: '10 min read',
      author: 'Ahmed Hassan',
      authorImage: 'https://readdy.ai/api/search-image?query=professional%20male%20financial%20advisor%20formal%20suit%20confident%20smile%20modern%20office%20background%20corporate%20headshot%20photography&width=100&height=100&seq=author4&orientation=squarish'
    },
    {
      id: 10,
      title: 'Study in Australia: Universities and Scholarships Guide',
      excerpt: 'Comprehensive overview of top Australian universities, available scholarships, living costs, and post-study work opportunities for international students.',
      image: 'https://readdy.ai/api/search-image?query=iconic%20australian%20university%20campus%20with%20modern%20architecture%20blue%20sky%20sunny%20day%20students%20on%20campus%20international%20education%20environment%20professional%20photography&width=600&height=400&seq=blog10&orientation=landscape',
      category: 'Education',
      date: 'February 15, 2024',
      readTime: '11 min read',
      author: 'Dr. Sarah Ahmed',
      authorImage: 'https://readdy.ai/api/search-image?query=professional%20female%20education%20consultant%20wearing%20glasses%20friendly%20smile%20modern%20office%20background%20corporate%20headshot%20clean%20photography&width=100&height=100&seq=author1&orientation=squarish'
    },
    {
      id: 11,
      title: 'Export Documentation Checklist for Beginners',
      excerpt: 'Essential documents needed for exporting goods internationally, including commercial invoices, packing lists, and certificates of origin.',
      image: 'https://readdy.ai/api/search-image?query=organized%20export%20documents%20and%20paperwork%20on%20desk%20with%20stamps%20and%20seals%20professional%20business%20setting%20international%20trade%20documentation%20clean%20workspace&width=600&height=400&seq=blog11&orientation=landscape',
      category: 'Trade',
      date: 'February 12, 2024',
      readTime: '6 min read',
      author: 'Mohammad Karim',
      authorImage: 'https://readdy.ai/api/search-image?query=professional%20male%20trade%20consultant%20formal%20business%20attire%20confident%20expression%20modern%20office%20background%20corporate%20headshot%20photography&width=100&height=100&seq=author2&orientation=squarish'
    },
    {
      id: 12,
      title: 'Digital Nomad Visas: Work While You Travel',
      excerpt: 'Explore countries offering digital nomad visas, requirements, benefits, and how to maintain your career while experiencing new cultures.',
      image: 'https://readdy.ai/api/search-image?query=digital%20nomad%20working%20on%20laptop%20at%20beautiful%20beach%20location%20tropical%20paradise%20remote%20work%20lifestyle%20professional%20photography%20bright%20natural%20lighting&width=600&height=400&seq=blog12&orientation=landscape',
      category: 'Visa',
      date: 'February 8, 2024',
      readTime: '8 min read',
      author: 'Fatima Rahman',
      authorImage: 'https://readdy.ai/api/search-image?query=professional%20female%20travel%20consultant%20wearing%20hijab%20warm%20smile%20modern%20office%20background%20corporate%20headshot%20clean%20photography&width=100&height=100&seq=author3&orientation=squarish'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />

      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">News &amp; Insights</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay informed with expert advice, industry trends, and practical tips for international trade, education, and travel
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-14 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-yellow-400 transition-all text-base"
              />
              <i className="ri-search-line absolute left-5 top-1/2 -translate-y-1/2 text-2xl text-blue-200"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Featured Article</h2>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-96 lg:h-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-yellow-400 text-blue-900 text-sm font-bold rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-900 text-sm font-semibold rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-gray-500">{featuredPost.date}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-blue-900 mb-4 group-hover:text-yellow-600 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={featuredPost.authorImage}
                        alt={featuredPost.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-blue-900">{featuredPost.author}</p>
                        <p className="text-sm text-gray-500">{featuredPost.readTime}</p>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg font-semibold hover:shadow-xl transition-all whitespace-nowrap cursor-pointer"
                    >
                      Read Article
                      <i className="ri-arrow-right-line ml-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-blue-900">
              {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
              <span className="text-gray-500 text-xl ml-3">({filteredPosts.length})</span>
            </h2>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <i className="ri-file-search-line text-6xl text-gray-300 mb-4"></i>
              <p className="text-xl text-gray-500">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                  <div className="relative h-56 overflow-hidden">
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
                    <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-sm font-semibold text-gray-700">{post.author}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-900 font-semibold hover:text-yellow-600 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Read
                        <i className="ri-arrow-right-line ml-1"></i>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <i className="ri-mail-line text-6xl mb-6"></i>
          <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest articles, tips, and insights delivered directly to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 rounded-lg font-semibold hover:shadow-xl transition-all whitespace-nowrap cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
