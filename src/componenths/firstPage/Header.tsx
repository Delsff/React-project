import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToggleWindow } from '../../store/Window';
import { OpenWindowStore } from '../../StoreOpen/OpenWindowLogin';
import { OpenWindowStoreRegistr } from '../../StoreOpen/OpenWindowRegistation';

export const Header = () => {
  const { openWindow } = useToggleWindow();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        style={{ backgroundImage: 'url(/imgHeader/header-bg.png)' }}
        className='w-full min-h-screen bg-center bg-no-repeat bg-cover overflow-hidden'
      >
        <div className='max-w-[1465px] w-full mx-auto px-6 lg:px-10'>
          <nav className='flex items-center justify-between h-[83px]'>
            <img
              className='h-12 cursor-pointer flex-shrink-0'
              src='/imgHeader/logo.png'
              alt='logo'
            />
            <ul className='hidden lg:flex gap-[60px]'>
              {['Home', 'Courses', 'Careers', 'Blog', 'About us'].map((item) => (
                <li
                  key={item}
                  className='font-[Poppins] text-white text-[20px] font-[500] hover:text-gray-200 transition'
                >
                  {item === 'Home' ? (
                    <Link to='/'>Home</Link>
                  ) : item === 'Courses' ? (
                    <Link to='/courses'>Courses</Link>
                  ) : (
                    <a href='#'>{item}</a>
                  )}
                </li>
              ))}
            </ul>
            <div className='hidden lg:flex gap-[20px]'>
              <OpenWindowStore />
              <OpenWindowStoreRegistr />
            </div>
            <button
              className='lg:hidden flex flex-col gap-[5px] cursor-pointer z-50'
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label='menu'
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
              />
            </button>
          </nav>
        </div>
        <div
          className={`lg:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center gap-8 transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          {['Home', 'Courses', 'Careers', 'Blog', 'About us'].map((item) => (
            <span
              key={item}
              className='font-[Poppins] text-white text-[26px] font-[500]'
              onClick={() => setMenuOpen(false)}
            >
              {item === 'Home' ? (
                <Link to='/'>Home</Link>
              ) : item === 'Courses' ? (
                <Link to='/courses'>Courses</Link>
              ) : (
                <a href='#'>{item}</a>
              )}
            </span>
          ))}
          <div className='flex gap-4 mt-4'>
            <OpenWindowStore />
            <OpenWindowStoreRegistr />
          </div>
        </div>
        <div className='max-w-[1465px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-10 pt-16 lg:pt-[120px]'>
          <div className='flex-1 text-left max-w-[681px]'>
            <p className='text-[36px] sm:text-[44px] lg:text-[50px] font-[700] text-white leading-tight'>
              <span className='text-yellow-600'>Studying</span> Online is now{' '}
              <br className='hidden sm:block' />
              much easier
            </p>
            <p className='font-[Nunito_Sans] text-[18px] lg:text-[24px] text-white mt-8 font-[400] leading-relaxed'>
              TOTC is an interesting platform that will teach you in more an interactive way
            </p>
            <div className='flex flex-wrap items-center gap-6 mt-12'>
              <button
                className='font-[Poppins] cursor-pointer text-white text-[16px] font-[600] bg-[#FFFFFF4D] hover:bg-[#3d9da0] transition w-[150px] h-[50px] rounded-full z-30'
                onClick={() => openWindow('registr')}
              >
                Join For Free
              </button>
              <div className='flex items-center gap-5'>
                <button className='w-14 h-14 rounded-full bg-white cursor-pointer flex items-center justify-center hover:bg-[#3d9da0] transition z-30 flex-shrink-0'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#3B82F6'
                    viewBox='0 0 24 24'
                    className='w-8 h-8'
                  >
                    <path d='M8 5v14l11-7z' />
                  </svg>
                </button>
                <span className='font-[Poppins] text-[18px] lg:text-[20px] font-[400] text-white z-30'>
                  Watch how it works
                </span>
              </div>
            </div>
          </div>
          <div className='flex-1 relative w-full min-h-[400px] lg:min-h-[600px] hidden sm:block'>
            <img
              src='/imgHeader/girl.png'
              alt='img'
              className='absolute bottom-0 right-[5%] max-h-[500px] lg:max-h-[700px]'
            />
            <img
              src='/imgHeader/Group1.png'
              alt='img'
              className='absolute top-0 right-0 max-w-[120px] lg:max-w-[160px]'
            />
            <img
              src='/imgHeader/Group2.png'
              alt='Congrats'
              className='absolute top-[5%] left-[30%] h-16 lg:h-22'
            />
            <img
              src='/imgHeader/Group3.png'
              alt='img'
              className='absolute top-[30%] left-[35%] h-28 lg:h-43'
            />
            <img
              src='/imgHeader/Group4.png'
              alt='img'
              className='absolute top-[10%] right-[3%] h-16 lg:h-26'
            />
          </div>
        </div>
      </header>
    </>
  );
};
