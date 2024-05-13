import heroImage from '../../assets/hero.jpeg';

const JobListingpage = () => {
  return (
    <div className='pb-10 bg-bodyColor'>
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
            Job Listings
          </h2>
        </div>
      </div>

      <div className='max-w-[1300px] mx-auto mt-12'>
        <div className='py-3 bg-gray-200'>
          <div className='flex justify-between px-8'>
            <h3 className='font-semibold text-textLightGray text-medium'>
              Job, Post Date, Department
            </h3>
            <p className='font-semibold text-textLightGray text-medium'>
              Location
            </p>
          </div>
        </div>

        <div className='p-8 bg-white border-b'>
          <div className='flex justify-between'>
            <h3 className='text-base font-semibold text-textBlue'>Driver</h3>
            <p className='font-light text-textLightGray'>Main Campus</p>
          </div>
          <div>
            <p className='font-light text-textLightGray'>
              5/10/2024 - HR Department
            </p>
          </div>
          <div className='mt-3'>
            <p className='text-textLightGray'>
              <span className='font-semibold'>Brief</span>: Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Cum, accusamus.
            </p>
          </div>
        </div>
        <div className='p-8 bg-white border-b'>
          <div className='flex justify-between'>
            <h3 className='text-base font-semibold text-textBlue'>Driver</h3>
            <p className='font-light text-textLightGray'>Main Campus</p>
          </div>
          <div>
            <p className='font-light text-textLightGray'>
              5/10/2024 - HR Department
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobListingpage;
