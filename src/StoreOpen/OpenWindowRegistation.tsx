import { useEffect } from 'react';
import { useToggleWindow } from '../store/Window';
import FormRegistr from '../validateForm/FormRegistr';

export const CloseWindowRegistr = () => {
  const { isOpen, closeWindow } = useToggleWindow();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  return (
    <>
      <style>{`
  @keyframes slideUpFade {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  .animate-popup {
    animation: slideUpFade 0.35s ease-out forwards;
  }
  .animate-item {
    animation: fadeIn 0.5s ease-out forwards;
    animation-fill-mode: backwards;
  }
`}</style>
      <div className='w-[1240px] h-[672px] bg-[white] fixed flex justify-center mt-[50px] m-auto inset-0 z-40 rounded-md shadow-2xl animate-popup'>
        <div className='w-[1140px] h-[550px] flex items-center justify-between'>
          <div>
            <img
              src='/imgMain/Group231.png'
              alt='img'
              className='h-155 ml-[41px] mt-[95px] animate-item'
            />
          </div>
          <div>
            <FormRegistr />
          </div>
        </div>
        <button
          onClick={closeWindow}
          className='font-[Poppins] cursor-pointer text-[black] text-[19px] font-[500] w-[130px] h-[40px] 
              rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition-all duration-200 mx-[20px] my-[20px] animate-item'
        >
          Close
        </button>
      </div>
    </>
  );
};
export const OpenWindowStoreRegistr = () => {
  const { openWindow } = useToggleWindow();
  return (
    <>
      <div>
        <button
          onClick={() => openWindow('registr')}
          className='font-[Poppins] cursor-pointer text-[white] text-[19px] font-[500] bg-[#FFFFFF4D] hover:bg-[#3d9da0] transition-all duration-200 hover:scale-105 active:scale-95 w-[130px] h-[40px] rounded-full'
        >
          Sign Up
        </button>
      </div>
    </>
  );
};
