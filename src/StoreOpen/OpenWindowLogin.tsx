import { useToggleWindow } from '../store/Window';
import FormLogin from '../validateForm/FormLogin';
import { useEffect, useRef } from 'react';

export const CloseWindow = () => {
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
      <div className='fixed inset-0 bg-black/40 z-40 flex items-center justify-center p-4 backdrop-blur-sm animate-fade'>
        <div
          ref={containerRef}
          className='w-full max-w-[1100px] h-auto max-h-[90vh] bg-white relative flex flex-col lg:flex-row justify-between items-center p-6 sm:p-10 lg:p-12 z-50 rounded-2xl shadow-2xl overflow-y-auto animate-popup'
        >
          <div className='hidden lg:flex w-1/2 justify-center items-center pr-6'>
            <img
              src='/imgMain/Group7.png'
              alt='illustration'
              className='max-w-full h-auto object-contain max-h-[450px]'
            />
          </div>
          <div className='w-full lg:w-1/2 flex justify-center items-center py-4'>
            <FormLogin />
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
export const OpenWindowStore = () => {
  const { openWindow } = useToggleWindow();
  return (
    <div>
      <button
        onClick={() => openWindow('login')}
        className='font-[Poppins] cursor-pointer text-black text-[17px] font-medium w-[130px] h-[42px] 
            rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200 transition-all duration-200 hover:scale-105 active:scale-95'
      >
        Login
      </button>
    </div>
  );
};
