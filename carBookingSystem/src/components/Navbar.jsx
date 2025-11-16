import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon, UserCircleIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import SellModal from './SellModal';
import logo from "/src/assets/logo.png"

// Navigation links configuration
const navigation = [
  { name: 'Sell', href: '/sell' },
  { name: 'Compare', href: '/compare' },
  { name: 'Price Estimator', href: '/price-estimator' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const buyCarLinks = [
  { name: 'New Cars', href: '/cars/new' },
  { name: 'Used Cars', href: '/cars/used' },
  { name: 'Booked Cars', href: '/cars/booked' },
  { name: 'Wishlist', href: '/wishlist' },
  // { name: 'Rent Cars', href: '/rent' },
];

// Helper function to combine class names
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [sellOpen, setSellOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    setUser(currentUser);

    // Listen for storage changes (logout from other tabs)
    const handleStorageChange = () => {
      const updated = JSON.parse(localStorage.getItem('currentUser'));
      setUser(updated);
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    navigate('/');
  };

  return (
    <Disclosure as="nav" className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200/50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              
              {/* Logo */}
              <div className="flex items-center">
                <Link to="/" className="flex shrink-0 items-center gap-2 group transition-opacity duration-300 hover:opacity-80">
                  <img src={logo} alt="" width={"50"} />
                  <span className="font-bold text-xl text-primary whitespace-nowrap">CarDealer</span>
                </Link>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex lg:items-center lg:gap-x-2">
                
                {/* Buy Cars Dropdown */}
                <Menu as="div" className="relative">
                  <MenuButton className="group inline-flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 focus:outline-none relative">
                    Buy
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    {/* Hover underline animation */}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-[calc(100%-2rem)] scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </MenuButton>

                  <MenuItems
                    transition
                    className="absolute z-10 mt-2 w-56 origin-top-right rounded-xl bg-white/80 backdrop-blur-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 data-closed:scale-95 data-closed:opacity-0 p-1"
                  >
                    <div className="py-1">
                      {buyCarLinks.map((item) => (
                        <MenuItem key={item.name}>
                          <Link
                            to={item.href}
                            className="text-gray-900 group flex w-full items-center rounded-md px-3 py-2 text-sm data-focus:bg-primary data-focus:text-white transition-colors duration-150"
                          >
                            {item.name}
                          </Link>
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Menu>

                {/* Other navigation links */}
                {navigation.map((item) => (
                  item.name === 'Sell' ? (
                    <button
                      key={item.name}
                      onClick={() => setSellOpen(true)}
                      className={classNames('group relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200', 'text-gray-700 hover:bg-gray-100')}
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-[calc(100%-2rem)] scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"></span>
                    </button>
                  ) : (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) => classNames(
                        isActive 
                          ? 'bg-primary text-white' 
                          : 'text-gray-700 hover:bg-gray-100',
                        'group relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200'
                      )}
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-[calc(100%-2rem)] scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"></span>
                    </NavLink>
                  )
                ))}
                
                {/* User Menu or Login/Signup Button */}
                {user ? (
                  <Menu as="div" className="relative">
                    <MenuButton className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 focus:outline-none">
                      {user.profilePicture ? (
                        <img
                          src={user.profilePicture}
                          alt={user.name}
                          className="h-8 w-8 rounded-full object-cover"
                        />
                      ) : (
                        <UserCircleIcon className="h-8 w-8 text-blue-900" />
                      )}
                      <span className="hidden sm:inline text-gray-900 font-semibold">{user.name}</span>
                      <ChevronDownIcon className="h-4 w-4 text-gray-400" />
                    </MenuButton>

                    <MenuItems
                      transition
                      className="absolute z-10 right-0 mt-2 w-56 origin-top-right rounded-xl bg-white/80 backdrop-blur-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 data-closed:scale-95 data-closed:opacity-0 p-1"
                    >
                      <div className="py-1">
                        <MenuItem>
                          <Link
                            to="/profile"
                            className="text-gray-900 flex w-full items-center rounded-md px-4 py-2 text-sm data-focus:bg-primary data-focus:text-white transition-colors duration-150"
                          >
                            <UserCircleIcon className="h-5 w-5 mr-3" />
                            View Profile
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <button
                            onClick={handleLogout}
                            className="text-gray-900 flex w-full items-center rounded-md px-4 py-2 text-sm data-focus:bg-red-500 data-focus:text-white transition-colors duration-150 hover:bg-red-50"
                          >
                            <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-3" />
                            Logout
                          </button>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </Menu>
                ) : (
                  <Link
                    to="/login"
                    className="hidden md:inline-flex btn btn-md btn-primary rounded-full items-center justify-center gap-1.5 shadow-sm transition-all duration-200"
                  >
                    <UserCircleIcon className="h-5 w-5" />
                    Login / Signup
                  </Link>
                )}
              </div>

              {/* Right side buttons */}
              <div className="flex items-center gap-4">
                {/* Login/Signup Button - Desktop */}
                

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                    <DisclosureButton className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-200">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div> 
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Menu Panel */}
          <DisclosurePanel className="lg:hidden border-t border-gray-200/50 bg-white/90 backdrop-blur-md">
            <div className="space-y-1 px-3 pb-4 pt-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
              
              {/* Mobile "Buy Cars" Accordion */}
              <Disclosure as="div" className="space-y-1">
                {({ open: isOpen }) => (
                  <>
                    <DisclosureButton className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-gray-900 hover:bg-gray-100 transition-colors duration-200">
                      <span>Buy Cars</span>
                      <ChevronDownIcon
                        className={classNames(
                          isOpen ? 'rotate-180' : '',
                          'h-5 w-5 text-gray-500 transition-transform duration-300'
                        )}
                        aria-hidden="true"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="space-y-1 pl-4">
                      {buyCarLinks.map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as={Link}
                          to={item.href}
                          className="block rounded-lg py-2.5 pl-4 pr-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>

              {/* Other Mobile Links */}
              {navigation.map((item) => (
                item.name === 'Sell' ? (
                  <DisclosureButton
                    key={item.name}
                    onClick={() => setSellOpen(true)}
                    className="block rounded-lg px-3 py-2.5 text-base font-medium text-gray-900 hover:bg-gray-100"
                  >
                    {item.name}
                  </DisclosureButton>
                ) : (
                  <DisclosureButton
                    key={item.name}
                    as={NavLink}
                    to={item.href}
                    className={({ isActive }) => classNames(
                      isActive 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-900 hover:bg-gray-100',
                      'block rounded-lg px-3 py-2.5 text-base font-medium transition-colors duration-200'
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                )
              ))}
              
              <div className="pt-3 mt-3 border-t border-gray-200">
                {/* Mobile User Menu or Login/Signup Button */}
                {user ? (
                  <>
                    <div className="flex items-center gap-3 px-3 py-3 mb-3 bg-blue-50 rounded-lg">
                      {user.profilePicture ? (
                        <img
                          src={user.profilePicture}
                          alt={user.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      ) : (
                        <UserCircleIcon className="h-10 w-10 text-blue-900" />
                      )}
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-600">{user.email}</p>
                      </div>
                    </div>
                    <DisclosureButton
                      as={Link}
                      to="/profile"
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-base font-medium text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <UserCircleIcon className="h-5 w-5" />
                      View Profile
                    </DisclosureButton>
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-base font-medium text-red-600 hover:bg-red-50 transition-colors duration-200"
                    >
                      <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                      Logout
                    </button>
                  </>
                ) : (
                  <DisclosureButton
                    as={Link}
                    to="/login"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-3 py-2.5 text-base font-medium text-white shadow-sm hover:bg-blue-700 transition-colors duration-200"
                  >
                    <UserCircleIcon className="h-5 w-5" />
                    <span>Login / Signup</span>
                  </DisclosureButton>
                )}
              </div>
            </div>
          </DisclosurePanel>
          {/* Sell modal component (login-first flow) */}
          <SellModal open={sellOpen} onClose={() => setSellOpen(false)} />
        </>
      )}
    </Disclosure>
  );
}

