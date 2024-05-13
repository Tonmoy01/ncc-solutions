import Card from './Card';
import card1 from '@assets/card1.jpeg';
import card2 from '@assets/card2.jpeg';
import Quots from './Quots';

const Content = () => {
  return (
    <>
      <div className='max-w-[1300px] mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        <h2 className='text-2xl text-[#2c3e50] font-semibold text-center sm:text-3xl leading-7'>
          We support individuals with developmental disabilities to live their{' '}
          <br />
          best lives.
        </h2>
        <p className='mt-6 leading-6 text-textBlack'>
          NCC Solutions, Inc. is a non-profit organization that provides housing
          and support services to individuals with developmental disabilities,
          enabling them to live their best lives in a community setting. We are
          committed to providing high-quality services and support in a caring
          and supportive environment, and we believe the most effective way to
          provide that care is by maintaining high standards of care, building
          team spirit among staff, and providing a friendly and welcoming
          environment for our clients and their visitors.
        </p>
        <p className='mt-4 leading-6 text-textBlack'>
          We understand that transitions can be difficult, so we strive to
          facilitate that process in an informed and comfortable way for our
          individuals and their families.
        </p>
      </div>

      <div className='max-w-[1400px] flex flex-col sm:flex-row gap-3 mx-auto px-5 md:px-0'>
        <Card img={card1} text={'View Our Services'} />
        <Card img={card2} text={'Apply to Work Here'} />
      </div>

      <div className='py-2'>
        <Quots />
      </div>
    </>
  );
};
export default Content;
