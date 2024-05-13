const VisionContent = ({ data: { heading, text1, text2 } }) => {
  return (
    <div className='px-4 md:px-0'>
      <h3 className='my-5 text-2xl'>
        <strong className='text-textGray'>{heading}</strong>
      </h3>
      <p className='leading-6 font-montserrat'>{text1}</p>
      <p className='mt-6 leading-6 font-montserra'>{text2}</p>
    </div>
  );
};
export default VisionContent;
