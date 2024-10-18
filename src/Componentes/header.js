"use client";
import React from "react";
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import LogoImg from '../img/Logo-img.png'


const Header = () => {

    const router = useRouter();
    const handleNavigation = (path) => {
        router.push(path);
    };
    return (
        <Box
            /* clasName="bg-neutral-950" */
            sx={{
                height: '110px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid white',
                color: 'white',
                fontFamily: 'Inter',
            }}
        >
            <Box
                sx={{
                    width: '30%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Image
                    src={LogoImg}
                    alt="Logo"
                    width={100}
                    height={100}
                    priority
                />
            </Box>
            <Box
                sx={{
                    width: '70%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',

                }} >
                <Box onClick={() => handleNavigation('/')} sx={{ cursor: 'pointer' }} >
                    <Typography sx={{ fontWeight: 'bold' }} variant="h6">HOME</Typography>
                </Box>
                <Box onClick={() => handleNavigation('/auth/login')} sx={{ cursor: 'pointer' }}>
                    <Typography sx={{ fontWeight: 'bold' }} variant="h6">LOGIN</Typography>
                </Box>
                <Box onClick={() => handleNavigation('/auth/register')} sx={{ cursor: 'pointer' }}>
                    <Typography sx={{ fontWeight: 'bold' }} variant="h6">REGISTER</Typography>
                </Box>
            </Box>


        </Box>
    )

}

export default Header;