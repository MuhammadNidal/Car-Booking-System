import React from 'react'

const HeroSection = () => {
  return (
    <section className="hero-gradient text-white py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Find your perfect car</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-8">
          Browse our showroom and book a test drive. Modern UI, fast search and secure booking flow.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition">Browse Inventory</button>
          <button className="btn btn-outline">Contact Sales</button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
