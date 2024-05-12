import heroImage from '@assets/hero.jpeg';

const Hero = () => {
  return (
    <div
      className='relative bg-center bg-cover'
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className='absolute inset-0 bg-black opacity-40'></div>{' '}
      {/* Overlay */}
      <div className='container relative px-4 py-12 mx-auto md:py-24'>
        <h1 className='mb-4 text-[32px] font-semibold leading-snug text-white'>
          Empowering individuals with <br /> developmental disabilities <br />{' '}
          to reach their full potential.
        </h1>
        <div>
          <button className='px-8 py-4 mt-5 text-base font-semibold text-white rounded-md bg-secondaryColor hover:opacity-90'>
            Learn More About NCC
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
