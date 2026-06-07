import { useEffect, useRef } from 'react';
import { useToggleWindow } from '../store/Window';
import FormRegistr from '../validateForm/FormRegistr';

export const CloseWindowRegistr = () => {
  const { isOpen, closeWindow } = useToggleWindow();
  const containerRef = useRef<HTMLDivElement>(null);

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

  if (!isOpen) return null;
  return (
    <>
      <style>{`
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-popup {
          animation: slideUpFade 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      <div className='fixed inset-0 bg-black/40 z-40 flex items-center justify-center p-0 sm:p-4 backdrop-blur-sm'>
        <div
          ref={containerRef}
          className='w-full max-w-[95%] sm:max-w-[1150px] h-auto max-h-[98vh] bg-white relative flex flex-col lg:flex-row justify-between items-center p-6 pt-16 sm:p-10 lg:p-14 z-50 rounded-2xl shadow-2xl overflow-y-auto animate-popup'
        >
          <div className='hidden lg:flex w-[55%] justify-center items-center pr-4'>
            <img
              src='/imgMain/Group231.png'
              alt='illustration'
              className='w-full h-auto object-contain max-h-[500px] drop-shadow-sm'
            />
          </div>
          <div className='w-full lg:w-[45%] flex justify-center items-center py-2'>
            <FormRegistr />
          </div>
          <button
            onClick={closeWindow}
            className='absolute top-4 right-4 font-[Poppins] cursor-pointer text-gray-500 hover:text-red-500 text-[15px] font-medium px-4 py-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors'
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};
export const OpenWindowStoreRegistr = () => {
  const { openWindow } = useToggleWindow();
  return (
    <div>
      <button
        onClick={() => openWindow('registr')}
        className='font-[Poppins] cursor-pointer text-white text-[17px] font-medium bg-[#FFFFFF4D] hover:bg-[#3d9da0] transition-all duration-200 hover:scale-105 active:scale-95 w-[130px] h-[42px] rounded-full border border-transparent'
      >
        Sign Up
      </button>
    </div>
  );
};
