import { useEffect, useRef } from 'react';

export const CareersMain = () => {
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
        rootMargin: '0px 0px -20px 0px',
      },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      <style>{`
        .scroll-anim {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .scroll-anim.active {
          opacity: 1;
          transform: translateY(0);
        }
        .scroll-anim.delay-1.active { transition-delay: 0.05s; }
        .scroll-anim.delay-2.active { transition-delay: 0.15s; }
        .scroll-anim.delay-3.active { transition-delay: 0.25s; }
        .scroll-anim.delay-4.active { transition-delay: 0.35s; }
      `}</style>
      <div className='scroll-anim w-[92%] sm:w-full max-w-[1400px] h-auto sm:h-[440px] bg-[#252641] rounded-xl mx-auto mt-16 sm:mt-24 lg:mt-30 flex flex-col items-center pb-8 sm:pb-10 px-4 sm:px-6'>
        <p className='text-[#FFFFFF] text-[24px] sm:text-[32px] lg:text-[40px] text-center pt-10 sm:pt-16 lg:pt-20 font-medium'>
          Online coaching lessons for remote learning.
        </p>
        <p className='text-[#FFFFFF] font-normal text-[16px] sm:text-[20px] lg:text-[25px] text-center pt-6 sm:pt-10'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum
          dolor{' '}
          <span className='hidden sm:inline'>
            <br />
          </span>{' '}
          sitamet, consectetur adipiscing elit, sed do eiusmod tempor
        </p>
        <button className='mt-8 sm:mt-auto w-full max-w-[236px] h-[52px] sm:h-[60px] text-white bg-[#49BBBD] font-[Poppins] cursor-pointer text-[16px] sm:text-[18px] rounded-full hover:bg-[#38999A] transition shadow-md active:scale-95'>
          Start learning now
        </button>
      </div>
      <div className='w-full max-w-[1440px] h-auto mx-auto'>
        <h1 className='scroll-anim mt-12 sm:mt-15 text-[24px] sm:text-[30px] lg:text-[36px] text-[#2D3436] font-[Poppins] flex justify-center text-center font-semibold px-4'>
          Online coaching lessons for remote learning
        </h1>
        <div className='flex flex-col gap-5 px-4 sm:px-6 lg:px-10 pt-10 lg:pt-15'>
          <div className='scroll-anim delay-1 flex flex-wrap sm:flex-nowrap justify-between items-center gap-3'>
            <div className='flex flex-nowrap gap-3 sm:gap-5 items-center'>
              <div className='w-4 h-4 sm:w-5 sm:h-5 bg-[#55EFC4] rounded-full shrink-0'></div>
              <p className='text-[15px] sm:text-[18px]'>Lorem ipsum dolor sit amet</p>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 sm:w-6 sm:h-6 text-[#5B5B5B] shrink-0'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
            </svg>
          </div>
          <hr />
          <div className='scroll-anim delay-1 flex flex-wrap sm:flex-nowrap justify-between items-center gap-3'>
            <div className='flex flex-nowrap gap-3 sm:gap-5 items-center'>
              <div className='w-4 h-4 sm:w-5 sm:h-5 bg-[#55EFC4] rounded-full shrink-0'></div>
              <p className='text-[15px] sm:text-[18px]'>Lorem ipsum dolor sit amet</p>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 sm:w-6 sm:h-6 text-[#5B5B5B] shrink-0'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
            </svg>
          </div>
          <hr />
          <div className='scroll-anim delay-2 flex flex-wrap sm:flex-nowrap justify-between items-center gap-3'>
            <div className='flex flex-nowrap gap-3 sm:gap-5 items-center'>
              <div className='w-4 h-4 sm:w-5 sm:h-5 bg-[#55EFC4] rounded-full shrink-0'></div>
              <p className='text-[15px] sm:text-[18px]'>Lorem ipsum dolor sit amet</p>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 sm:w-6 sm:h-6 text-[#5B5B5B] shrink-0'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
            </svg>
          </div>
          <hr />
          <div className='scroll-anim delay-2 flex items-start justify-between gap-4 sm:gap-6'>
            <div className='flex-1'>
              <div className='flex items-center gap-3 sm:gap-5'>
                <div className='w-4 h-4 sm:w-5 sm:h-5 bg-[#55EFC4] rounded-full shrink-0'></div>
                <p className='text-[15px] sm:text-[18px]'>Lorem ipsum dolor sit amet</p>
              </div>
              <p className='text-[14px] sm:text-[16px] text-[#5B5B5B] mt-3 px-0 sm:px-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem
                ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor
                sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet,
                consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet,
                consectetur adipiscing elit, sed do eiusmod tempor
              </p>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 sm:w-6 sm:h-6 text-[#5B5B5B] shrink-0 rotate-180'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
            </svg>
          </div>
          <hr />
          <div className='scroll-anim delay-3 flex flex-wrap sm:flex-nowrap justify-between items-center gap-3'>
            <div className='flex flex-nowrap gap-3 sm:gap-5 items-center'>
              <div className='w-4 h-4 sm:w-5 sm:h-5 bg-[#55EFC4] rounded-full shrink-0'></div>
              <p className='text-[15px] sm:text-[18px]'>Lorem ipsum dolor sit amet</p>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 sm:w-6 sm:h-6 text-[#5B5B5B] shrink-0'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
            </svg>
          </div>
          <hr />
        </div>
      </div>
      <div className='w-full bg-[#bddaf9] h-auto py-16 sm:py-20 mt-16 sm:mt-20'>
        <h1 className='scroll-anim text-[24px] sm:text-[30px] lg:text-[36px] text-[#2D3436] font-[Poppins] font-bold px-4 sm:px-10 pb-10 sm:pb-16 lg:pb-20'>
          What our students have to say
        </h1>
        <div className='relative w-full'>
          <div className='hidden sm:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-[#49BBBD] rounded-full items-center justify-center cursor-pointer hover:bg-[#38999A] transition shadow-lg'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 sm:w-6 sm:h-6 text-white rotate-90'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
            </svg>
          </div>
          <div className='w-full h-auto flex flex-nowrap grid-cols-4 justify-start sm:justify-center gap-5 overflow-x-auto sm:overflow-visible px-4 sm:px-10 lg:px-14 pb-4 sm:pb-0 snap-x snap-mandatory sm:snap-none'>
            <div className='scroll-anim delay-1 snap-center shrink-0 w-[280px] sm:w-[300px] lg:w-[354px] h-auto sm:h-[395px] rounded-xl bg-[white] flex flex-col gap-6 sm:gap-10 p-4 sm:p-0'>
              <img
                src='/imgThreePage/girl.png'
                alt='girl'
                className='w-[90px] h-[90px] sm:w-[118px] sm:h-[118px] mx-auto sm:pt-4'
              />
              <p className='text-center text-[#2D3436] text-[20px] sm:text-[24px] font-bold'>
                Bulkin Simons
              </p>
              <p className='text-center text-[#2D3436] text-[15px] sm:text-[18px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing
                elit, sed do eiusmod
              </p>
            </div>
            <div className='scroll-anim delay-2 snap-center shrink-0 w-[280px] sm:w-[300px] lg:w-[354px] h-auto sm:h-[395px] rounded-xl bg-[white] flex flex-col gap-6 sm:gap-10 p-4 sm:p-0'>
              <img
                src='/imgThreePage/girl.png'
                alt='girl'
                className='w-[90px] h-[90px] sm:w-[118px] sm:h-[118px] mx-auto sm:pt-4'
              />
              <p className='text-center text-[#2D3436] text-[20px] sm:text-[24px] font-bold'>
                Bulkin Simons
              </p>
              <p className='text-center text-[#2D3436] text-[15px] sm:text-[18px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing
                elit, sed do eiusmod
              </p>
            </div>
            <div className='scroll-anim delay-3 snap-center shrink-0 w-[280px] sm:w-[300px] lg:w-[354px] h-auto sm:h-[395px] rounded-xl bg-[white] flex flex-col gap-6 sm:gap-10 p-4 sm:p-0'>
              <img
                src='/imgThreePage/girl.png'
                alt='girl'
                className='w-[90px] h-[90px] sm:w-[118px] sm:h-[118px] mx-auto sm:pt-4'
              />
              <p className='text-center text-[#2D3436] text-[20px] sm:text-[24px] font-bold'>
                Bulkin Simons
              </p>
              <p className='text-center text-[#2D3436] text-[15px] sm:text-[18px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing
                elit, sed do eiusmod
              </p>
            </div>
            <div className='scroll-anim delay-4 snap-center shrink-0 w-[280px] sm:w-[300px] lg:w-[354px] h-auto sm:h-[395px] rounded-xl bg-[white] flex flex-col gap-6 sm:gap-10 p-4 sm:p-0'>
              <img
                src='/imgThreePage/girl.png'
                alt='girl'
                className='w-[90px] h-[90px] sm:w-[118px] sm:h-[118px] mx-auto sm:pt-4'
              />
              <p className='text-center text-[#2D3436] text-[20px] sm:text-[24px] font-bold'>
                Bulkin Simons
              </p>
              <p className='text-center text-[#2D3436] text-[15px] sm:text-[18px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing
                elit, sed do eiusmod
              </p>
            </div>
          </div>
          <div className='hidden sm:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-[#49BBBD] rounded-full items-center justify-center cursor-pointer hover:bg-[#38999A] transition shadow-lg'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 sm:w-6 sm:h-6 text-white -rotate-90'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
            </svg>
          </div>
        </div>
        <div className='scroll-anim w-[92%] sm:w-full max-w-[1400px] h-auto sm:h-[218px] bg-[#252641] rounded-3xl mx-auto mt-12 sm:mt-10 flex flex-col sm:flex-row flex-nowrap justify-center sm:justify-between items-center px-6 sm:px-10 py-10 sm:py-0 gap-6 sm:gap-0'>
          <p className='text-[22px] sm:text-[28px] lg:text-[36px] font-bold text-white text-center sm:text-left'>
            APP is available for free
          </p>
          <div className='flex flex-col sm:flex-row flex-nowrap gap-4 w-full sm:w-auto'>
            <button className='w-full sm:w-[200px] lg:w-[254px] h-[54px] sm:h-[63px] flex items-center gap-2 bg-[#2196F3] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition justify-center cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='w-5 h-5 shrink-0'
                fill='currentColor'
              >
                <path d='M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993.9993.4482.9993.9993-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993.9993.4482.9993.9993-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396' />
              </svg>
              <span className='text-[15px] sm:text-[16px]'>Android APP</span>
            </button>
            <button className='w-full sm:w-[200px] lg:w-[254px] h-[54px] sm:h-[63px] flex items-center gap-2 bg-[#49BBBD] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition justify-center cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='w-5 h-5 shrink-0'
                fill='currentColor'
              >
                <path d='M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.94-.19 1.83-.87 3.09-.78 1.53.12 2.65.65 3.36 1.69-2.65 1.58-2.1 5.13.19 6.09-.55 1.24-1.28 2.47-2.35 3.63l-.01.01M12.03 7.25c-.15-2.23 1.66-4.09 3.74-4.25.29 2.5-2.27 4.36-3.74 4.25' />
              </svg>
              <span className='text-[15px] sm:text-[16px]'>IOS APP</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className='w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-6 mx-auto px-4 sm:px-10 py-16 sm:py-24 lg:py-32'>
          <div className='scroll-anim delay-1 w-full max-w-[500px] lg:max-w-none lg:w-[786px] h-auto shadow-lg flex flex-col gap-4 sm:gap-5'>
            <img src='/imgSecondpage/Group10.png' alt='img' className='px-4 py-4 w-full' />
            <p className='text-[20px] sm:text-[24px] lg:text-[26px] text-left px-4 text-[#252641] font-[Poppins] font-bold'>
              Become a Teacher
            </p>
            <p className='text-[16px] sm:text-[20px] lg:text-[24px] font-[Poppins] text-[#696984] px-4 py-2'>
              Class, launched less than a year ago by Blackboard co-founder Michael Chasen,
              integrates exclusively...
            </p>
            <button className='ml-auto mr-4 sm:mr-5 mt-6 sm:mt-16 lg:mt-25 lg:mb-0 w-full max-w-[236px] h-[52px] sm:h-[60px] text-white bg-[#49BBBD] font-[Poppins] cursor-pointer text-[16px] sm:text-[18px] rounded-lg hover:bg-[#38999A] transition shadow-md active:scale-95 relative bottom-5'>
              Apply a Teacher
            </button>
          </div>
          <div className='scroll-anim delay-2 w-full max-w-[500px] lg:max-w-none lg:w-[786px] h-auto shadow-lg flex flex-col gap-4 sm:gap-5'>
            <img src='/imgSecondpage/Group10.png' alt='img' className='px-4 py-4 w-full' />
            <p className='text-[20px] sm:text-[24px] lg:text-[26px] text-left px-4 text-[#252641] font-[Poppins] font-bold'>
              Become a Coursector
            </p>
            <p className='text-[16px] sm:text-[20px] lg:text-[24px] font-[Poppins] text-[#696984] px-4 py-2'>
              Class, launched less than a year ago by Blackboard co-founder Michael Chasen,
              integrates exclusively...
            </p>
            <button className='ml-auto mr-4 sm:mr-5 mt-6 sm:mt-16 lg:mt-25 mb-6 lg:mb-0 w-full max-w-[236px] h-[52px] sm:h-[60px] text-white bg-[#49BBBD] font-[Poppins] cursor-pointer text-[16px] sm:text-[18px] rounded-lg hover:bg-[#38999A] transition shadow-md active:scale-95 relative bottom-5'>
              Apply a Coursector
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
