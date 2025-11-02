import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen  flex items-center justify-center ">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
