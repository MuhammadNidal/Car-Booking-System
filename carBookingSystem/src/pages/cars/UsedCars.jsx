import React, { useEffect, useState } from 'react';
import CarCard from '../../components/CarCard';

export default function UsedCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem('cars');
    const arr = raw ? JSON.parse(raw) : [];
    // Filter for used cars (isNew false or type === 'used')
    const usedCars = arr.filter(c => c.isNew === false || c.type === 'used');
    setCars(usedCars);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold">Used Cars</h2>
      <p className="text-sm text-gray-600 mt-1">Pre-owned cars listed by sellers.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.length === 0 ? (
          <div className="text-gray-500">No used cars available right now.</div>
        ) : cars.map(car => (
          <CarCard 
            key={car.id} 
            id={car.id}
            title={car.title}
            specsSubtitle={car.specsSubtitle}
            mileage={car.mileage}
            fuelType={car.fuelType || car.fuel}
            transmission={car.transmission}
            price={car.price}
            imageUrl={car.imageUrl}
            image={car.image}
            isNew={car.isNew}
            type={car.type}
            location={car.location}
            year={car.year}
            detailsUrl={`/cars/${car.id}`}
          />
        ))}
      </div>
    </div>
  );
}
