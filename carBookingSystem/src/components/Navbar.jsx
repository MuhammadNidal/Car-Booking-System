import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import logo from "/src/assets/logo.png"


const navigation = [
    { name: 'Sell', href: '/sell' },
    { name: 'Compare', href: '/compare' },
    { name: 'Price Estimator', href: '/estimator' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

const buyCarLinks = [
    { name: 'Used Cars', href: '/cars/used' },
    { name: 'New Cars', href: '/cars/new' },
    { name: 'Certified Cars', href: '/cars/certified' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-gray-200/60 backdrop-blur-3xl shadow-sm sticky w-full top-0 z-50 border-b border-gray-200/50">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">

                            {/* Logo */}
                            <div className="flex items-center ">
                                <Link to="/" className="flex flex-shrink-0 items-center gap-1 group transition-opacity duration-300 hover:opacity-80">
                                    <img src={logo} alt="" width={"50"} />
                    <span className="font-bold text-xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent whitespace-nowrap ">
                    <p className='text-blue-900'>AutoChoice</p>
                  </span>
                                </Link>
                            </div>

                            
                            <div className="hidden lg:flex lg:items-center lg:gap-x-2">

                             
                                <Menu as="div" className="relative">
                                    <MenuButton className="group inline-flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 relative">
                                        Buy
                                        <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                       
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-[calc(100%-2rem)] scale-x-0 bg-blue-900 transition-transform duration-300 group-hover:scale-x-100"></span>
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
                                                        className="text-gray-900 group flex w-full items-center rounded-md px-3 py-2 text-sm data-focus:bg-blue-900 data-focus:text-white transition-colors duration-150"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </MenuItem>
                                            ))}
                                        </div>
                                    </MenuItems>
                                </Menu>

                              
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        className={({ isActive }) => classNames(
                                            isActive
                                                ? 'bg-blue-900 text-white'
                                                : 'text-gray-700 hover:bg-gray-100',
                                            'group relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200'
                                        )}
                                    >
                                        {item.name}
                                        {/* Hover underline animation */}
                                        <span className=" absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-[calc(100%-2rem)] scale-x-0 bg-blue-900 transition-transform duration-300 group-hover:scale-x-100"></span>
                                    </NavLink>
                                ))}
                            </div>

                            {/* Right side buttons */}
                            <div className="flex items-center gap-4">
                                {/* Login/Signup Button - Desktop */}
                                <Link
                                    to="/login"
                                    className="hidden lg:inline-flex items-center justify-center gap-1.5 rounded-full bg-blue-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                                >
                                    <UserCircleIcon className="h-5 w-5" />
                                    Login / Signup
                                </Link>

                                {/* Mobile menu button */}
                                <div className="flex lg:hidden">
                                    <DisclosureButton className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200">
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
                                <DisclosureButton
                                    key={item.name}
                                    as={NavLink}
                                    to={item.href}
                                    className={({ isActive }) => classNames(
                                        isActive
                                            ? 'bg-blue-900 text-white'
                                            : 'text-gray-900 hover:bg-gray-100',
                                        'block rounded-lg px-3 py-2.5 text-base font-medium transition-colors duration-200'
                                    )}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}

                            <div className="pt-3 mt-3 border-t border-gray-200">
                                {/* Mobile Login/Signup Button */}
                                <DisclosureButton
                                    as={Link}
                                    to="/login"
                                    className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-900 px-3 py-2.5 text-base font-medium text-white shadow-sm hover:bg-blue-700 transition-colors duration-200"
                                >
                                    <UserCircleIcon className="h-5 w-5" />
                                    <span>Login / Signup</span>
                                </DisclosureButton>
                            </div>
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}

