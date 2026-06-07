import { useForm, type SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { ToggleRegistr } from '../StoreOpen/ToggleWindow';

type FormDataRegistr = {
  email: string;
  name: string;
  password: string;
};

export const schem = yup
  .object({
    email: yup.string().required('This field is required').email('Invalid email'),
    name: yup
      .string()
      .required('This field is required')
      .min(4, 'The name must be at least 4 letters'),
    password: yup
      .string()
      .required('This field is required')
      .min(8, 'The password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
      ),
  })
  .required();

export default function FormRegistr() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataRegistr>({ resolver: yupResolver(schem) });

  const onSubmit: SubmitHandler<FormDataRegistr> = (data) => {
    console.log(data);
    reset();
  };

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .animate-item {
          animation: fadeIn 0.5s ease-out forwards;
          animation-fill-mode: backwards;
        }
      `}</style>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-[420px] mx-auto flex flex-col px-4 sm:px-0 items-center sm:items-stretch'
      >
        <h1 className='font-[Poppins] text-[24px] text-center w-full animate-item'>
          Welcome to lorem..!
        </h1>
        <div className='mt-4 w-full flex justify-center animate-item'>
          <ToggleRegistr />
        </div>
        <p className='font-[Poppins] mt-4 text-[14px] text-gray-500 text-center leading-relaxed w-full animate-item'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className='text-left flex flex-col gap-1.5 mt-5 w-full animate-item'>
          <div className='flex justify-between items-center flex-wrap gap-2'>
            <h5 className='font-medium text-[15px]'>Email Address:</h5>
            {errors.email && (
              <p className='text-[red] text-xs font-[Poppins]'>{errors.email.message}</p>
            )}
          </div>
          <input
            type='email'
            {...register('email')}
            placeholder='Enter your Email Address'
            className='w-full h-[48px] border border-[#49BBBD] rounded-full pl-[24px] pr-[16px] outline-none focus:border-[#3EA5A6] transition-colors text-[15px]'
          />
        </div>
        <div className='text-left flex flex-col gap-1.5 mt-4 w-full animate-item'>
          <div className='flex justify-between items-center flex-wrap gap-2'>
            <h5 className='font-medium text-[15px]'>User Name:</h5>
            {errors.name && (
              <p className='text-[red] text-xs font-[Poppins]'>{errors.name.message}</p>
            )}
          </div>
          <input
            id='name'
            type='text'
            {...register('name')}
            placeholder='Enter your User Name'
            className='w-full h-[48px] border border-[#49BBBD] rounded-full pl-[24px] pr-[16px] outline-none focus:border-[#3EA5A6] transition-colors text-[15px]'
          />
        </div>
        <div className='text-left flex flex-col gap-1.5 mt-4 w-full animate-item'>
          <div className='flex justify-between items-center flex-wrap gap-2'>
            <h5 className='font-medium text-[15px]'>Password:</h5>
            {errors.password && (
              <p className='text-[red] text-xs font-[Poppins] max-w-[250px] text-right'>
                {errors.password.message}
              </p>
            )}
          </div>
          <input
            type='password'
            {...register('password')}
            placeholder='Enter your password'
            className='w-full h-[48px] border border-[#49BBBD] rounded-full pl-[24px] pr-[16px] outline-none focus:border-[#3EA5A6] transition-colors text-[15px]'
          />
        </div>
        <div className='flex justify-between items-center my-5 w-full text-[14px] font-[Poppins] flex-wrap gap-2'>
          <label className='flex items-center gap-2 cursor-pointer select-none animate-item'>
            <input type='checkbox' className='w-4 h-4 accent-[#49BBBD] cursor-pointer' />
            Remember me
          </label>
          <a href='#' className='text-[#49BBBD] hover:underline animate-item'>
            Forgot password?
          </a>
        </div>
        <div className='w-full flex flex-col sm:items-end'>
          <button
            type='submit'
            className='font-[Poppins] cursor-pointer text-white text-[18px] font-medium w-full sm:w-[180px] h-[48px] 
              rounded-full bg-[#49BBBD] hover:bg-[#3EA5A6] transition-all active:scale-95 shadow-md animate-item'
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
}
