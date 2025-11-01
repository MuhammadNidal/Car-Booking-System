import React from 'react'
import CarCard from '../CarCard'


const Slider = () => (
  <section className="py-12 bg-white">
   <CarCard
            title="Corolla Altis - 2023"
            specsSubtitle="3.5 D5 PowerPulse Momentum 5dr AW..."
            mileage="15,000 Miles"
            fuelType="Petrol"
            transmission="CVT"
            price={45000}
            detailsUrl="/car/corolla-altis"
            imageUrl="https://placehold.co/600x400/FF6347/FFFFFF?text=Corolla+Altis"
            badgeText="Great Price"
          />
  </section>
)

export default Slider
