"use client"
import React from 'react'
import BackgroundImage from '../img/background-img.jpg'
import Image from 'next/image'
import { Box} from '@mui/material'
import Header from '../Componentes/header'

export const HomePage = () => {

  return (
    <div>
    <Header/>
      <Box style={{ position: 'relative', width: '100%', height: '70vh' }}>

        <Image
          src={BackgroundImage}
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
          quality={100}

        />
      </Box>
    </div>
  )
}

export default HomePage
