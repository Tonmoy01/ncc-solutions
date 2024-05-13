import logo from '@assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto'>
      <div className='flex flex-col items-center gap-10 mt-10 sm:flex-row sm:justify-center sm:gap-20'>
        <img className='w-40 sm:w-96' src={logo} alt='Logo' />
        <div className='text-center sm:text-left'>
          <p className='font-bold'>Our Address</p>
          <p>12627 York Road</p>
          <p>North Royalton, OH 44133</p>
        </div>
        <div className='text-center sm:text-left'>
          <p className='font-bold'>Contact Us</p>
          <p>440-582-3300</p>
          <p>info@necare.org</p>
        </div>
        <div className='text-center sm:text-left'>
          <p className='font-bold'>Office Hours</p>
          <p>M-F: 9am to 5pm</p>
          <p>Sa-Su: Closed</p>
        </div>
      </div>
      <p className='px-4 mt-5 mb-10 text-center md:px-0'>
        <Link to='/' className='text-blue-700 underline'>
          Accessibility Statement
        </Link>{' '}
        | © 2024 All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
