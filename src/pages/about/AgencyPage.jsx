import Card from './../../components/Card';
import heroImage from '../../assets/hero.jpeg';
import img1 from '../../assets/img1.jpg';
import card1 from '../../assets/card1.jpeg';
import card2 from '../../assets/card2.jpeg';

const AgencyPage = () => {
  return (
    <>
      <div
        className='relative bg-center bg-cover'
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className='absolute inset-0 bg-black opacity-40'></div>{' '}
        {/* Overlay */}
        <div className='container relative px-4 py-12 mx-auto md:py-24'>
          <h2 className='text-3xl font-semibold text-center text-white uppercase font-lato'>
            About Us
          </h2>
        </div>
      </div>

      <div className='flex gap-10 items-center max-w-[1300px] mx-auto my-10'>
        <div className='w-4/12'>
          <h2 className='text-3xl font-semibold text-center font-lato text-textBlue mb-9'>
            What Makes NCC Solutions Special?
          </h2>
          <div className='flex justify-center'>
            <button className='p-4 font-semibold rounded-md bg-btnYellow'>
              Learn About Life at NCC
            </button>
          </div>
        </div>
        <div className='w-8/12'>
          <h3 className='my-5 text-2xl font-lato'>
            <strong>Our Philosophy</strong>
          </h3>
          <p className='leading-6 font-montserrat'>
            NCC Solutions, Inc. is a non-profit organization dedicated to
            empowering individuals with developmental disabilities to live their
            best lives. We are dedicated to accommodating individuals with
            varying functioning levels and addressing the needs of individuals
            with mild to profound disabilities, including those with multiple
            disabilities. <br />
            <br />
            Our core principle is a "continuum of care," where we adapt living
            arrangements to individuals' developing independent living skills.
            We emphasize recognizing and seamlessly aligning their living
            environment with evolving capabilities.
          </p>
        </div>
      </div>

      <div className='py-10 bg-bgGray'>
        <div className='flex gap-10 items-center max-w-[1300px] mx-auto'>
          <div className='w-7/12'>
            <h3 className='my-5 text-2xl font-lato'>
              <strong className='text-textGray'>Our Mission</strong>
            </h3>
            <p className='leading-6 font-montserrat'>
              We empower individuals with developmental disabilities to reach
              their full potential and live fulfilling lives in their
              communities through personalized support and high-quality,
              person-centered services.
            </p>
          </div>
          <div className='w-5/12'>
            <img className='w-[500px] h-[300px]' src={img1} alt='' />
          </div>
        </div>
      </div>

      <div className='py-10'>
        <div className='flex gap-10 items-center max-w-[1300px] mx-auto'>
          <div className='w-5/12'>
            <img className='w-[500px] h-[300px]' src={img1} alt='' />
          </div>
          <div className='w-7/12'>
            <h3 className='my-5 text-2xl font-lato'>
              <strong>Our Story</strong>
            </h3>
            <p className='mb-10 leading-6 font-montserrat'>
              Since 1982, NCC Solutions, Inc. has provided comprehensive support
              services for individuals with developmental disabilities. We've
              expanded to meet community needs in over three decades of
              operation. We currently support 160+ individuals across 24
              locations in Cuyahoga County through diverse programs, including
              Intermediate Care Facilities, Individual Options Waiver services,
              Day Programming, and Community Volunteer Center initiatives.
            </p>

            <a href='#' className='font-semibold underline text-textBlue'>
              Learn more about our Team {'>'}
            </a>
          </div>
        </div>
      </div>

      <div className='max-w-[1300px] flex gap-10 mx-auto '>
        <Card img={card1} text={'Life at NCC'} />
        <Card img={card2} text={'Meet Our Team'} />
      </div>
    </>
  );
};
export default AgencyPage;
