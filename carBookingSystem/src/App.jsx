import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import NewCars from './pages/cars/NewCars'
import UsedCars from './pages/cars/UsedCars'
import CarDetails from './pages/cars/CarDetails'
import SellerDashboard from './pages/SellerDashboard'
import BookedCars from './pages/BookedCars'
import Wishlist from './pages/Wishlist'
import RentCars from './pages/RentCars'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen  flex items-center justify-center max-w-screen ">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/cars/new" element={<Layout><NewCars /></Layout>} />
          <Route path="/cars/used" element={<Layout><UsedCars /></Layout>} />
          <Route path="/cars/:id" element={<Layout><CarDetails /></Layout>} />
          <Route path="/seller/dashboard" element={<Layout><SellerDashboard /></Layout>} />
          <Route path="/cars/booked" element={<Layout><BookedCars /></Layout>} />
          <Route path="/wishlist" element={<Layout><Wishlist /></Layout>} />
          <Route path="/rent" element={<Layout><RentCars /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
