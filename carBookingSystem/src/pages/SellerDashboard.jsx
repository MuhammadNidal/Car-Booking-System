import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  PlusIcon, 
  TrashIcon, 
  PencilIcon, 
  EyeIcon,
  UserCircleIcon,
  TruckIcon,
  CurrencyDollarIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

export default function SellerDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('listings');
  const [myListings, setMyListings] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(null);
  const [form, setForm] = useState({ 
    title: '', 
    price: '', 
    specsSubtitle: '', 
    mileage: '', 
    fuelType: '', 
    transmission: '', 
    imageUrl: '', 
    description: '', 
    location: '',
    year: '',
    make: '',
    isNew: true 
  });

  useEffect(() => {
    const raw = localStorage.getItem('sellerUser');
    if (!raw) {
      navigate('/');
      return;
    }
    setUser(JSON.parse(raw));
    loadMyListings();
  }, [navigate]);

  const loadMyListings = () => {
    const allCars = JSON.parse(localStorage.getItem('cars') || '[]');
    // Filter cars by seller (in a real app, you'd have seller IDs)
    // For demo, we'll show all cars
    setMyListings(allCars);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const resetForm = () => {
    setForm({
      title: '', price: '', specsSubtitle: '', mileage: '', fuelType: '', 
      transmission: '', imageUrl: '', description: '', location: '', year: '', make: '', isNew: true
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cars = JSON.parse(localStorage.getItem('cars') || '[]');
    const newCar = { 
      ...form, 
      id: Date.now(), // Use timestamp as ID
      price: `₨${Number(form.price || 0).toLocaleString()}`,
      sellerId: user?.email,
      sellerName: user?.name || user?.email,
      createdAt: Date.now(),
      type: form.isNew ? 'new' : 'used',
      featured: Math.random() > 0.5, // Random featured status
      image: form.imageUrl || 'https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Car+Image'
    };
    cars.unshift(newCar);
    localStorage.setItem('cars', JSON.stringify(cars));
    setActiveTab('listings'); // Switch to listings tab after adding
    resetForm();
    loadMyListings();
    alert('Car listed successfully!');
  };

  const handleDelete = (carId) => {
    const cars = JSON.parse(localStorage.getItem('cars') || '[]');
    const updatedCars = cars.filter(car => String(car.id) !== String(carId));
    localStorage.setItem('cars', JSON.stringify(updatedCars));
    
    // Also remove from wishlist and booked cars
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const bookedCars = JSON.parse(localStorage.getItem('bookedCars') || '[]');
    
    const updatedWishlist = wishlist.filter(id => String(id) !== String(carId));
    const updatedBooked = bookedCars.filter(car => String(car.id) !== String(carId));
    
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    localStorage.setItem('bookedCars', JSON.stringify(updatedBooked));
    
    setShowDeleteModal(null);
    loadMyListings();
    alert('Car listing deleted successfully!');
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('sellerUser');
      navigate('/');
    }
  };

  if (!user) return null;

  // Calculate total value safely
  const totalValue = myListings.reduce((sum, car) => {
    if (!car.price) return sum;
    // Handle both string and number prices
    const priceValue = typeof car.price === 'string' 
      ? parseFloat(car.price.replace(/[₨,]/g, '')) 
      : parseFloat(car.price);
    return sum + (isNaN(priceValue) ? 0 : priceValue);
  }, 0);

  const stats = [
    { name: 'Total Listings', value: myListings.length, icon: TruckIcon, color: 'bg-blue-500' },
    { name: 'Active Listings', value: myListings.length, icon: ChartBarIcon, color: 'bg-green-500' },
    { name: 'Total Value', value: `₨${totalValue.toLocaleString()}`, icon: CurrencyDollarIcon, color: 'bg-purple-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <UserCircleIcon className="h-10 w-10 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Seller Dashboard</h1>
                <p className="text-gray-600">Welcome back, {user?.name || user?.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="text-red-600 hover:text-red-700 font-medium transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab('listings')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'listings'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                My Listings ({myListings.length})
              </button>
              <button
                onClick={() => setActiveTab('add')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'add'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Add New Listing
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'listings' && (
              <div>
                {myListings.length === 0 ? (
                  <div className="text-center py-12">
                    <TruckIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No listings yet</h3>
                    <p className="text-gray-600 mb-6">Create your first car listing to get started</p>
                    <button
                      onClick={() => setActiveTab('add')}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Add Your First Car
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {myListings.map((car) => (
                      <div key={car.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative">
                          <img 
                            src={car.image || car.imageUrl || 'https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Car+Image'} 
                            alt={car.title}
                            className="w-full h-48 object-cover"
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Car+Image';
                            }}
                          />
                          <div className="absolute top-3 left-3">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              car.type === 'new' || car.isNew
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {car.type === 'new' || car.isNew ? 'New' : 'Used'}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
                            {car.title}
                          </h3>
                          <p className="text-xl font-bold text-blue-600 mb-3">
                            {car.price}
                          </p>
                          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                            {car.specsSubtitle || car.description || 'No description available'}
                          </p>
                          
                          <div className="flex gap-2">
                            <Link
                              to={`/cars/${car.id}`}
                              className="flex-1 bg-blue-600 text-white text-center py-2 px-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                            >
                              View Details
                            </Link>
                            <button
                              onClick={() => setShowDeleteModal(car.id)}
                              className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                              title="Delete listing"
                            >
                              <TrashIcon className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'add' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Add New Car Listing</h3>
                  <PlusIcon className="h-6 w-6 text-blue-600" />
                </div>
                
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Car Title *</label>
                    <input 
                      name="title" 
                      value={form.title} 
                      onChange={handleChange} 
                      placeholder="e.g., Toyota Corolla GLi 2022"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price (PKR) *</label>
                    <input 
                      name="price" 
                      type="number"
                      value={form.price} 
                      onChange={handleChange} 
                      placeholder="2500000"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Year *</label>
                    <input 
                      name="year" 
                      type="number"
                      value={form.year} 
                      onChange={handleChange} 
                      placeholder="2022"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Make *</label>
                    <input 
                      name="make" 
                      value={form.make} 
                      onChange={handleChange} 
                      placeholder="Toyota"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mileage</label>
                    <input 
                      name="mileage" 
                      value={form.mileage} 
                      onChange={handleChange} 
                      placeholder="25,000 km"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
                    <select 
                      name="fuelType" 
                      value={form.fuelType} 
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Fuel Type</option>
                      <option value="Petrol">Petrol</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="Electric">Electric</option>
                      <option value="CNG">CNG</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Transmission</label>
                    <select 
                      name="transmission" 
                      value={form.transmission} 
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Transmission</option>
                      <option value="Manual">Manual</option>
                      <option value="Automatic">Automatic</option>
                      <option value="CVT">CVT</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <input 
                      name="location" 
                      value={form.location} 
                      onChange={handleChange} 
                      placeholder="Karachi"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                    <input 
                      name="imageUrl" 
                      value={form.imageUrl} 
                      onChange={handleChange} 
                      placeholder="https://example.com/car-image.jpg"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea 
                      name="description" 
                      value={form.description} 
                      onChange={handleChange} 
                      placeholder="Describe your car's condition, features, and any other relevant details..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={4}
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        name="isNew" 
                        checked={form.isNew} 
                        onChange={handleChange}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium text-gray-700">Mark as New Car</span>
                    </label>
                  </div>

                  <div className="md:col-span-2 flex gap-4">
                    <button 
                      className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors" 
                      type="submit"
                    >
                      List Car
                    </button>
                    <button 
                      type="button" 
                      onClick={resetForm}
                      className="px-8 py-3 rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
                    >
                      Reset Form
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <TrashIcon className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Delete Car Listing</h3>
                <p className="text-sm text-gray-600">This action cannot be undone</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this car listing? This will remove it from all listings and any user wishlists or bookings.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(null)}
                className="flex-1 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(showDeleteModal)}
                className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
