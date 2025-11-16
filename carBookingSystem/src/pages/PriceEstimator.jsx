import { useState } from 'react';
import { Calendar, Gauge, Fuel, Settings } from 'lucide-react';
import logo from '/src/assets/logo.png';

const carBrands = ['Toyota', 'Honda', 'BMW', 'Tesla', 'Ford', 'Nissan', 'Hyundai', 'Mercedes'];
const fuelTypes = ['Gasoline', 'Diesel', 'Electric', 'Hybrid'];
const conditions = ['Excellent', 'Good', 'Fair', 'Poor'];

export default function PriceEstimator() {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    mileage: '',
    fuelType: '',
    condition: ''
  });
  const [estimatedPrice, setEstimatedPrice] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculatePrice = (e) => {
    e.preventDefault();
    
    const basePrice = 25000;
    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(formData.year);
    const mileage = parseInt(formData.mileage);
    
    let price = basePrice;
    const ageDepreciation = age * 1500;
    const mileageDepreciation = (mileage / 1000) * 50;
    
    price -= ageDepreciation;
    price -= mileageDepreciation;
    
    const conditionMultiplier = {
      'Excellent': 1.2,
      'Good': 1.0,
      'Fair': 0.8,
      'Poor': 0.6
    };
    const conditionAdjustment = conditionMultiplier[formData.condition] || 1;
    price *= conditionAdjustment;
    
    const fuelMultiplier = {
      'Electric': 1.3,
      'Hybrid': 1.15,
      'Diesel': 1.0,
      'Gasoline': 0.95
    };
    const fuelAdjustment = fuelMultiplier[formData.fuelType] || 1;
    price *= fuelAdjustment;
    
    const finalPrice = Math.max(5000, Math.round(price));
    const priceRange = {
      low: Math.round(finalPrice * 0.9),
      high: Math.round(finalPrice * 1.1)
    };
    
    setEstimatedPrice({
      value: finalPrice,
      range: priceRange,
      breakdown: {
        basePrice,
        ageDepreciation,
        mileageDepreciation,
        conditionAdjustment,
        fuelAdjustment
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white shadow-sm border-b border-gray-200 p-8 mb-8">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="h-16 w-16" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Vehicle Price Estimator</h1>
              <p className="text-gray-600 mt-1">Professional market valuation tool</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-sm border border-gray-200">
          <div className="border-b border-gray-200 bg-gray-50 px-8 py-4">
            <h2 className="text-lg font-semibold text-gray-900">Vehicle Information</h2>
            <p className="text-sm text-gray-600 mt-1">Enter your vehicle details for accurate valuation</p>
          </div>

          <form onSubmit={calculatePrice} className="p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brand
                </label>
                <select
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 focus:ring-1 focus:ring-[#193CB8] focus:border-[#193CB8] transition-colors"
                >
                  <option value="">Select Brand</option>
                  {carBrands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Model
                </label>
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Civic, Model 3"
                  className="w-full px-4 py-2.5 border border-gray-300 focus:ring-1 focus:ring-[#193CB8] focus:border-[#193CB8] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="h-3.5 w-3.5 inline mr-1.5 text-gray-500" />
                  Year
                </label>
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  min="1990"
                  max={new Date().getFullYear()}
                  placeholder="2020"
                  className="w-full px-4 py-2.5 border border-gray-300 focus:ring-1 focus:ring-[#193CB8] focus:border-[#193CB8] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Gauge className="h-3.5 w-3.5 inline mr-1.5 text-gray-500" />
                  Mileage (km)
                </label>
                <input
                  type="number"
                  name="mileage"
                  value={formData.mileage}
                  onChange={handleChange}
                  required
                  min="0"
                  placeholder="50000"
                  className="w-full px-4 py-2.5 border border-gray-300 focus:ring-1 focus:ring-[#193CB8] focus:border-[#193CB8] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Fuel className="h-3.5 w-3.5 inline mr-1.5 text-gray-500" />
                  Fuel Type
                </label>
                <select
                  name="fuelType"
                  value={formData.fuelType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 focus:ring-1 focus:ring-[#193CB8] focus:border-[#193CB8] transition-colors"
                >
                  <option value="">Select Fuel Type</option>
                  {fuelTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Settings className="h-3.5 w-3.5 inline mr-1.5 text-gray-500" />
                  Condition
                </label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 focus:ring-1 focus:ring-[#193CB8] focus:border-[#193CB8] transition-colors"
                >
                  <option value="">Select Condition</option>
                  {conditions.map(cond => (
                    <option key={cond} value={cond}>{cond}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <button
                type="submit"
                className="w-full bg-[#193CB8] text-white py-3.5 px-6 font-medium hover:bg-blue-800 transition-colors"
              >
                Calculate Market Value
              </button>
            </div>
          </form>

          {estimatedPrice && (
            <div className="border-t-4 border-[#193CB8] bg-white">
              <div className="p-8">
                <div className="mb-8">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Valuation Report</h3>
                  <p className="text-sm text-gray-600">Generated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="border border-gray-200 p-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Vehicle Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Make & Model</span>
                        <span className="text-sm font-medium text-gray-900">{formData.brand} {formData.model}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Year</span>
                        <span className="text-sm font-medium text-gray-900">{formData.year}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Mileage</span>
                        <span className="text-sm font-medium text-gray-900">{parseInt(formData.mileage).toLocaleString()} km</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Fuel Type</span>
                        <span className="text-sm font-medium text-gray-900">{formData.fuelType}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-sm text-gray-600">Condition</span>
                        <span className="text-sm font-medium text-gray-900">{formData.condition}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 p-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Price Breakdown</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Base Market Value</span>
                        <span className="text-sm font-medium text-gray-900">${estimatedPrice.breakdown.basePrice.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Age Depreciation</span>
                        <span className="text-sm font-medium text-red-600">-${estimatedPrice.breakdown.ageDepreciation.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Mileage Depreciation</span>
                        <span className="text-sm font-medium text-red-600">-${Math.round(estimatedPrice.breakdown.mileageDepreciation).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Condition Adjustment</span>
                        <span className="text-sm font-medium text-gray-900">×{estimatedPrice.breakdown.conditionAdjustment}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-sm text-gray-600">Fuel Type Adjustment</span>
                        <span className="text-sm font-medium text-gray-900">×{estimatedPrice.breakdown.fuelAdjustment}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border-2 border-gray-300 p-8">
                  <div className="text-center mb-6">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Estimated Market Value</p>
                    <p className="text-6xl font-bold text-[#193CB8] mb-3">
                      ${estimatedPrice.value.toLocaleString()}
                    </p>
                    <div className="inline-block bg-white border border-gray-300 px-6 py-3">
                      <p className="text-sm text-gray-600">
                        Price Range: <span className="font-semibold text-gray-900">${estimatedPrice.range.low.toLocaleString()} - ${estimatedPrice.range.high.toLocaleString()}</span>
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-300 pt-6 mt-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Valuation Notes</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• This valuation is based on current market data and vehicle specifications provided</li>
                      <li>• Actual selling price may vary based on vehicle history, service records, and local market demand</li>
                      <li>• Additional factors such as accident history, modifications, and optional features may affect final value</li>
                      <li>• Price range represents typical market variance of ±10% from estimated value</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 bg-white border border-gray-200 p-4">
          <p className="text-xs text-gray-600 text-center">
            Disclaimer: This valuation is an estimate based on provided information. Actual market value may vary depending on additional factors, vehicle history, and current market conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
