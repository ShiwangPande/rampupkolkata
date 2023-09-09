'use client';

import { Button, Navbar } from 'flowbite-react';
import logo from "./logo.png";
export default function NavbarWithCTAButton() {
  return (
    <Navbar
      fluid
      rounded
      className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-16 sm:h-9"
          src={logo}
        />
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Ramp Up Kolkata
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="/"
          className='block text-lg py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-600 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="/about"
          className='block text-lg py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-600 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
        >
          About
        </Navbar.Link>
        <Navbar.Link href="/contact"
          className='block text-lg py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-600 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
        >
          Contact
        </Navbar.Link>

      </Navbar.Collapse>
    </Navbar>
  )
}


