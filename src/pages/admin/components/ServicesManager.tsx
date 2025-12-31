
import { useState } from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  status: 'active' | 'inactive';
}

export default function ServicesManager() {
  const [services, setServices] = useState<Service[]>([
    { id: 'import-export', title: 'Import & Export Solutions', description: 'Seamless international trade services', icon: 'ri-ship-line', status: 'active' },
    { id: 'education', title: 'Global Education & Scholarships', description: 'Expert guidance for studying abroad', icon: 'ri-graduation-cap-line', status: 'active' },
    { id: 'currency-exchange', title: 'Currency Exchange & Remittance', description: 'Competitive rates for currency exchange', icon: 'ri-exchange-dollar-line', status: 'active' },
    { id: 'sourcing', title: 'Goods & Services Sourcing', description: 'Professional sourcing solutions', icon: 'ri-shopping-bag-line', status: 'active' },
    { id: 'travel', title: 'Flights & Hotel Bookings', description: 'Best deals on international flights', icon: 'ri-flight-takeoff-line', status: 'active' },
    { id: 'visa', title: 'Visa Processing & Travel Advisory', description: 'Complete visa assistance', icon: 'ri-passport-line', status: 'active' },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: ''
  });

  const toggleStatus = (id: string) => {
    setServices(services.map(service =>
      service.id === id ? { ...service, status: service.status === 'active' ? 'inactive' : 'active' } : service
    ));
  };

  const deleteService = (id: string) => {
    try {
      if (window.confirm('Are you sure you want to delete this service?')) {
        setServices(services.filter(service => service.id !== id));
      }
    } catch (error) {
      console.error('Error deleting service:', error);
      alert('Failed to delete service. Please try again.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingService) {
        // Update existing service
        setServices(services.map(service =>
          service.id === editingService.id
            ? { ...service, ...formData }
            : service
        ));
      } else {
        // Add new service
        const newService: Service = {
          id: `service-${Date.now()}`,
          ...formData,
          status: 'active'
        };
        setServices([...services, newService]);
      }
      
      // Reset form and close modal
      setFormData({ title: '', description: '', icon: '' });
      setShowAddModal(false);
      setEditingService(null);
    } catch (error) {
      console.error('Error saving service:', error);
      alert('Failed to save service. Please try again.');
    }
  };

  const handleEditClick = (service: Service) => {
    setEditingService(service);
    setFormData({
      title: service.title,
      description: service.description,
      icon: service.icon
    });
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
    setEditingService(null);
    setFormData({ title: '', description: '', icon: '' });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-900">Manage Services</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all whitespace-nowrap cursor-pointer flex items-center space-x-2"
        >
          <i className="ri-add-line text-xl"></i>
          <span>Add New Service</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className={`${service.icon} text-2xl text-blue-600`}></i>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                service.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
              }`}>
                {service.status}
              </span>
            </div>
            <h3 className="text-lg font-bold text-blue-900 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEditClick(service)}
                className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-edit-line mr-1"></i>
                Edit
              </button>
              <button
                onClick={() => toggleStatus(service.id)}
                className="flex-1 px-4 py-2 bg-yellow-50 text-yellow-600 rounded-lg hover:bg-yellow-100 transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-toggle-line mr-1"></i>
                Toggle
              </button>
              <button
                onClick={() => deleteService(service.id)}
                className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors cursor-pointer"
              >
                <i className="ri-delete-bin-line"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {(showAddModal || editingService) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              {editingService ? 'Edit Service' : 'Add New Service'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Service Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter service title"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter service description"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Icon Class</label>
                <input
                  type="text"
                  value={formData.icon}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., ri-ship-line"
                  required
                />
              </div>
              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
                >
                  {editingService ? 'Update Service' : 'Add Service'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
