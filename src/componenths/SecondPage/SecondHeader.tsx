import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const SecondHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      `}</style>
      <header className='w-full max-w-[1440px] h-auto mx-auto px-4 sm:px-6 lg:px-8 py-4 animate-header-fade relative z-50 bg-white'>
        <nav className='w-full flex items-center justify-between'>
          <img
            className='h-12 sm:h-14 lg:h-18 cursor-pointer object-contain relative z-50'
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
            className={`
            flex flex-col md:flex-row items-center gap-6 lg:gap-[60px] xl:gap-[80px]
            fixed md:static top-0 left-0 w-full h-screen md:w-auto md:h-auto 
            bg-white md:bg-transparent pt-24 md:pt-0 px-6 md:px-0
            transition-all duration-300 ease-in-out overflow-y-auto
            ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 md:opacity-100 md:visible md:translate-y-0'}
          `}
          >
            <li className='font-[Poppins] cursor-pointer text-[#5B5B5B] text-[18px] lg:text-[22px] font-[500] hover:text-[#49BBBD] transition-colors'>
              <Link to='/' onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className='font-[Poppins] cursor-pointer text-[#5B5B5B] text-[18px] lg:text-[22px] font-[500] hover:text-[#49BBBD] transition-colors'>
              <Link
                to='/courses'
                onClick={() => setIsMenuOpen(false)}
                className='visited:text-gray-400'
              >
                Courses
              </Link>
            </li>
            <li className='font-[Poppins] cursor-pointer text-[#5B5B5B] text-[18px] lg:text-[22px] font-[500] hover:text-[#49BBBD] transition-colors'>
              <a href='#' onClick={() => setIsMenuOpen(false)}>
                Careers
              </a>
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
                    Lina{' '}
                  </span>
                  <span className='text-[16px] lg:text-[18px] inline-block rotate-90 ml-1 text-[#5B5B5B]'>
                    &gt;
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
