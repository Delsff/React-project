import { useForm, type SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type FooterData = {
  email: string;
};

export const schem = yup
  .object({
    email: yup.string().required('This field is requred').email('invalid data'),
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
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-wrap gap-[30px] justify-center pt-[30px] h-auto w-[600px] m-auto'
      >
        <input
          type='email'
          {...register('email')}
          placeholder='Your Email'
          className='w-[350px] h-[60px] border-1 border-[#83839A] rounded-full placeholder:pl-[10px] placeholder:text-[#83839A] placeholder:font-[Poppins] font-[600] caret-white pl-[30px] text-[white]'
        />
        <button className='w-[160px] h-[60px] bg-[#49BBBD] rounded-full text-white font-[Poppins] font-[500] cursor-pointer text-[19px] hover:bg-[#38999A]'>
          Subscribe
        </button>
        <div className='mt-[10px] ml-[100p]'>
          <span>
            <div>{errors.email && <p className='text-[red]'>{errors.email.message}</p>}</div>
          </span>
        </div>
      </form>
    </>
  );
};
export const Footer = () => {
  return (
    <>
      <footer className='w-[1600px] h-[650px] bg-[#252641] relative top-[1200px] items-center justify-center'>
        <div className='flex justify-center m-auto flex-wrap gap-[30px] items-center pt-[50px]'>
          <img src='public\imgHeader\logo.png' alt='img' />
          <span className='text-[#626381]'>
            |<br />| <br />|
          </span>
          <p className='text-[#FFFFFF] font-[Poppins] font-[600] text-[20px]'>
            Virtual Class <br /> for Zoom
          </p>
        </div>
        <div>
          <p className='font-[Poppins] font-[600] text-[26px] pt-[120px] text-[#B2B3CF]'>
            Subscribe to get our Newsletter
          </p>
        </div>
        <FooterEmail />
        <div className='pt-[60px]'>
          <p className='text-[#626381] font-[Poppins] text-[20px] font-[500]'>
            Careers | Privacy Policy | Terms & Conditions
          </p>
          <br />
          <p className='text-[#626381] font-[Poppins] text-[20px] font-[500]'>
            © 2021 Class Technologies Inc.
          </p>
        </div>
      </footer>
    </>
  );
};
