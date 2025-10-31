import React from 'react'

const LogosSection = () => (
  <section className="py-8 bg-white">
    <div className="container mx-auto px-6 flex items-center justify-center gap-8 flex-wrap">
      {['BMW','Audi','Tesla','Toyota','Honda'].map((l) => (
        <div key={l} className="opacity-80 hover:opacity-100 transition p-2">
          <div className="w-24 h-12 bg-gray-100 rounded flex items-center justify-center text-sm font-semibold text-gray-600">{l}</div>
        </div>
      ))}
    </div>
  </section>
)

export default LogosSection
