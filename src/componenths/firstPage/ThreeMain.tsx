import { useEffect, useRef } from 'react';

export const ThreeMain: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll('.scroll-anim');
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
        threshold: 0.17,
        rootMargin: '0px 0px -20px 0px',
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
          transform: translateY(15px); 
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
        className='w-full max-w-[1520px] h-auto mx-auto px-4 md:px-8 py-12 flex flex-col gap-16 md:gap-24 overflow-hidden'
      >
        <div className='scroll-anim flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 w-full h-auto'>
          <div className='flex flex-col gap-5 text-left max-w-xl lg:max-w-2xl w-full h-auto'>
            <p className='text-[#696984] font-[500] text-[16px] md:text-[20px] tracking-wider'>
              ---- TESTIMONIAL
            </p>
            <h1 className='text-[#2F327D] font-[700] text-[32px] md:text-[45px] leading-tight'>
              What They Say?
            </h1>
            <div className='flex flex-col gap-4 text-[#696984] font-[Poppins] font-[500] text-[18px] md:text-[22px] leading-relaxed'>
              <p>TOTC has got more than 100k positive ratings from our users around the world.</p>
              <p>Some of the students and teachers were greatly helped by the Skilline.</p>
              <p>Are you too? Please give your assessment.</p>
            </div>
            <div className='mt-4 w-full sm:w-auto relative h-auto'>
              <button className='w-full sm:w-[330px] h-[75px] text-[#49BBBD] border border-[#49BBBD] rounded-full text-[18px] font-medium text-left px-6 hover:bg-teal-50/50 transition-all cursor-pointer flex items-center justify-between group'>
                <span>Write your assessment</span>
                <span className='w-12 h-12 border border-[#49BBBD] rounded-full text-[24px] flex items-center justify-center group-hover:bg-[#49BBBD] group-hover:text-white transition-all'>
                  →
                </span>
              </button>
            </div>
          </div>
          <div className='relative w-full max-w-[620px] flex flex-col items-center lg:items-end h-auto'>
            <div className='w-full relative px-4 sm:px-0 h-auto'>
              <img
                src='/imgMainSecond/MaskGroup.png'
                alt='Student'
                className='w-full h-auto object-contain rounded-2xl'
              />
              <button className='absolute top-1/2 -translate-y-1/2 right-6 sm:-right-6 w-14 h-14 sm:w-[80px] sm:h-[80px] bg-white text-[#1EA4CE] rounded-full shadow-xl text-[24px] sm:text-[32px] flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-all border border-gray-100 z-20'>
                →
              </button>
            </div>
            <div className='w-[90%] sm:w-[540px] bg-white shadow-2xl rounded-xl p-6 sm:p-8 flex flex-col gap-4 relative mt-[-80px] sm:mt-[-120px] border border-gray-100 z-10 self-center lg:self-auto mr-0 lg:mr-8 h-auto'>
              <img
                src='/imgMainSecond/Rectangle30.png'
                alt='decor'
                className='absolute -left-6 -top-6 w-16 h-16 sm:w-20 sm:h-20 object-contain hidden sm:block'
              />
              <div className='flex gap-4 items-stretch h-auto'>
                <div className='w-1 bg-[#49BBBD]/30 rounded-full hidden sm:block' />
                <p className='font-[Poppins] text-[#696984] text-[15px] sm:text-[18px] font-[400] text-left leading-relaxed'>
                  "Thank you so much for your help. It's exactly what I've been looking for. You
                  won't regret it. It really saves me time and effort. TOTC is exactly what our
                  business has been lacking."
                </p>
              </div>
              <div className='flex flex-row justify-between items-center mt-2 pt-4 border-t border-gray-100 w-full h-auto'>
                <p className='font-[Poppins] text-[#2F327D] font-[600] text-[16px] sm:text-[20px]'>
                  Gloria Rose
                </p>
                <div className='flex flex-col items-end gap-1 h-auto'>
                  <img
                    src='/imgMainSecond/Group 29.png'
                    alt='Stars'
                    className='h-4 object-contain'
                  />
                  <p className='font-[Poppins] text-[#696984] text-[12px] sm:text-[14px]'>
                    12 reviews at Yelp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='scroll-anim flex flex-col gap-12 w-full h-auto'>
          <div className='flex flex-col gap-3 text-center max-w-2xl mx-auto h-auto'>
            <h1 className='text-[#2F327D] font-[Nunito Sans] font-[700] text-[30px] md:text-[40px] leading-tight'>
              Latest News and Resources
            </h1>
            <p className='font-[Poppins] text-[16px] md:text-[20px] text-[#696984] font-[500]'>
              See the developments that have occurred to TOTC in the world
            </p>
          </div>
          <div className='w-full flex flex-col xl:flex-row gap-12 items-start justify-center h-auto'>
            <div className='flex flex-col gap-5 text-left w-full xl:max-w-[500px] group h-auto'>
              <div className='w-full overflow-hidden rounded-2xl aspect-[4/3] relative bg-gray-100 h-auto max-h-[380px]'>
                <img
                  src='/imgMainSecond/Group40.png'
                  alt='Main News'
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </div>
              <div className='mt-2 h-auto'>
                <img
                  src='/imgMainSecond/Group41.png'
                  alt='Category Tag'
                  className='h-8 object-contain mb-3'
                />
                <h3 className='font-[Poppins] text-[#252641] font-[600] text-[20px] md:text-[24px] mb-3 leading-snug group-hover:text-[#49BBBD] transition-colors'>
                  Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
                </h3>
                <p className='font-[Poppins] text-[#696984] font-[400] text-[16px] md:text-[18px] leading-relaxed mb-4'>
                  Class, launched less than a year ago by Blackboard co-founder Michael Chasen,
                  integrates exclusively...
                </p>
                <a
                  href='#'
                  className='text-[#696984] font-medium text-[16px] md:text-[18px] underline hover:text-[#49BBBD] transition-colors'
                >
                  Read more
                </a>
              </div>
            </div>
            <div className='flex flex-col gap-8 w-full xl:flex-1 h-auto'>
              <div className='flex flex-col sm:flex-row gap-6 items-start border-b border-gray-100 pb-6 group w-full h-auto'>
                <div className='relative w-full sm:w-[240px] h-[160px] rounded-xl overflow-hidden flex-shrink-0 bg-gray-100'>
                  <img
                    src='/imgMainSecond/Rectangle33.png'
                    alt='img'
                    className='w-full h-full object-cover'
                  />
                  <img
                    src='/imgMainSecond/Group44.png'
                    alt='play'
                    className='absolute inset-0 m-auto w-12 h-12 object-contain'
                  />
                </div>
                <div className='flex flex-col gap-2 text-left justify-center flex-1 h-auto'>
                  <h4 className='font-[Poppins] text-[#252641] font-[600] text-[18px] md:text-[21px] leading-snug group-hover:text-[#49BBBD] transition-colors'>
                    Class Technologies Inc. Closes $30 Million Series A Financing to Meet High
                    Demand
                  </h4>
                  <p className='font-[Poppins] text-[#696984] font-[400] text-[14px] md:text-[16px] leading-relaxed'>
                    Class Technologies Inc., the company that created Class, closes funding to
                    expand global reach...
                  </p>
                </div>
              </div>
              <div className='flex flex-col sm:flex-row gap-6 items-start border-b border-gray-100 pb-6 group w-full h-auto'>
                <div className='relative w-full sm:w-[240px] h-[160px] rounded-xl overflow-hidden flex-shrink-0 bg-gray-100'>
                  <img
                    src='/imgMainSecond/Group46.png'
                    alt='img'
                    className='w-full h-full object-cover'
                  />
                  <img
                    src='/imgMainSecond/Group41.png'
                    alt='tag'
                    className='absolute bottom-3 left-3 h-6 object-contain bg-white/90 px-2 py-0.5 rounded-md'
                  />
                </div>
                <div className='flex flex-col gap-2 text-left justify-center flex-1 h-auto'>
                  <h4 className='font-[Poppins] text-[#252641] font-[600] text-[18px] md:text-[21px] leading-snug group-hover:text-[#49BBBD] transition-colors'>
                    Class Technologies Inc. Closes $30 Million Series A Financing to Meet High
                    Demand
                  </h4>
                  <p className='font-[Poppins] text-[#696984] font-[400] text-[14px] md:text-[16px] leading-relaxed'>
                    Class Technologies Inc., the company that created Class, closes funding to
                    expand global reach...
                  </p>
                </div>
              </div>
              <div className='flex flex-col sm:flex-row gap-6 items-start group w-full h-auto'>
                <div className='relative w-full sm:w-[240px] h-[160px] rounded-xl overflow-hidden flex-shrink-0 bg-gray-100'>
                  <img
                    src='/imgMainSecond/Group48.png'
                    alt='img'
                    className='w-full h-full object-cover'
                  />
                  <img
                    src='/imgMainSecond/Group41.png'
                    alt='tag'
                    className='absolute bottom-3 left-3 h-6 object-contain bg-white/90 px-2 py-0.5 rounded-md'
                  />
                </div>
                <div className='flex flex-col gap-2 text-left justify-center flex-1 h-auto'>
                  <h4 className='font-[Poppins] text-[#252641] font-[600] text-[18px] md:text-[21px] leading-snug group-hover:text-[#49BBBD] transition-colors'>
                    Class Technologies Inc. Closes $30 Million Series A Financing to Meet High
                    Demand
                  </h4>
                  <p className='font-[Poppins] text-[#696984] font-[400] text-[14px] md:text-[16px] leading-relaxed'>
                    Class Technologies Inc., the company that created Class, closes funding to
                    expand global reach...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
