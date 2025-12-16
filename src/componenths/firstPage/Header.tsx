import { Link } from 'react-router-dom';
import { useToggleWindow } from '../../store/Window';
import { OpenWindowStore } from '../../StoreOpen/OpenWindowLogin';
import { OpenWindowStoreRegistr } from '../../StoreOpen/OpenWindowRegistation';

export const Header = () => {
  const { openWindow } = useToggleWindow();
  return (
    <>
      <header
        style={{
          backgroundImage: 'url(/imgHeader/header-bg.png)',
        }}
        className='w-screen h-[1119px] bg-center bg-no-repeat bg-cover overflow-hidden'
      >
        <div className='w-[1465px] h-[83px] mx-auto flex items-center'>
          <nav className='w-full flex items-center justify-between'>
            <img
              className='relative left-[40px] top-[20px] h-18 cursor-pointer'
              src='/imgHeader/logo.png'
              alt='logo'
            />
            <ul className='flex flex-wrap gap-[80px] relative left-[130px] top-[15px]'>
              <li className='font-[Poppins] cursor-pointer text-[white] text-[22px] font-[500] hover:text-gray-200'>
                <Link to='/'>Home</Link>
              </li>
              <li className='font-[Poppins] cursor-pointer text-[white] text-[22px] font-[500] hover:text-gray-200'>
                <Link to='/courses'>Courses</Link>
              </li>
              <li className='font-[Poppins] cursor-pointer text-[white] text-[22px] font-[500] hover:text-gray-200'>
                <a href='#'>Careers</a>
              </li>
              <li className='font-[Poppins] cursor-pointer text-[white] text-[22px] font-[500] hover:text-gray-200'>
                <a href='#'>Blog</a>
              </li>
              <li className='font-[Poppins] cursor-pointer text-[white] text-[22px] font-[500] hover:text-gray-200'>
                <a href='#'>About us</a>
              </li>
            </ul>
            <div className='flex flex wrap gap-[26px] relative right-[40px] top-[15px]'>
              <OpenWindowStore />
              <OpenWindowStoreRegistr />
            </div>
          </nav>
        </div>
        <div className='flex flex-wrap'>
          <div className='w-[681px] h-[404px] relative top-[200px] left-[50px] text-left'>
            <p className='text-[50px] font-[700] text-[white]'>
              <span className='text-yellow-600'> Studying</span> Online is now <br />
              much easier
            </p>
            <p className='font-[Nunito Sans] text-[24px] text-[white] relative top-[30px] font-[400]'>
              TOTC is an interesting platform that will teach <br /> you in more an interactive way
            </p>
            <div className='flex gap-[10px] relative top-[50px]'>
              <button
                className='font-[Poppins] cursor-pointer text-[white] text-[16px] font-[600] bg-[#FFFFFF4D]  hover:bg-[#3d9da0] transition w-[150px] h-[50px] rounded-full z-30'
                onClick={() => openWindow('registr')}
              >
                Join For Free
              </button>
              <p className='relative left-[30px] flex flex-wrap gap-[20px]'>
                <button className='w-14 h-14 rounded-full bg-[white] cursor-pointer flex items-center justify-center hover:bg-[#3d9da0] transition z-30'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#3B82F6'
                    viewBox='0 0 24 24'
                    className='w-8 h-8'
                  >
                    <path d='M8 5v14l11-7z' />
                  </svg>
                </button>
                <span className='font-[Poppins] text-[20px] font-[400] relative top-[12px] z-30'>
                  Watch how it works
                </span>
              </p>
            </div>
          </div>
          <div className='relative w-full h-[800px] '>
            <div className='relative h-full'>
              <img
                src='public/imgHeader/lovely-teenage-girl-with-curly-hair-posing-yellow-tshirt-min.png'
                alt='img'
                className='absolute bottom-[25%] right-[5%]'
              />
              <img
                src='public/imgHeader/Group1.png'
                alt='img'
                className='absolute bottom-[100%] left-[85%]'
              />

              <img
                src='public/imgHeader/Group2.png'
                alt='Congrats'
                className='absolute bottom-[94%] left-[40%] h-22'
              />

              <img
                src='public/imgHeader/Group3.png'
                alt='img'
                className='absolute bottom-[45%] left-[42%] h-43'
              />

              <img
                src='public/imgHeader/Group4.png'
                alt='img'
                className='absolute top-[10%] right-[3%] h-26'
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
