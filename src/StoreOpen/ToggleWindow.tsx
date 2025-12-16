import { useToggleWindow } from '../store/Window';

export const ToggleLogin = () => {
  const { openWindow } = useToggleWindow();
  return (
    <>
      <div className='flex w-[250px] h-[59px] mb-4 justify-center bg-[#49BBBD99] rounded-full m-auto mt-[5px]'>
        <button className='px-5 py-2 rounded-full text-[16px] font-medium bg-[#3d9da0] hover:bg-[#338F91] text-white w-[110px] h-[40px] m-auto cursor-pointer'>
          Login
        </button>
        <button
          onClick={() => openWindow('registr')}
          className='px-5 py-2 rounded-full text-[16px] font-medium text-[#FFFFFF] transition w-[110px] h-[40px] m-auto cursor-pointer hover:text-gray-200'
        >
          Register
        </button>
      </div>
    </>
  );
};
export const ToggleRegistr = () => {
  const { openWindow } = useToggleWindow();
  return (
    <>
      <div className='flex w-[250px] h-[59px] mb-4 justify-center bg-[#49BBBD99] rounded-full m-auto mt-[5px]'>
        <button
          onClick={() => openWindow('login')}
          className='px-5 py-2 rounded-full text-[16px] hover:text-gray-200 font-medium transition text-[white] w-[110px] h-[40px] m-auto cursor-pointer'
        >
          Login
        </button>
        <button className='px-5 py-2 rounded-full text-[16px] font-medium bg-[#3d9da0] text-white w-[110px] h-[40px] m-auto cursor-pointer  hover:bg-[#338F91] '>
          Register
        </button>
      </div>
    </>
  );
};
