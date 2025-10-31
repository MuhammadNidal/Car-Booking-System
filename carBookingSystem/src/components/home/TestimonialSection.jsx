import React from 'react'

const TestimonialSection = () => (
  <section className="py-12">
    <div className="container mx-auto px-6">
      <h3 className="text-xl font-semibold mb-6">What our customers say</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1,2,3].map(i => (
          <div key={i} className="p-6 bg-white rounded-lg shadow">
            <p className="text-sm text-gray-600 mb-4">"Great experience, smooth purchase and excellent service."</p>
            <div className="font-semibold">Customer {i}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default TestimonialSection
