import imageAssets from '@assets/image-asset.jpg';

const ImageGallery = () => {
  return (
    <div className='pb-14 md:pb-20'>
      <h2 className='mb-4 text-3xl font-semibold text-center  font-lato sm:mt-8 sm:text-3xl'>
        Latest Updates from Our Team
      </h2>
      <div className='max-w-[1300px] grid grid-cols-2 gap-5 px-4 mx-auto md:px-0 sm:grid-cols-2 md:grid-cols-3'>
        {Array.from({ length: 9 }).map((_, idx) => (
          <div key={idx}>
            <img src={imageAssets} alt='Image' className='w-full' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
