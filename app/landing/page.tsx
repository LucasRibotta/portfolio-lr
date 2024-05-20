'use client';
import React, { useState } from 'react'
import About from '@/components/about/About'
import AboutEn from '@/components/about/About-en';
import Experience from '@/components/experience/Experience'
import Footer from '@/components/footer/Footer'
import Home from '@/components/home/Home'
import HomeEn from '@/components/home/Home-en';
import NavBar from '@/components/navBar/NavBar'
import Project from '@/components/project/Project'
import Technologies from '@/components/technologies/Technologies'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';


const LandingPage = () => {
    const [lenguage, setLenguage] = useState('Es');

    const handleLenguageChange = (newLenguage: string) => {
        setLenguage(newLenguage);
    }

    return (
        <div className="flex flex-col items-center bg-gradient-to-r from-[#ece9e6] to-[#ffffff]">
            <NavBar lenguage={lenguage} handleLenguageChange={handleLenguageChange} />
            <main className="flex-1 flex flex-col justify-center items-center p-4 md:p-0 pt-20 md:pt-20">
                <div className='fixed top-16 right-0 md:top-0 md:right-5 z-50'>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab href='#home' variant="extended" color="secondary">
                            <NavigationIcon />
                        </Fab>
                    </Box>
                </div>
                <div className="grid grid-cols-1 gap-12 px-4 h-full">
                    {lenguage === 'Es' ? <Home /> : <HomeEn />}
                    <Technologies lenguage={lenguage} />
                    {lenguage === 'Es' ? <About /> : <AboutEn />}
                    <Project lenguage={lenguage} />
                    <Experience lenguage={lenguage} />
                </div>
                <Footer lenguage={lenguage} />
            </main>
        </div>
    )
}

export default LandingPage