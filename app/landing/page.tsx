'use client';
import About from '@/components/about/About'
import AboutEn from '@/components/about/About-en';
import Experience from '@/components/experience/Experience'
import Footer from '@/components/footer/Footer'
import Home from '@/components/home/Home'
import HomeEn from '@/components/home/Home-en';
import NavBar from '@/components/navBar/NavBar'
import Project from '@/components/project/Project'
import Technologies from '@/components/technologies/Technologies'
import React, { useState } from 'react'


const LandingPage = () => {
    const [lenguage, setLenguage] = useState('Es');

    const handleLenguageChange = (newLenguage: string) => {
        setLenguage(newLenguage);
    }

    return (
        <div className="flex flex-col h-screen w-full items-center ">
            <NavBar lenguage={lenguage} handleLenguageChange={handleLenguageChange} />
            <main className="flex-1 flex flex-col justify-center items-center p-4 md:p-0 pt-20 md:pt-20">
                <div className="grid grid-cols-1 gap-12 px-4">
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