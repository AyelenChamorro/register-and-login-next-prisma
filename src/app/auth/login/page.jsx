"use client"
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '../../../Componentes/header';
import { Box } from '@mui/material';

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const router = useRouter()
  const [error, setError] = useState(null)

  const onSubmit = handleSubmit(async data => {
    console.log(data)
    const res = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password
    })
    console.log(res)

    if (res.error) {
      setError(res.error)
    } else {
      router.push('/dashboard')
    }

  });


  return (
    <Box>
      <Header />
      <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
        <form onSubmit={onSubmit} className='w-1/4' action=""  >
          {error && (
            <p className='bg-red-500 text-lg text-white p-3'>{error}</p>
          )}
          <h1 className='text-slate-200 font_bold text-4xl mb-4'>Login</h1>
          <label htmlFor="username" className='text-slate-500 mb-2 block text-sm'>
            Email
          </label>
          <input type="email"
            {...register('email', {
              required:
              {
                value: true,
                message: 'email is required'
              }

            })}
            placeholder='User@email.com'
            className='p-3 rounded h-10 block mb-2 bg-slate-900 text-slate-300 w-full'
          />
          {errors.email &&
            <span className='text-red-500 text-xs'>{errors.email.message}</span>}

          <label htmlFor="password" className='text-slate-500 mb-2 block text-sm'>
            Password
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
          {errors.password &&
            <span className='text-red-500 text-xs'>{errors.password.message}</span>}

          <button className='w-full bg-blue-500 text-white p-3 rounded-lg mt-2'>Login</button>
        </form>


      </div>
    </Box>

  )
}

export default LoginPage
