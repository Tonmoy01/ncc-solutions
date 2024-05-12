const Card = ({ img, text }) => {
  return (
    <div className='w-full h-[400px] relative'>
      <img className='object-cover w-full h-full' src={img} alt='card image' />
      <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-40'>
        <div className='p-[2px] bg-white hover:opacity-65'>
          <button className='px-8 py-4 font-semibold text-black bg-white border-2 border-black'>
            {text}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
