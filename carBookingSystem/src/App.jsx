import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import CarDetail from './pages/CarDetail'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen  flex items-center justify-center max-w-screen ">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/signup" element={<Layout><Signup /></Layout>} />
          <Route path="/car/:id" element={<Layout><CarDetail /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
