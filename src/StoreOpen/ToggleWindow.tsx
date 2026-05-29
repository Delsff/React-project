import { useToggleWindow } from '../store/Window';

export const ToggleLogin = () => {
  const { openWindow } = useToggleWindow();
  return (
    <>
      <div className='flex w-[250px] h-[59px] mb-4 justify-center bg-[#49BBBD99] rounded-full m-auto mt-[5px] p-[4px]'>
        <button className='rounded-full text-[16px] font-medium bg-[#3d9da0] text-white w-[115px] h-[40px] m-auto cursor-pointer shadow-md transform scale-102 transition-all duration-300'>
          Login
        </button>
        <button
          onClick={() => openWindow('registr')}
          className='rounded-full text-[16px] font-medium text-[#FFFFFF] w-[115px] h-[40px] m-auto cursor-pointer transition-all duration-300 hover:bg-[#ffffff22] hover:text-gray-100'
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
      <div className='flex w-[250px] h-[59px] mb-4 justify-center bg-[#49BBBD99] rounded-full m-auto mt-[5px] p-[4px]'>
        <button
          onClick={() => openWindow('login')}
          className='rounded-full text-[16px] font-medium text-[white] w-[115px] h-[40px] m-auto cursor-pointer transition-all duration-300 hover:bg-[#ffffff22] hover:text-gray-100'
        >
          Login
        </button>
        <button className='rounded-full text-[16px] font-medium bg-[#3d9da0] text-white w-[115px] h-[40px] m-auto cursor-pointer shadow-md transform scale-102 transition-all duration-300'>
          Register
        </button>
      </div>
    </>
  );
};
