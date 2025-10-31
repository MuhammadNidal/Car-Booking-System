import React from 'react'

const Slider = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-6">
      <h3 className="text-xl font-semibold mb-4">Featured Vehicles</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1,2,3].map(i=> (
          <div key={i} className="rounded-lg overflow-hidden shadow">
            <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-500">Car Image {i}</div>
            <div className="p-4">
              <h4 className="font-semibold">Car Model {i}</h4>
              <p className="text-sm text-gray-600">Short description and price</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Slider
