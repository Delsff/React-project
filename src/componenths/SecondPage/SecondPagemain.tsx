export const SecondPageMain = () => {
  return (
    <>
      <div className='w-[1550px] h-[667px] bg-[#bfd7f0] m-auto mt-[50px]'>
        <div className='flex flex-wrap justify-between p-20'>
          <div className='flex flex-col gap-[10px] text-left'>
            <h1 className='font-[Poppins] text-[24px]'>
              By Themadbrains in
              <span className='text-[#49BBBD] font-[Poppins] text-[24px]'>inspiration</span>
            </h1>
            <p className='text-[#2F327D] text-[44px] font-[600]  font-[Poppins]'>
              Why Swift UI Should Be on the <br /> Radar of Every Mobile <br /> Developer
            </p>
            <p className='text-[#696984] font-[Poppins] text-[25px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempos
              Lorem ipsum dolor sitamet,
              <br /> consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <button className='w-[236px] h-[63px] mt-[10px] mr-[50px] text-[white] bg-[#49BBBD] font-[Poppins] p-auto cursor-pointer text-[18px] rounded-full hover:bg-[#38999A]'>
              Start learning now
            </button>
          </div>
          <div>
            <img src='public\imgSecondpage\Group3.png' alt='img' className='h-120' />
          </div>
        </div>
      </div>
      <div className='w-[1550px]'>
        <h1 className='font-[Poppins] font-[700] text-[30px] mt-[80px] ml-[80px] text-left'>
          Reading blog list
        </h1>
        <div className='flex flex-wrap gap-[50px] justify-center mt-[20px] mr-[50px]'>
          <img src='public\imgSecondpage\Group4.png' alt='img' className='h-70' />
          <img src='public\imgSecondpage\Group5.png' alt='img' className='h-70' />
          <img src='public\imgSecondpage\Group6.png' alt='img' className='h-70' />
          <img src='public\imgSecondpage\Group7.png' alt='img' className='h-70' />
        </div>
      </div>
    </>
  );
};
