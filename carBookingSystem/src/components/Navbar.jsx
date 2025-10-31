import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './ui/Button'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">CarShowroom</Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/inventory" className="text-sm text-gray-700 hover:text-primary">Inventory</Link>
          <Link to="/dashboard" className="text-sm text-gray-700 hover:text-primary">Dashboard</Link>
          <Link to="/contact" className="text-sm text-gray-700 hover:text-primary">Contact</Link>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/auth/login" className="text-sm text-gray-700 hover:text-primary">Login</Link>
          <Link to="/auth/signup"><Button className="btn-md">Sign up</Button></Link>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden py-3 border-t border-gray-100">
          <div className="flex flex-col gap-3 px-4">
            <Link to="/" onClick={() => setOpen(false)} className="px-3 py-2 rounded text-gray-700 hover:bg-gray-50">Home</Link>
            <Link to="/inventory" onClick={() => setOpen(false)} className="px-3 py-2 rounded text-gray-700 hover:bg-gray-50">Inventory</Link>
            <Link to="/dashboard" onClick={() => setOpen(false)} className="px-3 py-2 rounded text-gray-700 hover:bg-gray-50">Dashboard</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded text-gray-700 hover:bg-gray-50">Contact</Link>
            <div className="pt-2">
              <Link to="/auth/login" onClick={() => setOpen(false)} className="block px-3 py-2 text-center text-gray-700">Log in</Link>
              <div className="px-3 mt-2">
                <Button className="w-full">Sign up</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
