const ContentCard = ({ content, idx }) => {
  const { id, heading, texts, leftHeading, btnText, img, linkText } = content;
  return (
    <div className={`${idx % 2 !== 0 ? 'bg-bgGray' : null}`}>
      <div
        className={`flex ${
          idx % 2 !== 0 ? 'flex-row-reverse' : null
        } gap-16 items-center max-w-[1300px] mx-auto pt-14 pb-24`}
      >
        {img ? (
          <div className='w-5/12'>
            <img className='w-full h-[300px] object-cover' src={img} alt='' />
          </div>
        ) : (
          <div className='w-5/12'>
            <h2 className='text-3xl font-semibold text-center font-lato text-textBlue mb-9'>
              {leftHeading}
            </h2>
            <div className='flex justify-center'>
              <button className='p-4 font-semibold rounded-md bg-btnYellow'>
                {btnText}
              </button>
            </div>
          </div>
        )}
        <div className='w-7/12'>
          <h3 className='text-2xl pb-7 font-lato text-textBlack'>
            <strong>{heading}</strong>
          </h3>
          {texts?.map((text, idx) => (
            <p key={idx} className='mb-8 leading-7 text-textBlack'>
              {text}
            </p>
          ))}

          {linkText ? (
            <a href='#' className='font-semibold underline text-textBlue'>
              {linkText}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default ContentCard;
