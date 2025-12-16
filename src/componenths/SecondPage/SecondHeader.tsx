import { Link } from 'react-router-dom';
export const SecondHeader = () => {
  return (
    <>
      {/* primer */}
      <div className='bg-black'>
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
            <div className='flex flex wrap gap-[26px] relative right-[40px] top-[15px]'></div>
          </nav>
        </div>
      </div>
      {/* primer */}
    </>
  );
};
