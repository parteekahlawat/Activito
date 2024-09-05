import Image from 'next/image';

const Banner = () => {
  return (
    <div id="controls-carousel" className="relative w-full" data-carousel="static">
      <div className="relative h-screen overflow-hidden rounded-lg">
        <div className="duration-700 ease-in-out" data-carousel-item>
          <Image
            src="/banner_img1.jpg" // Ensure this path is correct and case-sensitive
            alt="Banner Image"
            layout="fill" // Fills the parent container
            objectFit="cover" // Ensures the image covers the entire container
            className="absolute block w-full h-full"
          />
          {/* Large text added */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-6xl font-bold">Welcome to the <span className='text-blue-500'>Game Zone</span> !</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
