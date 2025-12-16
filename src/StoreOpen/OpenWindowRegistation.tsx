import { useToggleWindow } from '../store/Window';
import FormRegistr from '../validateForm/FormRegistr';

export const CloseWindowRegistr = () => {
  const { closeWindow } = useToggleWindow();

  return (
    <>
      <div className='w-[1240px] h-[672px] bg-[white] fixed flex justify-center mt-[50px] m-auto inset-0 z-40 rounded-md'>
        <div className='w-[1140px] h-[550px] flex items-center justify-between'>
          <div>
            <img
              src='public\imgMain\Group231.png'
              alt='img'
              className='h-155 ml-[41px] mt-[95px]'
            />
          </div>
          <div>
            <FormRegistr />
          </div>
        </div>
        <button
          onClick={closeWindow}
          className='font-[Poppins] cursor-pointer text-[black] text-[19px] font-[500] w-[130px] h-[40px] 
              rounded-full bg-gray-100 hover:bg-red-500 transition mx-[20px] my-[20px]'
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
          className='font-[Poppins] cursor-pointer text-[white] text-[19px] font-[500] bg-[#FFFFFF4D]  hover:bg-[#3d9da0] transition w-[130px] h-[40px] rounded-full'
        >
          Sign Up
        </button>
      </div>
    </>
  );
};
