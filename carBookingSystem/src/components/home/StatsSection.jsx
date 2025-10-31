import React from 'react'

const StatsSection = () => (
  <section className="py-12 bg-[#f7faf7]">
    <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {[
        {label: 'Cars Listed', value: '1.2k'},
        {label: 'Happy Customers', value: '5k+'},
        {label: 'Dealers', value: '120'},
        {label: 'Years', value: '10+'},
      ].map(s => (
        <div key={s.label} className="p-6 bg-white rounded-lg shadow">
          <div className="text-2xl font-bold">{s.value}</div>
          <div className="text-sm text-gray-600">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
)

export default StatsSection
