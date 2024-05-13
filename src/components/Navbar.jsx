import React, { useState } from 'react';
import logo from '@assets/logo.png';
import closeIcon from '../assets/close.svg';
import hamBurgerIcon from '@assets/hamBurger.svg';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuDatas = [
    {
      id: uuidv4(),
      title: 'About',
      subTitle: [
        {
          id: uuidv4(),
          name: 'Agency Overview',
          target: '/agency',
        },
        {
          id: uuidv4(),
          name: 'Mission Statement',
          target: '/mission',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Services',
      subTitle: [
        {
          id: uuidv4(),
          name: 'List of Services',
          target: '/list-services',
        },
        {
          id: uuidv4(),
          name: 'Case Studies',
          target: '/case-studies',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Job Application Portal',
      subTitle: [
        {
          id: uuidv4(),
          name: 'Job Listings',
          target: '/job-listings',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Resources',
      subTitle: [
        {
          id: uuidv4(),
          name: 'FAQs',
          target: '/faq',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Contact Us',
      subTitle: [
        {
          id: uuidv4(),
          name: 'Contact Information',
          target: '/contact-info',
        },
        {
          id: uuidv4(),
          name: 'Contact Form',
          target: '/contact-form',
        },
      ],
    },
  ];

  return (
    <nav className='p-4'>
      <div className='flex items-center justify-between mx-auto'>
        <div className='flex items-center'>
          <Link to='/'>
            <img className='w-36' src={logo} alt='logo' />
          </Link>
        </div>
        <div className='hidden md:block'>
          <ul className='flex items-center space-x-14'>
            {menuDatas?.map(({ id, title, subTitle }) => (
              <li className='relative text-primaryColor group' key={id}>
                <div className='flex items-center gap-2 cursor-pointer hover:text-gray-300'>
                  <p className='text-sm'>{title}</p>
                  <MdKeyboardArrowDown className='text-sm font-light' />
                </div>
                <div className='absolute right-0 invisible text-right transition-opacity duration-300 bg-white rounded-lg shadow-lg top-[105%] w-40 group-hover:visible z-50'>
                  {subTitle.map(({ id, name, target }) => (
                    <Link
                      to={target}
                      className='block py-2 pr-4 hover:text-gray-300'
                      key={id}
                    >
                      <p className='text-sm'>{name}</p>
                    </Link>
                  ))}
                </div>
              </li>
            ))}
            <button className='flex px-4 py-2 ml-5 font-semibold text-white uppercase rounded-md bg-primaryColor hover:opacity-65'>
              Donate
            </button>
          </ul>
        </div>
        {/* Hamburger menu for mobile */}
        <div className='z-50 md:hidden'>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='flex items-center px-3 py-2 border rounded text-primaryColor border-primaryColor focus:outline-none'
          >
            <svg
              className='w-6 h-6'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4 6H20M4 12H20M4 18H20'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          {isMobileMenuOpen && (
            <div className='absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden'>
              <div className='bg-white divide-y divide-gray-100 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                <div className='px-5 pt-5 pb-6'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <Link to='/'>
                        <img className='w-24' src={logo} alt='logo' />
                      </Link>
                    </div>
                    <div className='-mr-2'>
                      <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        type='button'
                        className='inline-flex items-center justify-center p-2 rounded-md text-primaryColor hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primaryColor'
                      >
                        <span className='sr-only'>Close menu</span>
                        <svg
                          className='w-6 h-6'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M6 18L18 6M6 6l12 12'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='px-2 pt-2 pb-3 space-y-1'>
                  {menuDatas?.map(({ id, title, subTitle }) => (
                    <div key={id}>
                      <p className='text-base font-medium text-gray-900'>
                        {title}
                      </p>
                      <ul className='mt-1 space-y-1'>
                        {subTitle.map(({ id, name, target }) => (
                          <li key={id}>
                            <Link
                              to={target}
                              className='text-sm text-gray-500 hover:text-gray-900'
                            >
                              {name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className='px-5 py-6 space-y-6'>
                  <button className='flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primaryColor hover:bg-opacity-75'>
                    Donate
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
