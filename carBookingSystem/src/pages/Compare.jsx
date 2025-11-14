import { Link } from 'react-router-dom';
import { Leaf, Zap, DollarSign, Droplet, Clock, Battery, Gauge, Fuel } from 'lucide-react';

// Static comparison data - 6 cars (3 pairs)
const staticComparisons = [
  {
    id: 1,
    leftCar: {
      name: 'Tesla Model 3',
      type: 'Electric',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
      features: [
        { icon: Leaf, label: 'Eco-Friendly', value: 'Zero Emissions' },
        { icon: Zap, label: 'Charging', value: 'Slow Charging' },
        { icon: DollarSign, label: 'Savings', value: 'Low Running Cost' },
        { icon: Battery, label: 'Range', value: '350 km' }
      ]
    },
    rightCar: {
      name: 'Honda Civic',
      type: 'Gasoline',
      image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80',
      features: [
        { icon: Droplet, label: 'Emissions', value: 'CO2 Emissions' },
        { icon: Fuel, label: 'Fuel', value: 'Expensive Fuel' },
        { icon: Clock, label: 'Refuel', value: 'Quick Refuel' },
        { icon: Gauge, label: 'Range', value: '600 km' }
      ]
    }
  },
  {
    id: 2,
    leftCar: {
      name: 'Nissan Leaf',
      type: 'Electric',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
      features: [
        { icon: Leaf, label: 'Eco-Friendly', value: 'Zero Emissions' },
        { icon: Zap, label: 'Charging', value: 'Slow Charging' },
        { icon: DollarSign, label: 'Savings', value: 'Low Running Cost' },
        { icon: Battery, label: 'Range', value: '300 km' }
      ]
    },
    rightCar: {
      name: 'Toyota Corolla',
      type: 'Gasoline',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
      features: [
        { icon: Droplet, label: 'Emissions', value: 'CO2 Emissions' },
        { icon: Fuel, label: 'Fuel', value: 'Expensive Fuel' },
        { icon: Clock, label: 'Refuel', value: 'Quick Refuel' },
        { icon: Gauge, label: 'Range', value: '650 km' }
      ]
    }
  },
  {
    id: 3,
    leftCar: {
      name: 'BMW i4',
      type: 'Electric',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80',
      features: [
        { icon: Leaf, label: 'Eco-Friendly', value: 'Zero Emissions' },
        { icon: Zap, label: 'Charging', value: 'Slow Charging' },
        { icon: DollarSign, label: 'Savings', value: 'Low Running Cost' },
        { icon: Battery, label: 'Range', value: '400 km' }
      ]
    },
    rightCar: {
      name: 'BMW 3 Series',
      type: 'Gasoline',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
      features: [
        { icon: Droplet, label: 'Emissions', value: 'CO2 Emissions' },
        { icon: Fuel, label: 'Fuel', value: 'Expensive Fuel' },
        { icon: Clock, label: 'Refuel', value: 'Quick Refuel' },
        { icon: Gauge, label: 'Range', value: '700 km' }
      ]
    }
  }
];

export default function Compare() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Compare Cars</h1>
              <p className="text-gray-600 mt-1">Electric vs Gasoline Comparison</p>
            </div>
            <Link
              to="/cars/new"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse Cars
            </Link>
          </div>
        </div>

        {/* Static Comparison View */}
        <div className="space-y-8">
          {staticComparisons.map((comparison) => (
            <div key={comparison.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-linear-to-r from-gray-50 to-gray-100 p-6 text-center border-b">
                <h2 className="text-2xl font-bold text-gray-800">
                  {comparison.leftCar.type} vs {comparison.rightCar.type} Comparison
                </h2>
              </div>

              <div className="grid md:grid-cols-2 divide-x divide-gray-200">
                {/* Left Car - Electric */}
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="relative mb-4">
                      <img 
                        src={comparison.leftCar.image}
                        alt={comparison.leftCar.name}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-teal-500 text-white text-sm font-bold rounded-full shadow-lg">
                          {comparison.leftCar.type.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-teal-600 mb-2">
                      {comparison.leftCar.name}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {comparison.leftCar.features.map((feature, idx) => {
                      const Icon = feature.icon;
                      return (
                        <div key={idx} className="flex items-center gap-4 p-3 bg-teal-50 rounded-lg">
                          <div className="p-2 bg-teal-100 rounded-full">
                            <Icon className="h-6 w-6 text-teal-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-600">{feature.label}</p>
                            <p className="font-semibold text-gray-900">{feature.value}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Car - Gasoline */}
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="relative mb-4">
                      <img 
                        src={comparison.rightCar.image}
                        alt={comparison.rightCar.name}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="px-4 py-2 bg-blue-500 text-white text-sm font-bold rounded-full shadow-lg">
                          {comparison.rightCar.type.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">
                      {comparison.rightCar.name}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {comparison.rightCar.features.map((feature, idx) => {
                      const Icon = feature.icon;
                      return (
                        <div key={idx} className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
                          <div className="p-2 bg-blue-100 rounded-full">
                            <Icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-600">{feature.label}</p>
                            <p className="font-semibold text-gray-900">{feature.value}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse More */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Want to explore more cars?</p>
          <div className="space-y-3 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              to="/cars/new"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Browse New Cars
            </Link>
            <Link
              to="/cars/used"
              className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Browse Used Cars
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
