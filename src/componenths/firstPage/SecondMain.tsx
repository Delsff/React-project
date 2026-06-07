import { useEffect, useRef } from 'react';

export const SecondMain: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll('.section-block');
    if (!elements || elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -20px 0px',
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .section-block {
          opacity: 0;
          transform: translateY(20px); 
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          will-change: transform, opacity;
        }

        .section-block.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div
        ref={containerRef}
        style={{ backgroundImage: 'url(/imgMainSecond/Rectangle12.png)' }}
        className='w-full bg-cover bg-center bg-no-repeat rounded-br-lg mt-[50px] mx-auto px-4 lg:px-8 py-8 overflow-hidden'
      >
        <div className='section-block flex flex-col gap-[10px] text-left max-w-[1520px] mx-auto mb-8'>
          <h1 className='font-[Roboto] font-[700] text-[28px] md:text-[36px] text-[#2F327D]'>
            Explore Course
          </h1>
          <p className='font-[Roboto] font-[500] text-[16px] md:text-[20px] text-[#696984]'>
            Ut sed eros finibus, placerat orci id, dapibus.
          </p>
        </div>
        <div className='section-block max-w-[1520px] mx-auto mb-12 min-w-0'>
          <div className='flex flex-row justify-between items-center w-full py-[20px] border-b border-gray-100 gap-4'>
            <div className='flex items-center gap-[10px]'>
              <img
                src='/imgMainSecond/android-color-palette.png'
                alt='img'
                className='w-[30px] h-[30px] object-contain flex-shrink-0'
              />
              <h2 className='font-[Roboto] font-[600] text-[18px] md:text-[22px] text-[#2F327D]'>
                lorem ipsum
              </h2>
            </div>
            <div className='flex items-center gap-[15px] md:gap-[25px]'>
              <button className='text-[#00BCD4] font-[Roboto] text-[16px] md:text-[18px] cursor-pointer font-[500] hover:text-blue-400 transition-colors whitespace-nowrap'>
                SEE ALL
              </button>
              <img
                src='/imgMainSecond/Icon_8_.png'
                alt='img'
                className='cursor-pointer h-8 md:h-10 object-contain flex-shrink-0'
              />
            </div>
          </div>
          <div className='w-full flex flex-col lg:flex-row p-4 md:p-6 gap-6 relative items-center lg:items-start min-w-0'>
            <div className='flex flex-nowrap gap-2 md:gap-4 justify-center lg:justify-start flex-1 w-full min-w-0 overflow-hidden'>
              <img
                src='/imgMainSecond/Book.png'
                alt='img'
                className='h-32 sm:h-48 md:h-64 lg:h-80 object-contain flex-shrink min-w-0'
              />
              <img
                src='/imgMainSecond/Book2.png'
                alt='img'
                className='h-32 sm:h-48 md:h-64 lg:h-80 object-contain flex-shrink min-w-0'
              />
              <img
                src='/imgMainSecond/Book3.png'
                alt='img'
                className='h-32 sm:h-48 md:h-64 lg:h-80 object-contain flex-shrink min-w-0'
              />
              <img
                src='/imgMainSecond/Book4.png'
                alt='img'
                className='h-32 sm:h-48 md:h-64 lg:h-80 object-contain flex-shrink min-w-0'
              />
              <img
                src='/imgMainSecond/Book5.png'
                alt='img'
                className='h-32 sm:h-48 md:h-64 lg:h-80 object-contain flex-shrink min-w-0'
              />
              <img
                src='/imgMainSecond/Book6.png'
                alt='img'
                className='h-32 sm:h-48 md:h-64 lg:h-80 object-contain flex-shrink min-w-0'
              />
              <img
                src='/imgMainSecond/Book7.png'
                alt='img'
                className='h-32 sm:h-48 md:h-64 lg:h-80 object-contain flex-shrink min-w-0'
              />
            </div>
            <div className='w-full lg:w-auto flex justify-center flex-shrink-0'>
              <img
                src='/imgMainSecond/Detail.png'
                alt='img'
                className='h-32 sm:h-48 md:h-60 lg:h-70 lg:mt-[30px] object-contain'
              />
            </div>
            <img
              src='/imgMainSecond/Rectangle3.png'
              alt='img'
              className='absolute bottom-[20px] left-[20px] -z-10 w-[150px] md:w-[300px] object-cover opacity-40 lg:opacity-100'
            />
          </div>
        </div>
        <div className='section-block max-w-[1520px] mx-auto mb-12 min-w-0'>
          <div className='flex flex-row justify-between items-center w-full py-[20px] border-b border-gray-100 gap-4'>
            <div className='flex items-center gap-[10px]'>
              <img
                src='/imgMainSecond/android-globe.png'
                alt='img'
                className='w-[30px] h-[30px] object-contain flex-shrink-0'
              />
              <h2 className='font-[Roboto] font-[600] text-[18px] md:text-[22px] text-[#2F327D]'>
                Quisque a Consequat
              </h2>
            </div>
            <div className='flex items-center gap-[15px] md:gap-[25px]'>
              <button className='text-[#00BCD4] font-[Roboto] text-[16px] md:text-[18px] cursor-pointer font-[500] hover:text-blue-400 transition-colors whitespace-nowrap'>
                SEE ALL
              </button>
              <img
                src='/imgMainSecond/Icon_8_.png'
                alt='img'
                className='cursor-pointer h-8 md:h-10 object-contain flex-shrink-0'
              />
            </div>
          </div>
          <div className='w-full flex flex-col lg:flex-row p-4 md:p-6 gap-6 relative items-center lg:items-start min-w-0'>
            <div className='flex flex-nowrap gap-2 md:gap-4 justify-center lg:justify-start flex-1 w-full min-w-0 overflow-hidden'>
              <img
                src='/imgMainSecond/Book.png'
                alt='img'
                className='h-32 sm:h-48 md:h-64 lg:h-80 object-contain flex-shrink min-w-0'
              />
              <img
                src='/imgMainSecond/Book2.png'
                alt='img'
                className='h-32 sm:h-48 md:h-64 lg:h-80 object-contain flex-shrink min-w-0'
              />
              <img
                src='/imgMainSecond/Book3.png'
                alt='img'
                className='h-32 sm:h-48 md:h-64 lg:h-80 object-contain flex-shrink min-w-0'
              />
              <img
                src='/imgMainSecond/Book4.png'
                alt='img'
                className='h-32 sm:h-48 md:h-64 lg:h-80 object-contain flex-shrink min-w-0'
              />
              <img
                src='/imgMainSecond/Book8.png'
                alt='img'
                className='h-32 sm:h-48 md:h-64 lg:h-80 object-contain flex-shrink min-w-0'
              />
              <img
                src='/imgMainSecond/Book6.png'
                alt='img'
                className='h-32 sm:h-48 md:h-64 lg:h-80 object-contain flex-shrink min-w-0'
              />
              <img
                src='/imgMainSecond/Book7.png'
                alt='img'
                className='h-32 sm:h-48 md:h-64 lg:h-80 object-contain flex-shrink min-w-0'
              />
            </div>
            <div className='w-full lg:w-auto flex justify-center flex-shrink-0'>
              <img
                src='/imgMainSecond/Untitled.png'
                alt='img'
                className='h-32 sm:h-48 md:h-60 lg:h-70 lg:mt-[30px] object-contain'
              />
            </div>
            <img
              src='/imgMainSecond/Rectangle3.png'
              alt='img'
              className='absolute bottom-[20px] left-[20px] -z-10 w-[150px] md:w-[300px] object-cover opacity-40 lg:opacity-100'
            />
          </div>
        </div>
        <div className='section-block max-w-[1520px] mx-auto mb-6 min-w-0'>
          <div className='flex flex-row justify-between items-center w-full py-[20px] border-b border-gray-100 gap-4'>
            <div className='flex items-center gap-[10px]'>
              <img
                src='/imgMainSecond/android-globe.png'
                alt='img'
                className='w-[30px] h-[30px] object-contain flex-shrink-0'
              />
              <h2 className='font-[Roboto] font-[600] text-[18px] md:text-[22px] text-[#2F327D]'>
                Quisque a Consequat
              </h2>
            </div>
            <div className='flex items-center gap-[15px] md:gap-[25px]'>
              <button className='text-[#00BCD4] font-[Roboto] text-[16px] md:text-[18px] cursor-pointer font-[500] hover:text-blue-400 transition-colors whitespace-nowrap'>
                SEE ALL
              </button>
              <img
                src='/imgMainSecond/Icon_8_.png'
                alt='img'
                className='cursor-pointer h-8 md:h-10 object-contain flex-shrink-0'
              />
            </div>
          </div>
          <div className='w-full flex flex-col lg:flex-row p-4 md:p-6 gap-6 relative items-center lg:items-start min-w-0'>
            <div className='flex flex-nowrap gap-2 md:gap-4 justify-center lg:justify-start flex-1 w-full min-w-0 overflow-hidden'>
              <img
                src='/imgMainSecond/Book.png'
                alt='img'
                className='h-32 sm:h-48 md:h-64 lg:h-80 object-contain flex-shrink min-w-0'
              />
              <img
                src='/imgMainSecond/Book2.png'
                alt='img'
                className='h-32 sm:h-48 md:h-64 lg:h-80 object-contain flex-shrink min-w-0'
              />
              <img
                src='/imgMainSecond/Book3.png'
                alt='img'
                className='h-32 sm:h-48 md:h-64 lg:h-80 object-contain flex-shrink min-w-0'
              />
              <img
                src='/imgMainSecond/Book4.png'
                alt='img'
                className='h-32 sm:h-48 md:h-64 lg:h-80 object-contain flex-shrink min-w-0'
              />
              <img
                src='/imgMainSecond/Book8.png'
                alt='img'
                className='h-32 sm:h-48 md:h-64 lg:h-80 object-contain flex-shrink min-w-0'
              />
              <img
                src='/imgMainSecond/Book6.png'
                alt='img'
                className='h-32 sm:h-48 md:h-64 lg:h-80 object-contain flex-shrink min-w-0'
              />
              <img
                src='/imgMainSecond/Book7.png'
                alt='img'
                className='h-32 sm:h-48 md:h-64 lg:h-80 object-contain flex-shrink min-w-0'
              />
            </div>
            <div className='w-full lg:w-auto flex justify-center flex-shrink-0'>
              <img
                src='/imgMainSecond/Detail2.png'
                alt='img'
                className='h-32 sm:h-48 md:h-60 lg:h-70 lg:mt-[30px] object-contain'
              />
            </div>
            <img
              src='/imgMainSecond/Rectangle3.png'
              alt='img'
              className='absolute bottom-[20px] left-[20px] -z-10 w-[150px] md:w-[300px] object-cover opacity-40 lg:opacity-100'
            />
          </div>
        </div>
      </div>
    </>
  );
};
