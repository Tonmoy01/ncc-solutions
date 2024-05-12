const VisionContent = ({ data: { heading, text1, text2 } }) => {
  return (
    <>
      <h3 className='my-5 text-2xl font-lato'>
        <strong className='text-textGray'>{heading}</strong>
      </h3>
      <p className='leading-6 font-montserrat'>{text1}</p>
      <p className='mt-6 leading-6 font-montserra'>{text2}</p>
    </>
  );
};
export default VisionContent;
