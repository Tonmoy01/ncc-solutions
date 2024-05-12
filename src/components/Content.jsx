import Card from './Card';
import card1 from '@assets/card1.jpeg';
import card2 from '@assets/card2.jpeg';
import Quots from './Quots';

const Content = () => {
  return (
    <>
      <div className='container m-auto p-28'>
        <h2 className='text-3xl font-semibold text-center'>
          We support individuals with developmental disabilities to live their{' '}
          <br />
          best lives.
        </h2>
        <p className='mt-10 font-semibold text-center'>
          Call: <span className='underline'>440-582-3300</span>
        </p>
        <p className='mt-10'>
          NCC Solutions, Inc. is a non-profit organization that provides housing
          and support services to individuals with developmental disabilities,
          enabling them to live their best lives in a community setting. We are
          committed to providing high-quality services and support in a caring
          and supportive environment, and we believe the most effective way to
          provide that care is by maintaining high standards of care, building
          team spirit among staff, and providing a friendly and welcoming
          environment for our clients and their visitors.
        </p>
        <p className='mt-5'>
          We understand that transitions can be difficult, so we strive to
          facilitate that process in an informed and comfortable way for our
          individuals and their families.
        </p>
      </div>

      <div className='max-w-[1400px] flex gap-3 mx-auto '>
        <Card img={card1} text={'View Our Services'} />
        <Card img={card2} text={'Apply to Work Here'} />
      </div>

      <div>
        <Quots />
      </div>
    </>
  );
};
export default Content;
