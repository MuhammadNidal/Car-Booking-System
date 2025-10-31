import React from 'react'
import Button from './ui/Button'

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 mt-12">
    <div className="container mx-auto px-4 md:px-8 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <div className="text-2xl font-bold text-primary">CarShowroom</div>
        <p className="text-sm text-gray-600 mt-2">Trusted car marketplace — buy, sell and service with confidence.</p>
      </div>

      <div className="flex gap-8 justify-center">
        <div>
          <h4 className="font-semibold mb-2 text-primary">Company</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><a href="#" className="hover:text-primary">About</a></li>
            <li><a href="#" className="hover:text-primary">Careers</a></li>
            <li><a href="#" className="hover:text-primary">Press</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-primary">Support</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><a href="#" className="hover:text-primary">Help Center</a></li>
            <li><a href="#" className="hover:text-primary">Contact Us</a></li>
            <li><a href="#" className="hover:text-primary">Privacy</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-end md:items-end">
        <h4 className="font-semibold mb-2 text-primary">Stay in the loop</h4>
        <p className="text-sm text-gray-600 mb-3">Subscribe for updates and offers.</p>
        <div className="flex w-full max-w-xs gap-2">
          <input aria-label="Email" placeholder="you@company.com" className="flex-1 px-3 py-2 rounded border border-gray-200" />
          <Button className="whitespace-nowrap btn-md">Subscribe</Button>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-20 py-4 text-sm text-gray-600 flex items-center justify-between">
        <div>© {new Date().getFullYear()} CarShowroom. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-500 hover:text-primary">Terms</a>
          <a href="#" className="text-gray-500 hover:text-primary">Privacy</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
