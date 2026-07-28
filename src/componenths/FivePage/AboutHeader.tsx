import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export const AboutHeader = () => {
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
        .scroll-anim {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .scroll-anim.active {
          opacity: 1;
          transform: translateY(0);
        }
        .scroll-anim.delay-1.active { transition-delay: 0.08s; }
        .scroll-anim.delay-2.active { transition-delay: 0.16s; }
        .scroll-anim.delay-3.active { transition-delay: 0.24s; }
      `}</style>

      <header
        ref={containerRef}
        className='w-full max-w-[1440px] h-auto mx-auto px-4 sm:px-6 lg:px-8 relative bg-white'
      >
        <nav className='w-full flex items-center justify-between mt-5 relative z-50'>
          <img
            className='h-12 sm:h-14 lg:h-18 cursor-pointer object-contain relative z-[1001] ml-5'
            src='/imgSecondpage/Group2.png'
            alt='logo'
          />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='flex flex-col gap-1.5 md:hidden cursor-pointer relative z-[1001] p-2'
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
            className={`flex flex-col md:flex-row items-center gap-6 lg:gap-[60px] xl:gap-20 
              fixed md:static inset-0 w-screen h-screen md:w-auto md:h-auto 
              bg-white md:bg-transparent pt-24 md:pt-0 px-6 md:px-0 
              transition-all duration-300 ease-in-out overflow-y-auto md:overflow-visible z-[1000]
              ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto'}`}
          >
            <li className='font-[Poppins] cursor-pointer text-[#5B5B5B] text-[18px] lg:text-[22px] font-medium hover:text-[#49BBBD] transition-colors'>
              <Link to='/' onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className='font-[Poppins] cursor-pointer text-[#5B5B5B] text-[18px] lg:text-[22px] font-medium hover:text-[#49BBBD] transition-colors'>
              <Link to='/courses' onClick={() => setIsMenuOpen(false)}>
                Courses
              </Link>
            </li>
            <li className='font-[Poppins] cursor-pointer text-[#5B5B5B] text-[18px] lg:text-[22px] font-medium hover:text-[#49BBBD] transition-colors'>
              <Link to='/careers' onClick={() => setIsMenuOpen(false)}>
                Careers
              </Link>
            </li>
            <li className='font-[Poppins] cursor-pointer text-[#5B5B5B] text-[18px] lg:text-[22px] font-medium hover:text-[#49BBBD] transition-colors'>
              <Link to='/blog' onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li className='font-[Poppins] cursor-pointer text-[#5B5B5B] text-[18px] lg:text-[22px] font-medium hover:text-[#49BBBD] transition-colors'>
              <Link
                to='/about'
                onClick={() => setIsMenuOpen(false)}
                className='visited:text-gray-400'
              >
                About us
              </Link>
            </li>
            <li className='mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100 w-full md:w-auto flex justify-center'>
              <div className='flex items-center gap-[12px] sm:gap-[15px]'>
                <img
                  src='/imgSecondpage/Group1.png'
                  alt='img'
                  className='w-10 h-10 lg:w-auto lg:h-auto object-contain'
                />
                <div className='cursor-pointer flex items-center select-none'>
                  <span className='font-[Poppins] font-medium text-[18px] lg:text-[20px] text-[#252641]'>
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
        <div className='scroll-anim delay-1 relative w-full max-w-[1200px] mx-auto mt-10 px-4'>
          <img
            src='/imgAboutus/fon.png'
            alt='background'
            className='w-full h-auto rounded-[20px] object-cover block min-h-[220px]'
          />
          <div className='absolute inset-0 flex items-center justify-center px-4 sm:px-8 md:px-12'>
            <div className='relative w-full flex items-center justify-end'>
              <div className='scroll-anim delay-2 absolute left-0 z-20 w-[140px] h-[140px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full border-[4px] sm:border-[8px] border-[#29B6F6] bg-white overflow-hidden shadow-lg flex-shrink-0'>
                <img
                  src='/imgAboutus/girl1.png'
                  alt='girl-one'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='scroll-anim delay-3 relative z-10 w-[85%] sm:w-[88%] md:w-[85%] min-h-[160px] sm:min-h-[260px] md:min-h-[300px] rounded-[24px] bg-white/90 backdrop-blur-sm shadow-xl p-4 sm:p-8 md:p-10 pl-[75px] sm:pl-[140px] md:pl-[180px] lg:pl-[200px] flex items-center'>
                <img
                  src='/imgAboutus/about.png'
                  alt='about info'
                  className='w-full h-auto object-contain'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='scroll-anim delay-2 w-full h-auto mt-10 m-auto'>
          <div className='flex flex-wrap gap-5 justify-center'>
            <button className='bg-[#BBBBBB80] font-[Poppins] text-[#696969] w-[153px] h-[53px] rounded-lg text-[20px] cursor-pointer hover:bg-[#49BBBD] hover:text-white transition-colors'>
              About
            </button>
            <button className='bg-[#BBBBBB80] font-[Poppins] text-[#696969] w-[153px] h-[53px] rounded-lg text-[20px] cursor-pointer hover:bg-[#49BBBD] hover:text-white transition-colors'>
              Course
            </button>
            <button className='bg-[#BBBBBB80] font-[Poppins] text-[#696969] w-[153px] h-[53px] rounded-lg text-[20px] cursor-pointer hover:bg-[#49BBBD] hover:text-white transition-colors'>
              Notes
            </button>
            <button className='bg-[#BBBBBB80] font-[Poppins] text-[#696969] w-[153px] h-[53px] rounded-lg text-[20px] cursor-pointer hover:bg-[#49BBBD] hover:text-white transition-colors'>
              Project
            </button>
            <button className='bg-[#BBBBBB80] font-[Poppins] text-[#696969] w-[153px] h-[53px] rounded-lg text-[20px] cursor-pointer hover:bg-[#49BBBD] hover:text-white transition-colors'>
              Podcast
            </button>
            <button className='bg-[#49BBBD] font-[Poppins] text-[#FFFFFF] w-[153px] h-[53px] rounded-lg text-[20px] cursor-pointer'>
              Book
            </button>
            <button className='bg-[#BBBBBB80] font-[Poppins] text-[#696969] w-[153px] h-[53px] rounded-lg text-[20px] cursor-pointer hover:bg-[#49BBBD] hover:text-white transition-colors'>
              Review
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
