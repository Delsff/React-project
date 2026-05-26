import { useEffect, useRef } from 'react';

export const SecondMain: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll('.scroll-anim');
    if (!elements || elements.length === 0) return;
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px 0px 0px',
      },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .scroll-anim {
          opacity: 0;
          transform: translateY(25px); 
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }

        .scroll-anim.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <div
        ref={containerRef}
        style={{ backgroundImage: 'url(/imgMainSecond/Rectangle12.png)' }}
        className='w-full bg-auto bg-no-repeat bg-cover rounded-br-lg mt-[50px]'
      >
        <div className='scroll-anim flex flex-col gap-[10px] text-left p-25'>
          <h1 className='scroll-anim font-[Roboto] font-[700] text-[25px]'>Explore Course</h1>
          <p className='scroll-anim font-[Roboto] font-[500] text-[20px]'>
            Ut sed eros finibus, placerat orci id, dapibus.
          </p>
        </div>
        <div className='scroll-anim flex flex-wrap p-25 py-[20px] justify-between w-[1520px]'>
          <div className='flex flex-wrap gap-[10px] '>
            <img
              src='/imgMainSecond/android-color-palette.png'
              alt='img'
              className='w-[30px] h-[30px]'
            />
            <h1>lorem ipsum</h1>
          </div>
          <div className='flex flex-wrap gap-[25px] mr-[10px]'>
            <button className='text-[#00BCD4] font-[Roboto] w-[90px] h-[40px] text-[20px] cursor-pointer font-[500] hover:text-blue-400'>
              SEE ALL
            </button>
            <img src='/imgMainSecond/Icon_8_.png' alt='img' className='cursor-pointer h-10' />
          </div>
        </div>
        <div className='scroll-anim w-[1550px] flex flex-wrap p-20 gap-[10px] relative'>
          <div className='flex flex-wrap'>
            <img src='/imgMainSecond/Book.png' alt='img' className='h-80' />
            <img src='/imgMainSecond/Book2.png' alt='img' className='h-80' />
            <img src='/imgMainSecond/Book3.png' alt='img' className='h-80' />
            <img src='/imgMainSecond/Book4.png' alt='img' className='h-80' />
            <img src='/imgMainSecond/Book5.png' alt='img' className='h-80' />
            <img src='/imgMainSecond/Book6.png' alt='img' className='h-80' />
            <img src='/imgMainSecond/Book7.png' alt='img' className='h-80' />
          </div>
          <div>
            <img src='/imgMainSecond/Detail.png' alt='img' className='h-70 mt-[30px]' />
          </div>
          <div>
            <img
              src='/imgMainSecond/Rectangle3.png'
              alt='img'
              className='absolute bottom-[60px] left-0 object-cover left-[30px] -z-10 w-360'
            />
          </div>
        </div>
        <div>
          <div className='scroll-anim flex flex-wrap p-25 py-[20px] justify-between w-[1520px]'>
            <div className='flex flex-wrap gap-[10px]'>
              <img
                src='/imgMainSecond/android-globe.png'
                alt='img'
                className='w-[30px] h-[30px] scroll-anim'
              />
              <h1>Quisque a Consequat</h1>
            </div>
            <div className='flex flex-wrap gap-[25px] mr-[10px]'>
              <button className='scroll-anim text-[#00BCD4] font-[Roboto] w-[90px] h-[40px] text-[20px] cursor-pointer font-[500] hover:text-blue-400'>
                SEE ALL
              </button>
              <img src='/imgMainSecond/Icon_8_.png' alt='img' className='cursor-pointer h-10' />
            </div>
          </div>
          <div className='scroll-anim w-[1550px] flex flex-wrap p-20 gap-[10px] relative'>
            <div className='flex flex-wrap'>
              <img src='/imgMainSecond/Book.png' alt='img' className='h-80' />
              <img src='/imgMainSecond/Book2.png' alt='img' className='h-80' />
              <img src='/imgMainSecond/Book3.png' alt='img' className='h-80' />
              <img src='/imgMainSecond/Book4.png' alt='img' className='h-80' />
            </div>
            <div>
              <img src='/imgMainSecond/Untitled.png' alt='img' className='h-70 mt-[30px]' />
            </div>
            <div className='flex flex-wrap'>
              <img src='/imgMainSecond/Book8.png' alt='img' className='h-80' />
              <img src='/imgMainSecond/Book6.png' alt='img' className='h-80' />
              <img src='/imgMainSecond/Book7.png' alt='img' className='h-80' />
            </div>
            <div>
              <img
                src='/imgMainSecond/Rectangle3.png'
                alt='img'
                className='absolute bottom-[60px] left-0 object-cover left-[30px] -z-10 w-360'
              />
            </div>
          </div>
          <div>
            <div className='scroll-anim flex flex-wrap p-25 py-[20px] justify-between w-[1520px]'>
              <div className='flex flex-wrap gap-[10px]'>
                <img
                  src='/imgMainSecond/android-globe.png'
                  alt='img'
                  className='w-[30px] h-[30px]'
                />
                <h1>Quisque a Consequat</h1>
              </div>
              <div className='flex flex-wrap gap-[25px] mr-[10px]'>
                <button className='text-[#00BCD4] font-[Roboto] w-[90px] h-[40px] text-[20px] cursor-pointer font-[500] hover:text-blue-400'>
                  SEE ALL
                </button>
                <img src='/imgMainSecond/Icon_8_.png' alt='img' className='cursor-pointer h-10 ' />
              </div>
            </div>
            <div className='scroll-anim w-[1550px] flex flex-wrap p-20 gap-[10px] relative'>
              <img src='/imgMainSecond/Book.png' alt='img' className='h-80' />
              <div>
                <img src='/imgMainSecond/Detail2.png' alt='img' className='h-70 mt-[30px]' />
              </div>
              <div className='flex flex-wrap'>
                <img src='/imgMainSecond/Book2.png' alt='img' className='h-80' />
                <img src='/imgMainSecond/Book3.png' alt='img' className='h-80' />
                <img src='/imgMainSecond/Book4.png' alt='img' className='h-80' />
                <img src='/imgMainSecond/Book8.png' alt='img' className='h-80' />
                <img src='/imgMainSecond/Book6.png' alt='img' className='h-80' />
                <img src='/imgMainSecond/Book7.png' alt='img' className='h-80' />
              </div>
              <div>
                <img
                  src='/imgMainSecond/Rectangle3.png'
                  alt='img'
                  className='absolute bottom-[60px] left-0 object-cover left-[30px] -z-10 w-360'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
