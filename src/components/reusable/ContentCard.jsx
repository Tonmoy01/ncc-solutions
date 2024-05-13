const ContentCard = ({ content, idx }) => {
  const { id, heading, texts, topHeading, btnText, img, linkText } = content;
  return (
    <div className={`${idx % 2 !== 0 ? 'bg-gray-100' : ''}`}>
      <div
        className={`flex flex-col md:flex-row ${
          idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
        } gap-6 md:gap-6 items-center max-w-6xl mx-auto py-4 md:py-14 px-4 md:px-0`}
      >
        {img ? (
          <div className='w-full md:w-5/12'>
            <img
              className='w-full h-auto md:h-[300px] object-cover'
              src={img}
              alt=''
            />
          </div>
        ) : (
          <div className='w-full md:w-5/12'>
            <h2 className='text-3xl font-medium max-w-[300px] mx-auto text-center text-[#1d6ab8] font-lato pb-4'>
              {topHeading}
            </h2>
            <div className='flex justify-center pb-6'>
              <button className='p-4 font-semibold text-white bg-yellow-500 rounded-md'>
                {btnText}
              </button>
            </div>
          </div>
        )}
        <div className='w-full md:w-7/12'>
          <h3 className='text-2xl text-black pb-7 font-lato'>
            <strong>{heading}</strong>
          </h3>
          {texts?.map((text, idx) => (
            <p key={idx} className='mb-8 leading-7 text-black'>
              {text}
            </p>
          ))}

          {linkText ? (
            <a href='#' className='font-semibold text-blue-600 underline'>
              {linkText}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default ContentCard;
