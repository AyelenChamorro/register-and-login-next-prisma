"use client"
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';
import Header from '../../../Componentes/header';
import { Box } from '@mui/material';

function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert('passwords do not match')
    }

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(
        {
          username: data.username,
          email: data.email,
          password: data.password
        }
      ),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (res.ok) {
      router.push('/auth/login')
    }
  });
  console.log("errores", errors);
  return (
    <Box>
      <Header />
      <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

        <form onSubmit={onSubmit} className='w-1/4'>
          <h1 className='text-slate-200 font_bold text-4xl mb-4'>Registrarse</h1>.
          <label htmlFor="username" className='text-slate-500 mb-2 block text-sm'>
            Username
          </label>
          <input type="text"
            {...register('username', {
              required:
              {
                value: true,
                message: 'Username is required'
              }
            })}
            placeholder='Username'
            className='p-3 rounded h-10 block mb-2 bg-slate-900 text-slate-300 w-full'
          />
          {
            errors.username &&
            <span className='text-red-500 text-xs'>{errors.username.message}</span>
          }
          <label htmlFor="email" className='text-slate-500 mb-2 block text-sm'>
            email
          </label>
          <input type="email"
            {...register('email', {
              required:
              {
                value: true,
                message: 'email is required'
              }
            })}
            placeholder='Email'
            className='p-3 rounded h-10 block mb-2 bg-slate-900 text-slate-300 w-full'
          />
          {
            errors.email &&
            <span className='text-red-500 text-xs'>{errors.email.message}</span>
          }
          <label htmlFor="password" className='text-slate-500 mb-2 block text-sm'>
            password
          </label>
          <input type="password"
            {...register('password', {
              required:
              {
                value: true,
                message: 'password is required'
              }
            })}
            placeholder='********'
            className='p-3 rounded h-10 block mb-2 bg-slate-900 text-slate-300 w-full'
          />
          {
            errors.password &&
            <span className='text-red-500 text-xs'>{errors.password.message}</span>
          }
          <label htmlFor="confirmPassword" className='text-slate-500 mb-2 block text-sm'>
            confirmPassword
          </label>
          <input type="password"
            {...register('confirmPassword', {
              required:
              {
                value: true,
                message: 'confirmPassword is required'
              }
            })}
            placeholder='********'
            className='p-3 rounded h-10 block mb-2 bg-slate-900 text-slate-300 w-full'
          />
          {
            errors.confirmPassword &&
            <span className='text-red-500 text-xs'>{errors.confirmPassword.message}</span>
          }

          <button className='w-full bg-blue-500 text-white p-3 rounded-lg mt-2'>Register</button>

        </form>
      </div>
    </Box>

  )
}

export default RegisterPage