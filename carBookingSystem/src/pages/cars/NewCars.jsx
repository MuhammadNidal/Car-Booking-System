import React, { useEffect, useState } from 'react';
import CarCard from '../../components/CarCard';

function seed() {
  const sample = [
    {
      id: 'c-' + Date.now(),
      title: 'Toyota Corolla 2024',
      specsSubtitle: '1.6L • Sedan',
      mileage: '10 kmpl',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      price: 6500000,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_xyMZ7m-X6lig43rUkxvY4NjFbcF3wa3-lA&s',
      description: 'Brand new Corolla with modern features.',
      isNew: true,
    },
    {
      id: 'c-' + (Date.now()+1),
      title: 'Honda Civic 2024',
      specsSubtitle: '1.5L Turbo • Sedan',
      mileage: '11 kmpl',
      fuelType: 'Petrol',
      transmission: 'CVT',
      price: 12000000,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlIpVTrOuRqIpHuOYEmhPY6NbcHTJz8N0sJw&s',
      description: 'Latest Civic with safety pack.',
      isNew: true,
    }
  ];
  localStorage.setItem('cars', JSON.stringify(sample));
  return sample;
}

export default function NewCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem('cars');
    let arr = raw ? JSON.parse(raw) : null;
    if (!arr || !Array.isArray(arr)) arr = seed();
    // Filter for new cars (isNew true or type === 'new')
    const newCars = arr.filter(c => c.isNew === true || c.type === 'new');
    setCars(newCars);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold">New Cars</h2>
      <p className="text-sm text-gray-600 mt-1">Browse newly listed cars from sellers.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.length === 0 ? (
          <div className="text-gray-500">No new cars yet.</div>
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
