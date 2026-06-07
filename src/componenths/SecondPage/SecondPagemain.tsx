import { useEffect, useRef } from 'react';

export const SecondPageMain = () => {
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
        threshold: 0.2,
        rootMargin: '0px 0px -30px 0px',
      },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* Анимация мгновенного появления для главного промо-блока */
        @keyframes mainHeroFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-hero-block {
          animation: mainHeroFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Анимации по скроллу для остальных блоков */
        .scroll-anim {
          opacity: 0;
          transform: translateY(30px); 
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }
        .scroll-anim.active {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 0.05s; }
        .delay-2 { transition-delay: 0.1s; }
        .delay-3 { transition-delay: 0.15s; }
        .delay-4 { transition-delay: 0.2s; }
      `}</style>
      <div
        ref={containerRef}
        className='w-full max-w-[1440px] overflow-x-hidden mx-auto pb-12 px-4 sm:px-6 lg:px-8'
      >
        <div className='w-full h-auto bg-[#bfd7f0] rounded-2xl mt-6 lg:mt-12 overflow-hidden animate-hero-block'>
          <div className='flex flex-col-reverse lg:flex-row items-center justify-between p-6 sm:p-12 lg:p-16 gap-8'>
            <div className='flex flex-col gap-4 text-center lg:text-left items-center lg:items-start max-w-[650px] w-full'>
              <h1 className='font-[Poppins] text-[18px] sm:text-[24px]'>
                By Themadbrains in{' '}
                <span className='text-[#49BBBD] font-[Poppins] font-semibold'>inspiration</span>
              </h1>
              <p className='text-[#2F327D] text-[28px] sm:text-[36px] lg:text-[44px] font-[600] font-[Poppins] leading-tight'>
                Why Swift UI Should Be on the Radar of Every Mobile Developer
              </p>
              <p className='text-[#696984] font-[Poppins] text-[16px] sm:text-[20px] lg:text-[22px] leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem
                ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
              <button className='w-full sm:w-[236px] h-[60px] mt-4 text-[white] bg-[#49BBBD] font-[Poppins] cursor-pointer text-[18px] rounded-full hover:bg-[#38999A] transition shadow-md active:scale-95'>
                Start learning now
              </button>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center'>
              <img
                src='/imgSecondpage/Group3.png'
                alt='img'
                className='w-full max-w-[450px] h-auto object-contain'
              />
            </div>
          </div>
        </div>
        <div className='scroll-anim w-full mt-16 sm:mt-24'>
          <h1 className='font-[Poppins] font-[700] text-[24px] sm:text-[30px] text-center sm:text-left mb-6'>
            Reading blog list
          </h1>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 justify-items-center'>
            <img
              src='/imgSecondpage/Group4.png'
              alt='img'
              className='w-full max-w-[280px] h-auto object-contain'
            />
            <img
              src='/imgSecondpage/Group5.png'
              alt='img'
              className='w-full max-w-[280px] h-auto object-contain'
            />
            <img
              src='/imgSecondpage/Group6.png'
              alt='img'
              className='w-full max-w-[280px] h-auto object-contain'
            />
            <img
              src='/imgSecondpage/Group7.png'
              alt='img'
              className='w-full max-w-[280px] h-auto object-contain'
            />
          </div>
        </div>
        <div className='scroll-anim bg-[#bfd7f0] w-full h-auto rounded-2xl pb-12 mt-16 sm:mt-24 px-4 sm:px-8'>
          <div className='flex justify-between items-center py-8 sm:py-12'>
            <h1 className='font-[Poppins] font-[700] text-[24px] sm:text-[30px] text-[#2F327D]'>
              Related Blog
            </h1>
            <a
              href='#'
              className='cursor-pointer text-[16px] sm:text-[20px] font-medium text-[#49BBBD] hover:text-[#38999A] transition-colors'
            >
              See all
            </a>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center'>
            {[{ img: 'Rectangle1.png' }, { img: 'Group10.png' }].map((item, idx) => (
              <div
                key={idx}
                className='w-full max-w-[640px] h-auto rounded-xl bg-[white] p-5 sm:p-6 flex flex-col justify-between shadow-md'
              >
                <div className='flex flex-col text-center sm:text-left items-center sm:items-start'>
                  <img
                    src={`/imgSecondpage/${item.img}`}
                    alt='img'
                    className='w-full h-auto object-cover rounded-lg mb-4'
                  />
                  <p className='font-[Poppins] text-[18px] sm:text-[22px] lg:text-[24px] font-semibold text-[#2F327D] leading-snug mb-3'>
                    Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
                  </p>
                  <div className='flex items-center justify-center sm:justify-start gap-3 my-2 w-full sm:w-auto'>
                    <img
                      src='/imgSecondpage/Group1.png'
                      alt='author'
                      className='w-8 h-8 rounded-full'
                    />
                    <div className='cursor-pointer flex items-center gap-1'>
                      <span className='font-[Poppins] font-[500] text-[15px] text-[#252641]'>
                        Lina
                      </span>
                      <span className='text-[12px] inline-block rotate-90 text-gray-500'>&gt;</span>
                    </div>
                  </div>

                  <p className='text-[#696984] font-[Poppins] text-[14px] sm:text-[16px] mt-2 leading-relaxed'>
                    Class, launched less than a year ago by Blackboard co-founder Michael Chasen,
                    integrates exclusively...
                  </p>
                </div>

                <div className='flex justify-between items-center mt-6 pt-4 border-t border-gray-100 w-full'>
                  <a
                    href='#'
                    className='cursor-pointer underline text-[#696984] hover:text-[#49BBBD] text-[15px] sm:text-[16px] font-medium'
                  >
                    Read more
                  </a>
                  <div className='flex items-center gap-2 text-[#696984] text-[14px] sm:text-[16px]'>
                    <img
                      src='/imgSecondpage/.png'
                      alt='views'
                      className='w-5 h-5 object-contain'
                    />
                    <p className='font-[Poppins]'>251,232</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='flex mt-8 justify-center sm:justify-end gap-4'>
            <button className='rotate-180 cursor-pointer w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] bg-[#49BBBD80] hover:bg-[#49BBBD] text-[white] flex items-center justify-center rounded-lg transition-colors'>
              &gt;
            </button>
            <button className='cursor-pointer bg-[#49BBBD] w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] text-[white] hover:bg-[#3aa5a7] flex items-center justify-center rounded-lg transition-colors'>
              &gt;
            </button>
          </div>
        </div>
        <div className='w-full h-auto mt-16 sm:mt-24'>
          <div className='scroll-anim flex justify-between items-center mb-8'>
            <h1 className='font-[Poppins] font-[700] text-[24px] sm:text-[30px] text-[#2F327D]'>
              Marketing Articles
            </h1>
            <a
              href='#'
              className='cursor-pointer text-[16px] sm:text-[20px] font-medium text-[#49BBBD] hover:text-[#38999A] transition-colors'
            >
              See all
            </a>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch justify-items-center'>
            {[
              { img: 'Rectangle2.png', delay: 'delay-1' },
              { img: 'Group86.png', delay: 'delay-2' },
              { img: 'Group41.png', delay: 'delay-3' },
              { img: 'Rectangle43.png', delay: 'delay-4' },
            ].map((card, idx) => (
              <div
                key={idx}
                className={`scroll-anim ${card.delay} w-full max-w-[340px] border border-gray-100 rounded-xl shadow-md bg-white flex flex-col justify-between p-4 sm:p-5 transition-transform hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className='flex flex-col text-center sm:text-left items-center sm:items-start w-full'>
                  <img
                    src={`/imgSecondpage/${card.img}`}
                    alt='img'
                    className='w-full h-[180px] object-cover rounded-lg'
                  />
                  <div className='flex justify-between w-full mt-4 px-1'>
                    <p className='text-[#696984] font-[Poppins] text-[14px] font-[600]'>Design</p>
                    <p className='text-[#696984] font-[Poppins] text-[14px] font-[600]'>3 Month</p>
                  </div>

                  <p className='font-[Poppins] text-[18px] sm:text-[20px] font-[600] text-[#2F327D] w-full mt-3 leading-snug'>
                    AWS Certified solutions Architect
                  </p>

                  <p className='text-[#696984] font-[Poppins] text-[14px] mt-2 w-full leading-relaxed'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </p>
                </div>
                <div className='flex justify-between items-center w-full mt-6 pt-4 border-t border-gray-100'>
                  <div className='flex items-center justify-center sm:justify-start gap-2 cursor-pointer w-full sm:w-auto'>
                    <img
                      src='/imgSecondpage/Group1.png'
                      alt='img'
                      className='w-8 h-8 rounded-full'
                    />
                    <span className='font-[Poppins] font-[600] text-[14px] text-[#2F327D]'>
                      Lina
                    </span>
                    <span className='text-[12px] text-[#2F327D] inline-block rotate-90'>&gt;</span>
                  </div>
                  <div className='font-[Poppins] flex items-center gap-2'>
                    <span className='line-through text-gray-400 text-[14px]'>$100</span>
                    <span className='text-[#49BBBD] text-[18px] sm:text-[20px] font-[800]'>
                      $80
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
