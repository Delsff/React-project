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
    email: yup.string().required('This field is requred').email('invalid data'),
    name: yup
      .string()
      .required('This field is requred')
      .min(4, 'the name must be of at least 2 letters'),
    password: yup
      .string()
      .required('This field is requred')
      .min(8, 'the password must be of at least 2 letters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least one uppercase letter,one lowercase letter,one number and one special character',
      ),
  })
  .required();

export default function FormRegistr() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schem) });
  const onSubmit: SubmitHandler<FormDataRegistr> = (data: any) => {
    console.log(data);
    reset();
  };
  useEffect(() => {
    reset();
  }, [reset]);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='w-[410px] h-[600px] mx-[20px] mt-[115px]'>
        <h1 className='font-[Poppins] text-[20px]'>Welcome to lorem..!</h1>
        <div>
          <ToggleRegistr />
        </div>
        <p className='font-[Poppins] mt-[30px] text-[15px]'>
          Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry.
        </p>
        <div className='text-left flex flex-col gap-[10px] mt-[20px]'>
          <div className='flex flex-wrap gap-[10px]'>
            <h5>Email Address:</h5>
            {errors.email && <p className='text-[red]'>{errors.email.message}</p>}
          </div>
          <input
            type='email'
            {...register('email')}
            className='w-[435px] h-[45px] border-1 border-[#49BBBD] rounded-full placeholder: pl-[30px]'
            placeholder='Enter your Email Address'
          />
        </div>
        <div className='text-left flex flex-col gap-[10px] mt-[20px]'>
          <div className='flex flex-wrap gap-[10px]'>
            <h5>User Name:</h5> {errors.name && <p className='text-[red]'>{errors.name.message}</p>}
          </div>
          <input
            id='name'
            {...register('name')}
            placeholder='Enter your User Name'
            className='w-[435px] h-[45px] border-1 border-[#49BBBD] rounded-full placeholder: pl-[30px]'
          />
        </div>
        <div className='text-left flex flex-col gap-[10px] mt-[20px]'>
          <div className='flex flex-wrap gap-[10px]'>
            <h5>Password:</h5>{' '}
            {errors.password && <p className='text-[red]'>{errors.password.message}</p>}
          </div>
          <input
            type='password'
            {...register('password')}
            placeholder='Enter your password'
            className='w-[435px] h-[45px] border-1 border-[#49BBBD] rounded-full placeholder: pl-[30px]'
          />
        </div>
        <div className='flex justify-between w-[500px] my-[20px]'>
          <label className='flex items-center gap-[15px]'>
            <input type='checkbox' className='w-[20px] h-[20px] cursor-pointer' /> Remember me
          </label>
          <a href='#' className='float-right'>
            Forgot password?
          </a>
        </div>
        <div>
          <button
            className='font-[Poppins] cursor-pointer text-[black] text-[19px] font-[500] w-[210px] h-[45px] 
              rounded-full bg-[#49BBBD] hover:bg-[#3EA5A6] transition ml-[300px] mb-[15px]'
          >
            Registr
          </button>
        </div>
      </form>
    </>
  );
}
