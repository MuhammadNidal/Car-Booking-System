import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
  <div style={{ backgroundColor: 'var(--bg)' }} className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center">
        <h1 style={{ color: 'rgba(11,61,145,0.14)' }} className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">The page you are looking for doesn't exist or has been moved.</p>
        <div className="flex items-center justify-center gap-4">
          <button onClick={() => navigate(-1)} className="px-4 py-2 border border-primary rounded text-primary">Go Back</button>
          <button onClick={() => navigate('/')} className="btn btn-primary btn-md">Home</button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
