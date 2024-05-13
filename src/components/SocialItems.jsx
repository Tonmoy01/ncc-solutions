import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialItems = () => {
  return (
    <div className='bg-primaryColor'>
      <div className='max-w-[800px] py-10 mx-auto text-center px-6 md:px-0'>
        <div className='flex justify-center gap-4 mb-6 text-2xl text-white'>
          <a href='https://www.facebook.com'>
            <FaFacebookF />
          </a>
          <a href='https://www.instagram.com'>
            <FaInstagram />
          </a>
          <a href='https://www.linkedin.com'>
            <FaLinkedinIn />
          </a>
        </div>
        <p className='text-base text-white'>
          NCC Solutions , Inc. is a 501(c)(3) Non-Profit Organization. Programs
          funded in part by the Cuyahoga County Board of Development
          Disabilities. All NCC facilities are “Smoke-Free”.
        </p>
        <p className='mt-5 font-medium text-center text-white'>
          Call: <span className='underline'>440-582-3300</span>
        </p>
      </div>
    </div>
  );
};
export default SocialItems;
