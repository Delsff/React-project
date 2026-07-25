import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export const CareersHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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
    <>
      <style>{`
        @keyframes headerSlideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-header-fade {
          animation: headerSlideDown 0.5s ease-out forwards;
        }

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
      `}</style>
      <header
        ref={containerRef}
        className='w-full max-w-[1440px] h-auto mx-auto px-4 sm:px-6 lg:px-8 animate-header-fade relative z-50 bg-white'
      >
        <nav className='w-full flex items-center justify-between mt-5'>
          <img
            className='h-12 sm:h-14 lg:h-18 cursor-pointer object-contain relative z-50 ml-5'
            src='/imgSecondpage/Group2.png'
            alt='logo'
          />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='flex flex-col gap-1.5 md:hidden cursor-pointer z-50 p-2'
            aria-label='Toggle menu'
          >
            <span
              className={`w-6 h-0.5 bg-[#5B5B5B] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`w-6 h-0.5 bg-[#5B5B5B] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`w-6 h-0.5 bg-[#5B5B5B] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
          <ul
            className={`flex flex-col md:flex-row items-center gap-6 lg:gap-[60px] xl:gap-[80px] fixed md:static top-0 left-0 w-full h-screen md:w-auto md:h-auto bg-white md:bg-transparent pt-24 md:pt-0 px-6 md:px-0 transition-all duration-300 ease-in-out overflow-y-auto md:overflow-visible 
     ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto'}`}
          >
            <li className='font-[Poppins] cursor-pointer text-[#5B5B5B] text-[18px] lg:text-[22px] font-[500] hover:text-[#49BBBD] transition-colors'>
              <Link to='/' onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className='font-[Poppins] cursor-pointer text-[#5B5B5B] text-[18px] lg:text-[22px] font-[500] hover:text-[#49BBBD] transition-colors'>
              <Link to='/courses' onClick={() => setIsMenuOpen(false)}>
                Courses
              </Link>
            </li>
            <li className='font-[Poppins] cursor-pointer text-[#5B5B5B] text-[18px] lg:text-[22px] font-[500] hover:text-[#49BBBD] transition-colors'>
              <Link
                to='/careers'
                onClick={() => setIsMenuOpen(false)}
                className='visited:text-gray-400'
              >
                Careers
              </Link>
            </li>
            <li className='font-[Poppins] cursor-pointer text-[#5B5B5B] text-[18px] lg:text-[22px] font-[500] hover:text-[#49BBBD] transition-colors'>
              <a href='#' onClick={() => setIsMenuOpen(false)}>
                Blog
              </a>
            </li>
            <li className='font-[Poppins] cursor-pointer text-[#5B5B5B] text-[18px] lg:text-[22px] font-[500] hover:text-[#49BBBD] transition-colors'>
              <a href='#' onClick={() => setIsMenuOpen(false)}>
                About us
              </a>
            </li>
            <li className='mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100 w-full md:w-auto flex justify-center'>
              <div className='flex items-center gap-[12px] sm:gap-[15px]'>
                <img
                  src='/imgSecondpage/Group1.png'
                  alt='img'
                  className='w-10 h-10 lg:w-auto lg:h-auto object-contain'
                />
                <div className='cursor-pointer flex items-center select-none'>
                  <span className='font-[Poppins] font-[500] text-[18px] lg:text-[20px] text-[#252641]'>
                    Lina
                  </span>
                  <span className='text-[16px] lg:text-[18px] inline-block rotate-90 ml-1 text-[#5B5B5B]'>
                    &gt;
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </nav>
        <div>
          <div
            className={
              isMenuOpen
                ? 'md:opacity-100 opacity-0 pointer-events-none md:pointer-events-auto transition-opacity duration-300'
                : 'opacity-100'
            }
            aria-hidden={isMenuOpen}
          >
            <h1 className='scroll-anim font-[Poppins] text-[#49BBBD] text-center mt-12 sm:mt-16 lg:mt-20 text-[32px] sm:text-[40px] lg:text-[50px] font-bold px-4'>
              Affordable pricing
            </h1>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 mt-10 px-4 sm:px-8 lg:px-0 max-w-[1200px] mx-auto'>
              <div className='scroll-anim delay-1 w-full max-w-[370px] mx-auto md:max-w-none h-auto md:h-[536px] flex flex-col md:mt-5 p-4 md:p-0'>
                <p className='text-left text-[#49BBBD] text-[18px] sm:text-[20px] font-bold'>
                  Like a pussy
                </p>
                <p className='text-[18px] sm:text-[20px] font-semibold mt-5'>
                  <span className='text-[36px] sm:text-[48px] font-bold'>Free</span> / forever
                </p>
                <div className='flex flex-col mt-8 sm:mt-10 gap-5 sm:gap-7'>
                  <p className='flex flex-nowrap gap-4 sm:gap-5 items-center'>
                    <img
                      src='/imgThreePage/icon.png'
                      alt='icon'
                      className='w-5 h-5 shrink-0'
                    />
                    <span className='text-[16px] sm:text-[18px]'>Components-driven system</span>
                  </p>
                  <p className='flex flex-nowrap gap-4 sm:gap-5 items-center'>
                    <img
                      src='/imgThreePage/icon.png'
                      alt='icon'
                      className='w-5 h-5 shrink-0'
                    />
                    <span className='text-[16px] sm:text-[18px]'>Sales-boosting landing pages</span>
                  </p>
                  <p className='flex flex-nowrap gap-4 sm:gap-5 items-center'>
                    <img
                      src='/imgThreePage/icon.png'
                      alt='icon'
                      className='w-5 h-5 shrink-0'
                    />
                    <span className='text-[16px] sm:text-[18px]'>Awesome Feather icons pack</span>
                  </p>
                </div>
                <button className='mx-auto mt-8 mb-10 w-full max-w-[306px] h-[60px] sm:h-[70px] border border-[#aba3a3] rounded-lg cursor-pointer text-[#49BBBD] text-[18px] sm:text-[20px] hover:bg-[#d6d4d4] transition'>
                  Try for free
                </button>
              </div>
              <div className='scroll-anim delay-2 w-full max-w-[370px] mx-auto md:max-w-none h-auto md:h-[536px] flex flex-col shadow-xl rounded-lg md:rounded-none p-4 md:p-0'>
                <div className='flex flex-wrap items-center justify-between gap-2 py-2 px-1 md:px-5'>
                  <p className='text-left text-[#49BBBD] text-[18px] sm:text-[20px] font-bold'>
                    👤 Individual
                  </p>
                  <button className='w-[90px] h-8 font-bold border-2 border-[#6C5CE7] rounded-xl text-[13px] sm:text-[14px]'>
                    B E S T !
                  </button>
                </div>
                <p className='text-[18px] sm:text-[20px] font-semibold mt-5 px-1 md:px-4'>
                  <span className='text-[36px] sm:text-[48px] font-bold'>$24</span> / month
                </p>
                <div className='flex flex-col mt-8 sm:mt-10 gap-4 sm:gap-5 px-1 md:px-5'>
                  <p className='flex flex-nowrap gap-4 sm:gap-5 items-center'>
                    <img
                      src='/imgThreePage/goldIcon.png'
                      alt='Gold-Icon'
                      className='w-5 h-5 shrink-0'
                    />
                    <span className='text-[16px] sm:text-[18px]'>Components-driven system</span>
                  </p>
                  <p className='flex flex-nowrap gap-4 sm:gap-5 items-center'>
                    <img
                      src='/imgThreePage/goldIcon.png'
                      alt='Gold-Icon'
                      className='w-5 h-5 shrink-0'
                    />
                    <span className='text-[16px] sm:text-[18px]'>Sales-boosting landing pages</span>
                  </p>
                  <p className='flex flex-nowrap gap-4 sm:gap-5 items-center'>
                    <img
                      src='/imgThreePage/goldIcon.png'
                      alt='Gold-Icon'
                      className='w-5 h-5 shrink-0'
                    />
                    <span className='text-[16px] sm:text-[18px]'>Awesome Feather icons pack</span>
                  </p>
                  <p className='flex flex-nowrap gap-4 sm:gap-5 items-center'>
                    <img
                      src='/imgThreePage/goldIcon.png'
                      alt='Gold-Icon'
                      className='w-5 h-5 shrink-0'
                    />
                    <span className='text-[16px] sm:text-[18px]'>
                      Themed into 3 different styles
                    </span>
                  </p>
                  <p className='flex flex-nowrap gap-4 sm:gap-5 items-center'>
                    <img
                      src='/imgThreePage/goldIcon.png'
                      alt='Gold-Icon'
                      className='w-5 h-5 shrink-0'
                    />
                    <span className='text-[16px] sm:text-[18px]'>Will help to learn Figma</span>
                  </p>
                </div>
                <button className='mx-auto mt-8 mb-6 md:mb-0 w-full max-w-[306px] h-[60px] sm:h-[70px] border border-[#aba3a3] rounded-lg cursor-pointer text-white text-[18px] sm:text-[20px] bg-[#49BBBD] hover:bg-[#3d989a] transition'>
                  Regular license
                </button>
              </div>
              <div className='scroll-anim delay-3 w-full max-w-[370px] mx-auto md:max-w-none h-auto md:h-[536px] flex flex-col md:mt-5 p-4 md:p-0'>
                <p className='text-left text-[#49BBBD] text-[18px] sm:text-[20px] font-bold'>
                  👥 Corporate
                </p>
                <p className='text-[18px] sm:text-[20px] font-semibold mt-5 px-1 md:px-4'>
                  <span className='text-[36px] sm:text-[48px] font-bold'>$12</span> / editor
                </p>
                <div className='flex flex-col mt-8 sm:mt-10 gap-4 sm:gap-5 px-1 md:px-3'>
                  <p className='flex flex-nowrap gap-4 sm:gap-5 items-center'>
                    <img
                      src='/imgThreePage/blueIcon.png'
                      alt='Blue-Icon'
                      className='w-5 h-5 shrink-0'
                    />
                    <span className='text-[16px] sm:text-[18px]'>Components-driven system</span>
                  </p>
                  <p className='flex flex-nowrap gap-4 sm:gap-5 items-center'>
                    <img
                      src='/imgThreePage/blueIcon.png'
                      alt='Blue-Icon'
                      className='w-5 h-5 shrink-0'
                    />
                    <span className='text-[16px] sm:text-[18px]'>Sales-boosting landing pages</span>
                  </p>
                  <p className='flex flex-nowrap gap-4 sm:gap-5 items-center'>
                    <img
                      src='/imgThreePage/blueIcon.png'
                      alt='Blue-Icon'
                      className='w-5 h-5 shrink-0'
                    />
                    <span className='text-[16px] sm:text-[18px]'>Awesome Feather icons pack</span>
                  </p>
                  <p className='flex flex-nowrap gap-4 sm:gap-5 items-center'>
                    <img
                      src='/imgThreePage/blueIcon.png'
                      alt='Blue-Icon'
                      className='w-5 h-5 shrink-0'
                    />
                    <span className='text-[16px] sm:text-[18px]'>
                      Themed into 3 different styles
                    </span>
                  </p>
                </div>
                <button className='mx-auto mt-8 mb-10 w-full max-w-[306px] h-[60px] sm:h-[70px] border border-[#aba3a3] rounded-lg cursor-pointer text-[#49BBBD] text-[18px] sm:text-[20px] hover:bg-[#d6d4d4] transition'>
                  Extended license
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
