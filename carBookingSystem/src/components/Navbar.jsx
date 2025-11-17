import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon, UserCircleIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';
import logo from "/src/assets/logo.png"

const navigation = [
  { name: 'Compare', href: '/compare' },
  { name: 'Price Estimator', href: '/price-estimator' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const buyCarLinks = [
  { name: 'New Cars', href: '/cars/new' },
  { name: 'Used Cars', href: '/cars/used' },
];

const userLinks = [
  { name: 'Booked Cars', href: '/cars/booked' },
  { name: 'Wishlist', href: '/wishlist' },
];

// Helper function to combine class names
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const currentSeller = JSON.parse(localStorage.getItem('currentSeller'));
    
    setUser(currentUser);
    setIsSeller(currentSeller?.role === 'seller' || currentUser?.role === 'seller');

    const handleStorageChange = () => {
      const updated = JSON.parse(localStorage.getItem('currentUser'));
      const updatedSeller = JSON.parse(localStorage.getItem('currentSeller'));
      setUser(updated);
      setIsSeller(updatedSeller?.role === 'seller' || updated?.role === 'seller');
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentSeller');
    setUser(null);
    setIsSeller(false);
    navigate('/');
  };

  const handleSellClick = () => {
    if (isSeller) {
      navigate('/seller/dashboard');
    } else {
      navigate('/seller/login');
    }
  };

  return (
    <Disclosure as="nav" className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-[#193CB8]/10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              
              <div className="flex items-center gap-8">
                <Link to="/" className="flex shrink-0 items-center gap-3 group">
                  <img src={logo} alt="CarDealer Logo" className="h-14 w-14 transition-transform duration-300 group-hover:scale-105" />
                  <span className="font-bold text-2xl text-[#193CB8] whitespace-nowrap">CarDealer</span>
                </Link>
              </div>

              <div className="hidden lg:flex lg:items-center lg:gap-x-1">
                
                <Menu as="div" className="relative">
                  <MenuButton className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#193CB8] transition-colors duration-200 focus:outline-none">
                    Buy Cars
                    <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                  </MenuButton>
                  <MenuItems className="absolute left-0 mt-2 w-48 origin-top-left bg-white shadow-xl border border-gray-200 rounded-lg focus:outline-none transition ease-out duration-100 data-closed:scale-95 data-closed:opacity-0 overflow-hidden">
                    {buyCarLinks.map((item) => (
                      <MenuItem key={item.name}>
                        <Link
                          to={item.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#193CB8] hover:text-white transition-colors"
                        >
                          {item.name}
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>

                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) => classNames(
                      isActive 
                        ? 'text-[#193CB8] border-b-2 border-[#193CB8]' 
                        : 'text-gray-700 hover:text-[#193CB8]',
                      'px-4 py-2.5 text-sm font-semibold transition-colors duration-200'
                    )}
                  >
                    {item.name}
                  </NavLink>
                ))}
                
                <div className="ml-4 flex items-center gap-3 border-l border-gray-300 pl-4">
                  <button
                    onClick={handleSellClick}
                    className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#193CB8] transition-colors duration-200"
                  >
                    {isSeller ? 'Dashboard' : 'Sell Car'}
                  </button>
                  {user ? (
                    <Menu as="div" className="relative">
                      <MenuButton className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 transition-colors duration-200 focus:outline-none">
                        {user.profilePicture ? (
                          <img
                            src={user.profilePicture}
                            alt={user.name}
                            className="h-9 w-9 rounded-full object-cover border-2 border-[#193CB8]"
                          />
                        ) : (
                          <div className="h-9 w-9 rounded-full bg-[#193CB8] flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">{user.name?.charAt(0).toUpperCase()}</span>
                          </div>
                        )}
                        <div className="text-left">
                          <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                          <p className="text-xs text-gray-500">View Profile</p>
                        </div>
                        <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                      </MenuButton>

                      <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right bg-white shadow-xl border border-gray-200 rounded-lg focus:outline-none transition ease-out duration-100 data-closed:scale-95 data-closed:opacity-0 overflow-hidden">
                        <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
                          <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                          <p className="text-xs text-gray-600 mt-0.5">{user.email}</p>
                          {isSeller && (
                            <span className="inline-block mt-2 px-2 py-0.5 bg-[#193CB8] text-white text-xs font-semibold rounded">
                              Seller Account
                            </span>
                          )}
                        </div>
                        <MenuItem>
                          <Link
                            to="/profile"
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#193CB8] hover:text-white transition-colors"
                          >
                            <UserCircleIcon className="h-4 w-4 inline mr-2" />
                            My Profile
                          </Link>
                        </MenuItem>
                        {userLinks.map((item) => (
                          <MenuItem key={item.name}>
                            <Link
                              to={item.href}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#193CB8] hover:text-white transition-colors"
                            >
                              {item.name}
                            </Link>
                          </MenuItem>
                        ))}
                        {isSeller && (
                          <>
                            <div className="border-t border-gray-200 my-1"></div>
                            <MenuItem>
                              <Link
                                to="/seller/dashboard"
                                className="block px-4 py-3 text-sm font-semibold text-[#193CB8] hover:bg-[#193CB8] hover:text-white transition-colors"
                              >
                                Seller Dashboard
                              </Link>
                            </MenuItem>
                          </>
                        )}
                        <div className="border-t border-gray-200">
                          <MenuItem>
                            <button
                              onClick={handleLogout}
                              className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                            >
                              <ArrowRightStartOnRectangleIcon className="h-4 w-4 inline mr-2" />
                              Logout
                            </button>
                          </MenuItem>
                        </div>
                      </MenuItems>
                    </Menu>
                  ) : (
                    <Link
                      to="/login"
                      className="bg-blue-900 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-blue-800 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      Login / Signup
                    </Link>
                  )}
                </div>
              </div>

              <div className="flex lg:hidden">
                <DisclosureButton className="inline-flex items-center justify-center p-2 text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors duration-200">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XMarkIcon className="block h-7 w-7" />
                  ) : (
                    <Bars3Icon className="block h-7 w-7" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="lg:hidden border-t-2 border-gray-200 bg-white">
            <div className="space-y-1 px-4 pb-4 pt-3 max-h-[calc(100vh-5rem)] overflow-y-auto">
              
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

              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={NavLink}
                  to={item.href}
                  className={({ isActive }) => classNames(
                    isActive 
                      ? 'bg-[#193CB8] text-white' 
                      : 'text-gray-900 hover:bg-gray-100',
                    'block px-3 py-3 text-base font-semibold transition-colors duration-200 rounded-lg'
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}

              <div className="border-t border-gray-200 pt-3 mt-3">
                <DisclosureButton
                  as="button"
                  onClick={handleSellClick}
                  className="block w-full text-left px-3 py-3 text-base font-semibold text-[#193CB8] hover:bg-blue-50 rounded-lg transition-colors"
                >
                  {isSeller ? '📊 Dashboard' : '🚗 Sell Car'}
                </DisclosureButton>
              </div>
              
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
                        <div className="h-10 w-10 rounded-full bg-[#193CB8] flex items-center justify-center">
                          <span className="text-white font-semibold">{user.name?.charAt(0).toUpperCase()}</span>
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-600">{user.email}</p>
                        {isSeller && (
                          <span className="inline-block mt-1 px-2 py-0.5 bg-[#193CB8] text-white text-xs font-semibold rounded">
                            Seller
                          </span>
                        )}
                      </div>
                    </div>
                    <DisclosureButton
                      as={Link}
                      to="/profile"
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-base font-medium text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <UserCircleIcon className="h-5 w-5" />
                      My Profile
                    </DisclosureButton>
                    {userLinks.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as={Link}
                        to={item.href}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-base font-medium text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                    {isSeller && (
                      <>
                        <div className="border-t border-gray-300 my-2"></div>
                        <DisclosureButton
                          as={Link}
                          to="/seller/dashboard"
                          className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-base font-semibold text-[#193CB8] hover:bg-blue-50 transition-colors duration-200"
                        >
                          Seller Dashboard
                        </DisclosureButton>
                      </>
                    )}
                    <div className="border-t border-gray-300 mt-2 pt-2">
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-base font-medium text-red-600 hover:bg-red-50 transition-colors duration-200"
                      >
                        <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
                        Logout
                      </button>
                    </div>
                  </>
                ) : (
                  <DisclosureButton
                    as={Link}
                    to="/login"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-900 px-3 py-2.5 text-base font-medium text-white shadow-sm hover:bg-blue-800 transition-colors duration-200"
                  >
                    <UserCircleIcon className="h-5 w-5" />
                    <span>Login / Signup</span>
                  </DisclosureButton>
                )}
              </div>
            </div>
          </DisclosurePanel>

        </>
      )}
    </Disclosure>
  );
}

