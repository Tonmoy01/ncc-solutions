import React from 'react';
import logo from '@assets/logo.png';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

const Navbar = () => {
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
                  <FaAngleDown className='text-sm font-light' />
                </div>
                <div className='absolute right-0 invisible text-right transition-opacity duration-300 bg-white rounded-lg shadow-lg top-[120%] w-60 group-hover:visible z-50'>
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
            <button className='flex px-4 py-2 ml-5 text-white rounded-md bg-primaryColor'>
              Donate
            </button>
          </ul>
        </div>
        {/* Hamburger menu for mobile */}
        <div className='md:hidden'>{/* TODO: Add mobile menu toggle */}</div>
      </div>
    </nav>
  );
};

export default Navbar;
