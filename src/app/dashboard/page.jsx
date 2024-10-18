"use client";
import React from 'react'
import { signOut } from 'next-auth/react'
import { Box } from '@mui/material';

function dashboard() {
  return (
    <Box className='h-[calc(100vh-7rem)] flex justify-center items-center '>
      <section >
        <div>
          <h1 className='text-white text-5xl'>Dashboard</h1>
        </div>
        <div>
          <button className='bg-white text-black px-4 py-2 rounded-md mt-4'
            onClick={() => signOut()}>LOGOUT</button>
        </div>
      </section>

    </Box>

  )
}

export default dashboard