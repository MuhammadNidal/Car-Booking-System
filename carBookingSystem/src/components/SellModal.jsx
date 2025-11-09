import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SellModal({ open, onClose }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) return;
    const seller = localStorage.getItem('sellerUser');
    if (seller) {
      // already logged in, go to dashboard
      onClose?.();
      navigate('/seller/dashboard');
    }
  }, [open]);

  function handleLogin(e) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return alert('Please enter your email');
    const user = { email: trimmed, name: name || trimmed.split('@')[0], loggedAt: Date.now() };
    localStorage.setItem('sellerUser', JSON.stringify(user));
    onClose?.();
    navigate('/seller/dashboard');
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 mt-64 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-2xl transform transition-all">
        <h3 className="text-2xl font-bold text-gray-900">Seller Login</h3>
        <p className="text-sm text-gray-600 mt-2">Quick login to list your car. We store your session locally for this demo.</p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name (optional)</label>
            <input 
              value={name} 
              onChange={e => setName(e.target.value)} 
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
              placeholder="Your name" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email"
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
            <button 
              type="submit" 
              className="w-full sm:flex-1 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Continue to Dashboard
            </button>
            <button 
              type="button" 
              onClick={() => { onClose?.(); }} 
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
