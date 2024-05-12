import imageAssets from '@assets/image-asset.jpg';

const ImageGallary = () => {
  return (
    <>
      <h2 className='mt-16 mb-8 text-3xl font-semibold text-center'>
        Latest Updates from Our Team
      </h2>
      <div className='max-w-[1300px] grid grid-cols-3 gap-5 mx-auto'>
        {Array.from({ length: 9 }).map((_, idx) => (
          <div key={idx}>
            <img src={imageAssets} alt='Image' />
          </div>
        ))}
      </div>
    </>
  );
};
export default ImageGallary;
