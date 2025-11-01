import React from 'react'

const Star = ({ filled = true }) => (
  <svg className={`w-4 h-4 ${filled ? 'text-amber-400' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.384 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.539 1.118l-3.384-2.46a1 1 0 00-1.176 0l-3.384 2.46c-.784.57-1.839-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.046 9.393c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69L9.05 2.927z" />
  </svg>
)

const TestimonialCard = ({ quote, name, title, avatar }) => (
  <div className="p-6 bg-white/90 backdrop-blur rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1">
    <div className="flex items-start gap-4">
      <img src={avatar} alt={name} className="w-14 h-14 rounded-full object-cover shadow-sm" />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-gray-900">{name}</div>
            <div className="text-xs text-gray-500">{title}</div>
          </div>
          <div className="flex items-center gap-1">
            <Star /><Star /><Star /><Star /><Star />
          </div>
        </div>
        <p className="mt-4 text-gray-600 text-sm">“{quote}”</p>
      </div>
    </div>
  </div>
)

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: 'Great experience — the team helped me find a perfect car and the buying process was smooth.',
      name: 'Aisha Khan',
      title: 'Buyer',
      avatar: 'https://i.pravatar.cc/150?img=32'
    },
    {
      quote: 'Selling my car was super easy and fast. Excellent valuation and friendly staff.',
      name: 'Omar Rahman',
      title: 'Seller',
      avatar: 'https://i.pravatar.cc/150?img=12'
    },
    {
      quote: "Service center fixed my car quickly; parts and pricing were transparent.",
      name: 'Sara Lee',
      title: 'Service Customer',
      avatar: 'https://i.pravatar.cc/150?img=15'
    }
  ]

  return (
    <section className="py-12 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">What our customers say</h3>
          <p className="mt-2 text-gray-600">Real feedback from buyers, sellers and customers who use our services.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} quote={t.quote} name={t.name} title={t.title} avatar={t.avatar} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="/reviews" className="btn btn-md btn-outline">Read all reviews</a>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
