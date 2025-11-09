import React, { useEffect, useState } from 'react';
import CarCard from '../components/CarCard';

function seedRent() {
  const sample = [
    { id: 'r-1', title: 'Toyota Voxy Rent', specsSubtitle: 'MPV • 7 seats', mileage: '8 kmpl', fuelType: 'Petrol', transmission: 'Automatic', price: 8000, imageUrl: 'https://images.unsplash.com/photo-1542038784456-6d6f6c8a2b1f?w=1200', description: 'Daily rent PKR 8,000', },
    { id: 'r-2', title: 'Suzuki Alto Rent', specsSubtitle: 'Hatchback', mileage: '15 kmpl', fuelType: 'Petrol', transmission: 'Manual', price: 3000, imageUrl: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=1200', description: 'Daily rent PKR 3,000', }
  ];
  localStorage.setItem('rentCars', JSON.stringify(sample));
  return sample;
}

export default function RentCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem('rentCars');
    const arr = raw ? JSON.parse(raw) : seedRent();
    setCars(arr);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold">Rent Cars</h2>
      <p className="text-sm text-gray-600 mt-1">Short-term car rentals — a few popular options.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map(c => <CarCard key={c.id} {...c} detailsUrl={`/cars/${c.id}`} />)}
      </div>
    </div>
  );
}
