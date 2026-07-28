import { useEffect, useRef } from 'react';

export const BlogMain = () => {
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
        threshold: 0.1,
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
          will-change: opacity, transform;
        }

        .scroll-anim.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <div className='flex flex-col max-w-7xl m-auto' ref={containerRef}>
        <h1 className='scroll-anim text-[32px] sm:text-[40px] text-[#2F327D] font-[Poppins] font-bold mt-10'>
          Why Swift UI Should Be on the Radar of Every Mobile Developer
        </h1>
        <p className='scroll-anim text-[#696984] font-[Poppins] text-[18px] sm:text-[22px] mt-6'>
          TOTC is a platform that allows educators to create online classes whereby they can store
          the course materials online; manage assignments, quizzes and exams; monitor due dates;
          grade results and provide students with feedback all in one place.
        </p>
        <div className='mt-8 flex flex-wrap gap-3'>
          {['affordable', 'Stunning', 'making', 'madbrawns'].map((tag, idx) => (
            <button
              key={tag}
              style={{ transitionDelay: `${idx * 100}ms` }}
              className='scroll-anim w-[100px] h-9 font-bold border-2 border-[#49BBBD1A] rounded-xl text-[13px] sm:text-[14px] text-[#696984] hover:border-[#49BBBD] transition-all'
            >
              {tag}
            </button>
          ))}
        </div>
        <hr className='mt-8 border-gray-200' />
        <div className='scroll-anim flex justify-between items-center my-6'>
          <div className='flex items-center gap-4'>
            <img
              src='/imgThreePage/girl.png'
              alt='Lina'
              className='w-14 h-14 rounded-full object-cover'
            />
            <div className='flex flex-col'>
              <p className='text-[14px] font-[Poppins] text-[#696984]'>Written by</p>
              <span className='text-[18px] font-[Poppins] font-semibold text-[#2F327D]'>Lina</span>
            </div>
          </div>
          <button className='w-[140px] sm:w-[200px] h-[45px] text-[#49BBBD] font-[Poppins] font-medium border border-[#49BBBD] cursor-pointer rounded-lg hover:bg-[#49BBBD] hover:text-white transition-all'>
            Follow
          </button>
        </div>
        <div className='bg-[#bfd7f0] w-full rounded-2xl pb-12 mt-12 px-4 sm:px-8'>
          <div className='scroll-anim flex justify-between items-center py-8 sm:py-12'>
            <h2 className='font-[Poppins] font-[700] text-[24px] sm:text-[30px] text-[#2F327D]'>
              Related Blog
            </h2>
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
                style={{ transitionDelay: `${idx * 150}ms` }}
                className='scroll-anim w-full max-w-[640px] rounded-xl bg-white p-5 sm:p-6 flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow'
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
          <div className='scroll-anim flex mt-8 justify-center sm:justify-end gap-4'>
            <button className='rotate-180 cursor-pointer w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] bg-[#49BBBD80] hover:bg-[#49BBBD] text-white flex items-center justify-center rounded-lg transition-colors'>
              &gt;
            </button>
            <button className='cursor-pointer bg-[#49BBBD] w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] text-white hover:bg-[#3aa5a7] flex items-center justify-center rounded-lg transition-colors'>
              &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
