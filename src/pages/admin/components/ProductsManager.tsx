import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  specifications: string[];
  status: 'active' | 'inactive';
}

export default function ProductsManager() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Heavy Duty Cargo Truck',
      category: 'Trucks',
      price: 45000,
      description: 'Professional cargo transportation with maximum payload capacity',
      image: 'https://readdy.ai/api/search-image?query=modern%20heavy%20duty%20cargo%20truck%20professional%20commercial%20vehicle%20blue%20sky%20background%20high%20quality%20detailed%20realistic&width=800&height=600&seq=truck1&orientation=landscape',
      specifications: ['Payload: 20 tons', 'Engine: 400HP', 'Transmission: Manual'],
      status: 'active'
    },
    {
      id: 2,
      name: 'Commercial Tipper Truck',
      category: 'Tippers',
      price: 52000,
      description: 'Heavy-duty tipper for construction and mining operations',
      image: 'https://readdy.ai/api/search-image?query=commercial%20tipper%20truck%20construction%20vehicle%20dumper%20truck%20professional%20industrial%20equipment%20simple%20background&width=800&height=600&seq=tipper1&orientation=landscape',
      specifications: ['Capacity: 25 cubic meters', 'Hydraulic system', '6x4 configuration'],
      status: 'active'
    },
    {
      id: 3,
      name: 'Agricultural Tractor 4WD',
      category: 'Tractors',
      price: 28000,
      description: 'Powerful 4-wheel drive tractor for all farming needs',
      image: 'https://readdy.ai/api/search-image?query=modern%20agricultural%20tractor%20farming%20equipment%20green%20field%20professional%20machinery%20simple%20background%20high%20quality&width=800&height=600&seq=tractor1&orientation=landscape',
      specifications: ['Power: 120HP', '4WD', 'PTO: 540/1000 RPM'],
      status: 'active'
    },
    {
      id: 4,
      name: 'Electric City Bike Pro',
      category: 'Electric Bikes',
      price: 1200,
      description: 'Eco-friendly electric bike perfect for urban commuting',
      image: 'https://readdy.ai/api/search-image?query=modern%20electric%20bike%20urban%20transportation%20eco%20friendly%20sleek%20design%20simple%20clean%20background%20professional%20product%20photography&width=800&height=600&seq=ebike1&orientation=landscape',
      specifications: ['Range: 80km', 'Max Speed: 25km/h', 'Battery: 48V 15Ah'],
      status: 'active'
    },
    {
      id: 5,
      name: 'Smartphone Pro Max',
      category: 'Phones',
      price: 899,
      description: 'Latest flagship smartphone with advanced features',
      image: 'https://readdy.ai/api/search-image?query=premium%20flagship%20smartphone%20modern%20mobile%20phone%20sleek%20design%20simple%20clean%20white%20background%20professional%20product%20photography&width=800&height=600&seq=phone1&orientation=landscape',
      specifications: ['Display: 6.7" OLED', 'Camera: 108MP', 'RAM: 12GB'],
      status: 'active'
    }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = ['all', 'Trucks', 'Tippers', 'Tractors', 'Electric Bikes', 'Phones'];

  const toggleStatus = (id: number) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, status: product.status === 'active' ? 'inactive' : 'active' } : product
    ));
  };

  const deleteProduct = (id: number) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const category = formData.get('category') as string;
    const price = parseFloat(formData.get('price') as string);
    const description = formData.get('description') as string;
    const image = formData.get('image') as string;
    const specsInput = formData.get('specifications') as string;
    const specifications = specsInput.split('\n').filter(spec => spec.trim() !== '');

    if (!name || !category || !price || !description || !image) {
      alert('Please fill in all required fields');
      return;
    }

    if (editingProduct) {
      setProducts(products.map(product =>
        product.id === editingProduct.id
          ? { ...product, name, category, price, description, image, specifications }
          : product
      ));
    } else {
      const newProduct: Product = {
        id: Date.now(),
        name,
        category,
        price,
        description,
        image,
        specifications,
        status: 'active'
      };
      setProducts([...products, newProduct]);
    }

    setShowAddModal(false);
    setEditingProduct(null);
  };

  const filteredProducts = filterCategory === 'all' 
    ? products 
    : products.filter(product => product.category === filterCategory);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-900">Manage Products</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all whitespace-nowrap cursor-pointer flex items-center space-x-2"
        >
          <i className="ri-add-line text-xl"></i>
          <span>Add Product</span>
        </button>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap ${
              filterCategory === cat
                ? 'bg-yellow-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all">
            <div className="relative h-48 bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-3 left-3 flex space-x-2">
                <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
                  {product.category}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  product.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  {product.status}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-blue-900 mb-1">{product.name}</h3>
              <p className="text-2xl font-bold text-yellow-600 mb-2">${product.price.toLocaleString()}</p>
              <p className="text-gray-600 text-sm mb-3">{product.description}</p>
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-700 mb-1">Specifications:</p>
                <ul className="space-y-1">
                  {product.specifications.slice(0, 3).map((spec, index) => (
                    <li key={index} className="text-xs text-gray-600 flex items-start">
                      <i className="ri-check-line text-green-600 mr-1 mt-0.5"></i>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setEditingProduct(product)}
                  className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer text-sm whitespace-nowrap"
                >
                  <i className="ri-edit-line mr-1"></i>
                  Edit
                </button>
                <button
                  onClick={() => toggleStatus(product.id)}
                  className="flex-1 px-3 py-2 bg-yellow-50 text-yellow-600 rounded-lg hover:bg-yellow-100 transition-colors cursor-pointer text-sm whitespace-nowrap"
                >
                  <i className="ri-toggle-line mr-1"></i>
                  Toggle
                </button>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors cursor-pointer"
                >
                  <i className="ri-delete-bin-line"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {(showAddModal || editingProduct) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              {editingProduct ? 'Edit Product' : 'Add New Product'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Product Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={editingProduct?.name}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter product name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                <select
                  name="category"
                  defaultValue={editingProduct?.category}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                >
                  <option value="">Select category</option>
                  <option value="Trucks">Trucks</option>
                  <option value="Tippers">Tippers</option>
                  <option value="Tractors">Tractors</option>
                  <option value="Electric Bikes">Electric Bikes</option>
                  <option value="Phones">Phones</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Price ($)</label>
                <input
                  type="number"
                  name="price"
                  defaultValue={editingProduct?.price}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter price"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  defaultValue={editingProduct?.description}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Brief product description"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Image URL</label>
                <input
                  type="url"
                  name="image"
                  defaultValue={editingProduct?.image}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter image URL"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Specifications (one per line)</label>
                <textarea
                  name="specifications"
                  defaultValue={editingProduct?.specifications.join('\n')}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter specifications, one per line"
                ></textarea>
              </div>
              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingProduct(null);
                  }}
                  className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
                >
                  {editingProduct ? 'Update Product' : 'Add Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
