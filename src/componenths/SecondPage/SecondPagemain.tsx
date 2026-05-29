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
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
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
          transform: translateY(40px); 
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }
        .scroll-anim.active {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }
        .delay-4 { transition-delay: 0.4s; }
      `}</style>
      <div ref={containerRef} className='w-[1550px] overflow-x-hidden m-auto pb-[50px]'>
        <div className='w-[1550px] h-[667px] bg-[#bfd7f0] m-auto mt-[50px]'>
          <div className='flex flex-wrap justify-between p-20'>
            <div className='flex flex-col gap-[10px] text-left'>
              <h1 className='font-[Poppins] text-[24px]'>
                By Themadbrains in{' '}
                <span className='text-[#49BBBD] font-[Poppins] text-[24px]'>inspiration</span>
              </h1>
              <p className='text-[#2F327D] text-[44px] font-[600] font-[Poppins]'>
                Why Swift UI Should Be on the <br /> Radar of Every Mobile <br /> Developer
              </p>
              <p className='text-[#696984] font-[Poppins] text-[25px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod
                tempos Lorem ipsum dolor sitamet,
                <br /> consectetur adipiscing elit, sed do eiusmod tempor
              </p>
              <button className='w-[236px] h-[63px] mt-[10px] mr-[50px] text-[white] bg-[#49BBBD] font-[Poppins] p-auto cursor-pointer text-[18px] rounded-full hover:bg-[#38999A] transition'>
                Start learning now
              </button>
            </div>
            <div>
              <img src='/imgSecondpage/Group3.png' alt='img' className='h-120' />
            </div>
          </div>
        </div>
        <div className='scroll-anim w-[1550px] mt-[80px]'>
          <h1 className='font-[Poppins] font-[700] text-[30px] ml-[80px] text-left'>
            Reading blog list
          </h1>
          <div className='flex flex-wrap gap-[50px] justify-center mt-[20px] mr-[50px]'>
            <img src='/imgSecondpage/Group4.png' alt='img' className='h-70' />
            <img src='/imgSecondpage/Group5.png' alt='img' className='h-70' />
            <img src='/imgSecondpage/Group6.png' alt='img' className='h-70' />
            <img src='/imgSecondpage/Group7.png' alt='img' className='h-70' />
          </div>
        </div>
        <div className='scroll-anim bg-[#bfd7f0] w-[1550px] h-auto pb-[60px] mt-[50px]'>
          <div className='flex justify-between p-[70px]'>
            <h1 className='font-[Poppins] font-[700] text-[30px]'>Related Blog </h1>
            <a href='#' className='cursor-pointer text-[20px] text-[#49BBBD] hover:text-[#38999A]'>
              See all
            </a>
          </div>
          <div className='flex flex-wrap gap-[70px] justify-center'>
            <div className='w-[680px] h-[700px] border-1 border-none rounded-md bg-[white]'>
              <div className='flex flex-col items-center mt-[30px]'>
                <img src='public\imgSecondpage\Rectangle1.png' alt='img' className='w-150' />
                <p className='font-[Poppins] text-[26px] mr-[70px] text-left'>
                  Class adds $30 million to its balance sheet for a <br /> Zoom-friendly edtech
                  solution
                </p>
                <div className='flex flex-wrap gap-[15px] relative right-[220px] top-[20px]'>
                  <img
                    src='/imgSecondpage/Group1.png'
                    alt='img'
                    className='relative left-[10px] bottom-[10px]'
                  />
                  <div className='ml-[15px] mt-[5px] cursor-pointer'>
                    <span className='font-[Poppins] font-[500] text-[20px]'>Lina </span>
                    <span className='text-[18px] inline-block rotate-90'>&gt;</span>
                  </div>
                </div>
                <p className='text-[#696984] font-[Poppins] text-[23px] mt-[30px] text-left'>
                  Class, launched less than a year ago by Blackboard co-founder <br /> Michael
                  Chasen, integrates exclusively...
                </p>
              </div>
              <div className='flex justify-between p-[50px]'>
                <span className='text-[#696984] text-[20px]'>
                  <a href='#' className='cursor-pointer underline'>
                    Read more
                  </a>
                </span>
                <div className='flex flex-wrap gap-[20px]'>
                  <img src='/imgSecondpage/.png' alt='img' />
                  <p className='text-[#696984] font-[Poppins]'> 251,232</p>
                </div>
              </div>
            </div>

            <div className='w-[680px] h-[700px] border-1 border-none rounded-md bg-[white]'>
              <div className='flex flex-col items-center mt-[30px]'>
                <img src='/imgSecondpage/Group10.png' alt='img' className='w-150' />
                <p className='font-[Poppins] text-[26px] mr-[70px] text-left'>
                  Class adds $30 million to its balance sheet for a <br /> Zoom-friendly edtech
                  solution
                </p>
                <div className='flex flex-wrap gap-[15px] relative right-[220px] top-[20px]'>
                  <img
                    src='/imgSecondpage/Group1.png'
                    alt='img'
                    className='relative left-[10px] bottom-[10px]'
                  />
                  <div className='ml-[15px] mt-[5px] cursor-pointer'>
                    <span className='font-[Poppins] font-[500] text-[20px]'>Lina </span>
                    <span className='text-[18px] inline-block rotate-90'>&gt;</span>
                  </div>
                </div>
                <p className='text-[#696984] font-[Poppins] text-[23px] mt-[30px] text-left'>
                  Class, launched less than a year ago by Blackboard co-founder <br /> Michael
                  Chasen, integrates exclusively...
                </p>
              </div>
              <div className='flex justify-between p-[50px]'>
                <span className='text-[#696984] text-[20px]'>
                  <a href='#' className='cursor-pointer underline'>
                    Read more
                  </a>
                </span>
                <div className='flex flex-wrap gap-[20px]'>
                  <img src='/imgSecondpage/.png' alt='img' />
                  <p className='text-[#696984] font-[Poppins]'> 251,232</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex mt-[50px] justify-end flex-wrap gap-[20px] p-[50px]'>
            <button className='rotate-180 cursor-pointer w-[50px] h-[50px] bg-[#49BBBD80] hover:bg-[#49BBBD] text-[white]'>
              &gt;
            </button>
            <button className='cursor-pointer bg-[#49BBBD] w-[50px] h-[50px] text-[white] hover:bg-[#3aa5a7]'>
              &gt;
            </button>
          </div>
        </div>
        <div className='w-[1550px] h-auto pb-[40px] mt-[100px]'>
          <div className='scroll-anim flex justify-between p-[70px]'>
            <h1 className='font-[Poppins] font-[700] text-[30px]'>Marketing Articles</h1>
            <a href='#' className='cursor-pointer text-[20px] text-[#49BBBD] hover:text-[#38999A]'>
              See all
            </a>
          </div>
          <div className='flex flex-wrap justify-center gap-[40px] items-stretch'>
            {[
              { img: 'Rectangle2.png', delay: 'delay-1' },
              { img: 'Group86.png', delay: 'delay-2' },
              { img: 'Group41.png', delay: 'delay-3' },
              { img: 'Rectangle43.png', delay: 'delay-4' },
            ].map((card, idx) => (
              <div
                key={idx}
                className={`scroll-anim ${card.delay} w-[350px] border border-gray-100 rounded-xl shadow-lg bg-white flex flex-col justify-between p-[20px]`}
              >
                <div className='flex flex-col text-left w-full'>
                  <img
                    src={`//imgSecondpage//${card.img}`}
                    alt='img'
                    className='w-full object-cover rounded-lg'
                  />

                  <div className='flex justify-between w-full mt-[15px] px-1'>
                    <p className='text-[#696984] font-[Poppins] text-[16px] font-[600]'>Design</p>
                    <p className='text-[#696984] font-[Poppins] text-[16px] font-[600]'>3 Month</p>
                  </div>

                  <p className='font-[Poppins] text-[22px] font-[600] text-[#2F327D] w-full mt-[15px] leading-snug'>
                    AWS Certified solutions <br /> Architect
                  </p>

                  <p className='text-[#696984] font-[Poppins] text-[16px] mt-[15px] w-full leading-relaxed flex-grow'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </p>
                </div>
                <div className='flex justify-between items-center w-full mt-[30px] pt-[15px] border-t border-gray-100'>
                  <div className='flex items-center gap-[10px] cursor-pointer'>
                    <img
                      src='/imgSecondpage/Group1.png'
                      alt='img'
                      className='w-[40px] h-[40px] rounded-full'
                    />
                    <span className='font-[Poppins] font-[600] text-[16px] text-[#2F327D]'>
                      Lina
                    </span>
                    <span className='text-[14px] text-[#2F327D] inline-block rotate-90'>&gt;</span>
                  </div>
                  <div className='font-[Poppins] flex items-center gap-[10px]'>
                    <span className='line-through text-gray-400 text-[16px]'>$100</span>
                    <span className='text-[#49BBBD] text-[22px] font-[800]'>$80</span>
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
