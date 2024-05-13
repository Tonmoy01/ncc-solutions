import heroImage from '@assets/hero.jpeg';

const Hero = () => {
  return (
    <div
      className='relative bg-center bg-cover'
      style={{
        backgroundImage: `url(${heroImage})`,
        height: '50vh',
        objectFit: 'cover',
      }}
    >
      <div className='absolute inset-0 bg-black opacity-40'></div>{' '}
      {/* Overlay */}
      <div className='container relative px-4 py-12 mx-auto md:py-24'>
        <h1 className='mb-4 hidden md:block text-[24px] md:text-[32px] font-semibold leading-snug text-white '>
          Empowering individuals with <br /> developmental disabilities <br />{' '}
          to reach their full potential.
        </h1>
        <div>
          <button className='hidden px-6 py-3 mt-5 text-base font-semibold text-white rounded-md md:block md:px-8 md:py-4 md:text-lg bg-secondaryColor hover:opacity-90'>
            Learn More About NCC
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
