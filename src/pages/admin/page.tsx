import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ServicesManager from './components/ServicesManager';
import BlogsManager from './components/BlogsManager';
import MessagesManager from './components/MessagesManager';
import TestimonialsManager from './components/TestimonialsManager';
import GalleryManager from './components/GalleryManager';
import ProductsManager from './components/ProductsManager';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'blogs' | 'messages' | 'testimonials' | 'gallery' | 'products'>('overview');

  const stats = [
    { icon: 'ri-service-line', label: 'Total Services', value: '6', color: 'from-blue-500 to-blue-600' },
    { icon: 'ri-article-line', label: 'Blog Posts', value: '12', color: 'from-green-500 to-green-600' },
    { icon: 'ri-mail-line', label: 'New Messages', value: '24', color: 'from-yellow-500 to-yellow-600' },
    { icon: 'ri-star-line', label: 'Testimonials', value: '18', color: 'from-purple-500 to-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your website content and monitor activity</p>
        </div>

        {activeTab === 'overview' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                  <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
                    <i className={`${stat.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-3xl font-bold text-blue-900 mb-1">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {[
                    { icon: 'ri-mail-line', text: 'New inquiry from Ahmed Rahman', time: '5 minutes ago', color: 'text-blue-600' },
                    { icon: 'ri-article-line', text: 'Blog post published: Visa Tips', time: '2 hours ago', color: 'text-green-600' },
                    { icon: 'ri-star-line', text: 'New testimonial received', time: '5 hours ago', color: 'text-yellow-600' },
                    { icon: 'ri-service-line', text: 'Service updated: Import & Export', time: '1 day ago', color: 'text-purple-600' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0">
                      <div className={`w-10 h-10 flex items-center justify-center ${activity.color}`}>
                        <i className={`${activity.icon} text-xl`}></i>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium">{activity.text}</p>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setActiveTab('services')}
                    className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-left transition-colors cursor-pointer"
                  >
                    <i className="ri-service-line text-2xl text-blue-600 mb-2 block"></i>
                    <p className="font-semibold text-blue-900">Manage Services</p>
                  </button>
                  <button
                    onClick={() => setActiveTab('blogs')}
                    className="p-4 bg-green-50 hover:bg-green-100 rounded-lg text-left transition-colors cursor-pointer"
                  >
                    <i className="ri-article-line text-2xl text-green-600 mb-2 block"></i>
                    <p className="font-semibold text-blue-900">Manage Blogs</p>
                  </button>
                  <button
                    onClick={() => setActiveTab('messages')}
                    className="p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg text-left transition-colors cursor-pointer"
                  >
                    <i className="ri-mail-line text-2xl text-yellow-600 mb-2 block"></i>
                    <p className="font-semibold text-blue-900">View Messages</p>
                  </button>
                  <button
                    onClick={() => setActiveTab('testimonials')}
                    className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-left transition-colors cursor-pointer"
                  >
                    <i className="ri-star-line text-2xl text-purple-600 mb-2 block"></i>
                    <p className="font-semibold text-blue-900">Testimonials</p>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6 overflow-x-auto" aria-label="Tabs">
              {[
                { id: 'overview', label: 'Overview', icon: 'ri-dashboard-line' },
                { id: 'services', label: 'Services', icon: 'ri-service-line' },
                { id: 'products', label: 'Products', icon: 'ri-shopping-bag-line' },
                { id: 'blogs', label: 'Blogs', icon: 'ri-article-line' },
                { id: 'messages', label: 'Messages', icon: 'ri-mail-line' },
                { id: 'testimonials', label: 'Testimonials', icon: 'ri-star-line' },
                { id: 'gallery', label: 'Gallery', icon: 'ri-gallery-line' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap cursor-pointer flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <i className={`${tab.icon} text-lg`}></i>
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'services' && <ServicesManager />}
            {activeTab === 'products' && <ProductsManager />}
            {activeTab === 'blogs' && <BlogsManager />}
            {activeTab === 'messages' && <MessagesManager />}
            {activeTab === 'testimonials' && <TestimonialsManager />}
            {activeTab === 'gallery' && <GalleryManager />}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
