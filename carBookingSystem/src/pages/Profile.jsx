import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircleIcon, EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowLeftIcon, CheckIcon } from '@heroicons/react/24/outline';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [editData, setEditData] = useState({});

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      navigate('/login');
      return;
    }
    setUser(currentUser);
    setEditData(currentUser);
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value
    });
  };

  const handleSave = () => {
    setError('');
    setSuccess('');

    if (!editData.name.trim()) {
      setError('Name is required');
      return;
    }
    if (!editData.email.trim()) {
      setError('Email is required');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editData.email)) {
      setError('Please enter a valid email');
      return;
    }

    // Update currentUser
    const updatedUser = {
      ...editData,
      id: user.id,
      profilePicture: user.profilePicture
    };
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    
    // Update user in users array
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.id === user.id);
    if (userIndex !== -1) {
      users[userIndex] = {
        ...users[userIndex],
        name: editData.name,
        email: editData.email,
        phone: editData.phone,
        address: editData.address
      };
      localStorage.setItem('users', JSON.stringify(users));
    }

    setUser(updatedUser);
    setIsEditing(false);
    setSuccess('Profile updated successfully!');
    setTimeout(() => setSuccess(''), 3000);
  };

  if (!user) {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-200px)] bg-blue-50 py-12 px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-900 hover:text-blue-700 transition-colors mb-6"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back
          </button>
          <h1 className="text-4xl font-bold text-gray-900">Profile</h1>
          <p className="text-gray-600 mt-2">Manage your account details</p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center text-green-700">
            <CheckIcon className="h-5 w-5 mr-3" />
            {success}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-linear-to-r from-blue-900 to-blue-700 px-8 py-12 flex items-center justify-between">
            <div className="flex items-center">
              {user.profilePicture ? (
                <img
                  src={user.profilePicture}
                  alt={user.name}
                  className="h-24 w-24 rounded-full border-4 border-white object-cover"
                />
              ) : (
                <UserCircleIcon className="h-24 w-24 text-white" />
              )}
              <div className="ml-6 text-white">
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-blue-100">{user.email}</p>
              </div>
            </div>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-2 bg-white text-blue-900 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Edit Profile
              </button>
            )}
          </div>

          {/* Profile Details */}
          <div className="p-8 space-y-6">
            {isEditing ? (
              <>
                {/* Edit Mode */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={editData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={editData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={editData.phone || ''}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="+92 300 1234567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={editData.address || ''}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your address"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6">
                  <button
                    onClick={handleSave}
                    className="flex-1 px-6 py-2 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => {
                      setIsEditing(false);
                      setEditData(user);
                      setError('');
                    }}
                    className="flex-1 px-6 py-2 bg-gray-200 text-gray-900 font-medium rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* View Mode */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex items-start">
                    <EnvelopeIcon className="h-6 w-6 text-blue-900 mr-4 mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Email</p>
                      <p className="text-gray-900 font-medium">{user.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <PhoneIcon className="h-6 w-6 text-blue-900 mr-4 mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Phone</p>
                      <p className="text-gray-900 font-medium">{user.phone || 'Not added'}</p>
                    </div>
                  </div>

                  <div className="flex items-start sm:col-span-2">
                    <MapPinIcon className="h-6 w-6 text-blue-900 mr-4 mt-1 shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-600">Address</p>
                      <p className="text-gray-900 font-medium">{user.address || 'Not added'}</p>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="border-t pt-6">
                  <p className="text-sm text-gray-600">
                    Member since <span className="font-medium">{new Date(user.createdAt || Date.now()).toLocaleDateString()}</span>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
