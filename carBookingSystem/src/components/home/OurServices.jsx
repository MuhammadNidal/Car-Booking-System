import React from 'react'

const OurServices = () => (
  <section className="py-12">
    <div className="container mx-auto px-6">
      <h2 className="text-2xl font-bold mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h4 className="font-semibold mb-2">Buy a Car</h4>
          <p className="text-sm text-gray-600">Wide selection of certified pre-owned and new cars.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h4 className="font-semibold mb-2">Sell Your Car</h4>
          <p className="text-sm text-gray-600">Quick evaluation and competitive offers.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h4 className="font-semibold mb-2">Maintenance</h4>
          <p className="text-sm text-gray-600">Trusted service center with genuine parts.</p>
        </div>
      </div>
    </div>
  </section>
)

export default OurServices
