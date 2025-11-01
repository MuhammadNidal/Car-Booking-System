import React from 'react'

const ServiceCard = ({ title, desc, icon, accent = 'bg-primary' }) => (
  <div className="relative group p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-transform transform hover:-translate-y-1">
    <div className="flex items-start gap-4">
      <div className={`p-3 rounded-lg text-white ${accent} flex items-center justify-center shadow-md`}>
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{desc}</p>
      </div>
    </div>
    {/* subtle accent line */}
    <div className="absolute -bottom-2 left-6 w-16 h-1 rounded-full opacity-90 group-hover:scale-x-105 transition-transform" style={{ background: 'linear-gradient(90deg, var(--primary), var(--primary-600))' }}></div>
  </div>
)

const OurServices = () => {
  const services = [
    {
      title: 'Buy a Car',
      desc: 'Wide selection of certified pre-owned and new cars with transparent pricing and inspection reports.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" />
        </svg>
      ),
      accent: 'bg-emerald-600',
    },
    {
      title: 'Sell Your Car',
      desc: 'Fast evaluation and competitive offers — get paid quickly with minimal paperwork.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
        </svg>
      ),
      accent: 'bg-sky-600',
    },
    {
      title: 'Maintenance & Service',
      desc: 'Certified technicians, genuine parts and easy booking for service and repairs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.39 18.39A9 9 0 1118.39 3.6M15 11l-3-3" />
        </svg>
      ),
      accent: 'bg-amber-500',
    },
  ]

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Services</h2>
          <p className="mt-3 text-gray-600">We support buyers and sellers with end-to-end services — listings, evaluations, financing, and after-sales support.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} title={s.title} desc={s.desc} icon={s.icon} accent={s.accent} />
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/inventory" className="btn btn-md btn-primary rounded-full inline-flex items-center gap-2">
            Explore Inventory
          </a>
          <a href="/sell" className="btn btn-md btn-outline rounded-full inline-flex items-center gap-2">
            Sell Your Car
          </a>
        </div>
      </div>
    </section>
  )
}

export default OurServices
