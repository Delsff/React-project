import { Link } from 'react-router-dom';
export const SecondHeader = () => {
  return (
    <>
      <div>
        <div className='w-[1465px] h-[83px] mx-auto flex items-center'>
          <nav className='w-full flex items-center justify-between mt-[30px] ml-[130px]'>
            <img
              className='relative  h-18 cursor-pointer'
              src='public\imgSecondpage\Group2.png'
              alt='logo'
            />
            <ul className='flex flex-wrap gap-[80px] relative left-[130px] top-[15px]'>
              <li className='font-[Poppins] cursor-pointer text-[#5B5B5B] text-[22px] font-[500] hover:text-gray-200'>
                <Link to='/'>Home</Link>
              </li>
              <li className='font-[Poppins] cursor-pointer text-[#5B5B5B] text-[22px] font-[500] hover:text-gray-200'>
                <Link to='/courses' className='visited:text-gray-400'>
                  Courses
                </Link>
              </li>
              <li className='font-[Poppins] cursor-pointer text-[#5B5B5B] text-[22px] font-[500] hover:text-gray-200'>
                <a href='#'>Careers</a>
              </li>
              <li className='font-[Poppins] cursor-pointer text-[#5B5B5B] text-[22px] font-[500] hover:text-gray-200'>
                <a href='#'>Blog</a>
              </li>
              <li className='font-[Poppins] cursor-pointer text-[#5B5B5B] text-[22px] font-[500] hover:text-gray-200'>
                <a href='#'>About us</a>
              </li>
              <li>
                <div className='flex flex-wrap gap-[15px]'>
                  <img
                    src='public\imgSecondpage\Group1.png'
                    alt='img'
                    className='relative left-[10px] bottom-[10px]'
                  />
                  <div className='ml-[45px] mt-[5px] cursor-pointer'>
                    <span className='font-[Poppins] font-[500] text-[20px]'>Lina </span>
                    <span className='text-[18px] inline-block rotate-90'>&gt;</span>
                  </div>
                </div>
              </li>
            </ul>
            <div className='flex flex wrap gap-[16px] relative right-[10px] top-[15px]'></div>
          </nav>
        </div>
      </div>
    </>
  );
};
