import { useForm, type SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useRef } from 'react';

type FooterData = {
  email: string;
};

export const schem = yup
  .object({
    email: yup.string().required('This field is required').email('Invalid email'),
  })
  .required();

export const FooterEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FooterData>({
    resolver: yupResolver(schem),
  });
  const onSubmit: SubmitHandler<FooterData> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className='w-full max-w-[600px] mx-auto px-4'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col sm:flex-row gap-4 sm:gap-[30px] justify-center items-center pt-6 w-full'
      >
        <div className='w-full sm:w-[350px] relative flex flex-col items-center sm:items-start'>
          <input
            type='email'
            {...register('email')}
            placeholder='Your Email'
            className='w-full h-[60px] border border-[#83839A] rounded-full placeholder:pl-[10px] placeholder:text-[#83839A] placeholder:font-[Poppins] font-[600] caret-white pl-[30px] text-[white] focus:outline-none focus:border-[#49BBBD]'
          />
          {errors.email && (
            <p className='text-[red] text-sm font-[Poppins] mt-1 sm:absolute sm:top-[62px] sm:left-4'>
              {errors.email.message}
            </p>
          )}
        </div>
        <button className='w-full sm:w-[160px] h-[60px] bg-[#49BBBD] rounded-full text-white font-[Poppins] font-[500] cursor-pointer text-[19px] hover:bg-[#38999A] transition-colors active:scale-95 shrink-0 mt-2 sm:mt-0'>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export const SecondFooter = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll('.scroll-anim');
    if (!elements || elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.17,
        rootMargin: '0px 0px -20px 0px',
      },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <footer
        ref={containerRef}
        className='w-full bg-[#252641] py-12 md:py-16 text-center flex flex-col justify-between h-auto min-h-[550px] px-4 overflow-hidden'
      >
        <div className='scroll-anim delay-1 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-[30px] w-full'>
          <img src='/imgHeader/logo.png' alt='logo' className='h-12 object-contain' />
          <span className='text-[#626381] hidden sm:block text-xl select-none'>|</span>
          <p className='text-[#FFFFFF] font-[Poppins] font-[600] text-[18px] sm:text-[20px] sm:text-left leading-snug'>
            Virtual Class <br /> for Zoom
          </p>
        </div>
        <div className='scroll-anim delay-2 my-8 sm:my-4'>
          <p className='font-[Poppins] font-[600] text-[22px] sm:text-[26px] text-[#B2B3CF]'>
            Subscribe to get our Newsletter
          </p>
        </div>
        <div className='scroll-anim delay-3 w-full'>
          <FooterEmail />
        </div>
        <div className='scroll-anim delay-4 mt-12 sm:mt-8 flex flex-col gap-4 items-center justify-center w-full'>
          <p className='text-[#626381] font-[Poppins] text-[16px] sm:text-[20px] font-[500] leading-relaxed max-w-[90%]'>
            Careers &nbsp;|&nbsp; Privacy Policy &nbsp;|&nbsp; Terms & Conditions
          </p>
          <p className='text-[#626381] font-[Poppins] text-[16px] sm:text-[20px] font-[500]'>
            © 2021 Class Technologies Inc.
          </p>
        </div>
      </footer>
    </>
  );
};
