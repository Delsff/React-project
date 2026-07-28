import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export const BlogHeader = () => {
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
      <header ref={containerRef} className='w-full bg-white relative'>
        <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-50'>
          <nav className='w-full flex items-center justify-between mt-5 py-2'>
            <img
              className='h-12 sm:h-14 lg:h-18 cursor-pointer object-contain relative z-[1001]'
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
                bg-white md:bg-transparent pt-28 md:pt-0 px-6 md:px-0 
                transition-all duration-300 ease-in-out overflow-y-auto md:overflow-visible z-[1000]
                ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto'}`}
            >
              <li className='scroll-anim delay-1 font-[Poppins] cursor-pointer text-[#5B5B5B] text-[18px] lg:text-[22px] font-medium hover:text-[#49BBBD] transition-colors'>
                <Link to='/' onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li className='scroll-anim delay-1 font-[Poppins] cursor-pointer text-[#5B5B5B] text-[18px] lg:text-[22px] font-medium hover:text-[#49BBBD] transition-colors'>
                <Link to='/courses' onClick={() => setIsMenuOpen(false)}>
                  Courses
                </Link>
              </li>
              <li className='scroll-anim delay-2 font-[Poppins] cursor-pointer text-[#5B5B5B] text-[18px] lg:text-[22px] font-medium hover:text-[#49BBBD] transition-colors'>
                <Link to='/careers' onClick={() => setIsMenuOpen(false)}>
                  Careers
                </Link>
              </li>
              <li className='scroll-anim delay-2 font-[Poppins] cursor-pointer text-[#5B5B5B] text-[18px] lg:text-[22px] font-medium hover:text-[#49BBBD] transition-colors'>
                <Link
                  to='/blog'
                  onClick={() => setIsMenuOpen(false)}
                  className='visited:text-gray-400'
                >
                  Blog
                </Link>
              </li>
              <li className='scroll-anim delay-3 font-[Poppins] cursor-pointer text-[#5B5B5B] text-[18px] lg:text-[22px] font-medium hover:text-[#49BBBD] transition-colors'>
                <Link to='/about' onClick={() => setIsMenuOpen(false)}>
                  About us
                </Link>
              </li>
              <li className='scroll-anim delay-3 mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100 w-full md:w-auto flex justify-center'>
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
        </div>
        <div className='w-full mt-6 relative z-0 pointer-events-none scroll-anim'>
          <img
            src='/imgBlog/BlogNav.png'
            alt='Nav-img'
            className='w-full h-auto object-cover block'
          />
        </div>
      </header>
    </>
  );
};
