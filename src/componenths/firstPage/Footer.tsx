import { useEffect, useRef } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type FooterData = {
  email: string;
};

export const schem = yup
  .object({
    email: yup.string().required('This field is required').email('invalid data'),
  })
  .required();
export const FooterEmail: React.FC = () => {
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 max-w-[600px] w-full mx-auto px-4'
    >
      <div className='flex flex-col w-full sm:w-auto relative pb-6 sm:pb-0'>
        <input
          type='email'
          {...register('email')}
          placeholder='Your Email'
          className='w-full sm:w-[350px] h-[60px] border border-[#83839A] rounded-full placeholder:text-[#83839A] placeholder:font-[Poppins] font-[600] caret-white pl-6 text-white bg-transparent outline-none focus:border-[#49BBBD] transition-colors'
        />
        {errors.email && (
          <p className='text-red-500 text-sm mt-1 absolute bottom-0 left-4 sm:top-[62px] sm:bottom-auto'>
            {errors.email.message}
          </p>
        )}
      </div>
      <button className='w-full sm:w-[160px] h-[60px] bg-[#49BBBD] rounded-full text-white font-[Poppins] font-[500] cursor-pointer text-[19px] hover:bg-[#38999A] transition-colors shrink-0'>
        Subscribe
      </button>
    </form>
  );
};

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = footerRef.current?.querySelector('.scroll-anim');
    if (!element) return;
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
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .scroll-anim {
          opacity: 0;
          transform: translateY(15px); 
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }

        .scroll-anim.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <footer
        ref={footerRef}
        className='w-full h-auto bg-[#252641] py-12 md:py-16 mt-12 text-center'
      >
        <div className='scroll-anim max-w-[1520px] mx-auto px-4 flex flex-col gap-8 md:gap-12'>
          <div className='flex justify-center flex-wrap gap-4 sm:gap-6 items-center'>
            <img src='/imgHeader/logo.png' alt='logo' className='h-8 sm:h-10 object-contain' />
            <div className='w-[1px] h-8 bg-[#626381] hidden sm:block' />
            <p className='text-white font-[Poppins] font-[600] text-[16px] sm:text-[20px] text-left leading-tight'>
              Virtual Class <br /> for Zoom
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-[Poppins] font-[600] text-[20px] md:text-[26px] text-[#B2B3CF]'>
              Subscribe to get our Newsletter
            </p>
            <FooterEmail />
          </div>
          <div className='flex flex-col justify-center items-center gap-3 border-t border-gray-700/30 pt-6 mt-4'>
            <p className='text-[#626381] font-[Poppins] text-[14px] md:text-[18px] font-[500] hover:text-gray-400 transition-colors cursor-pointer leading-relaxed'>
              <a href='#'> Careers | Privacy Policy | Terms & Conditions</a>
            </p>
            <p className='text-[#626381] font-[Poppins] text-[14px] md:text-[18px] font-[500]'>
              © 2026 Class Technologies Inc.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
