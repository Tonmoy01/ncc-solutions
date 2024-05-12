import { FaQuoteLeft } from 'react-icons/fa';

const Quots = () => {
  return (
    <div className='mt-20 bg-primaryColor'>
      <div className='max-w-[1300px] py-10 mx-auto text-center'>
        <p className='flex justify-center mb-6 text-2xl text-white'>
          <FaQuoteLeft />
        </p>
        <p className='italic text-white'>
          “We are truly blessed to have found this home and the sincere, loving,
          and caring staff that work together to make it such a beautiful place.
          We thank God every day for our son, this home, and that our nights are
          no longer sleepless. We finally found our son a place called home.”
        </p>
      </div>
    </div>
  );
};
export default Quots;
