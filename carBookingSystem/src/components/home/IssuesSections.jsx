import React from 'react'

const IssuesSections = () => (
  <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {[{
        title: 'Financing', desc: 'Flexible finance options for every budget.'
      },{
        title: 'Warranty', desc: 'We provide manufacturer and extended warranties.'
      },{
        title: 'Service', desc: 'Book servicing and repairs with certified technicians.'
      }].map((it) => (
        <div key={it.title} className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-semibold text-lg mb-2">{it.title}</h3>
          <p className="text-sm text-gray-600">{it.desc}</p>
        </div>
        
      ))}
    </div>
  </section>
)

export default IssuesSections
