import About from '@/components/about/About'
import Experience from '@/components/experience/Experience'
import Footer from '@/components/footer/Footer'
import Home from '@/components/home/Home'
import NavBar from '@/components/navBar/NavBar'
import Project from '@/components/project/Project'
import Technologies from '@/components/technologies/Technologies'
import React from 'react'


const LandingPage = () => {
    return (
        <div className="flex flex-col h-screen w-full items-center ">
            <NavBar />
            <main className="flex-1 flex flex-col justify-center items-center p-4 md:p-0 pt-12 md:pt-20">
                <div className="grid grid-cols-1 gap-12 px-4">
                    <Home />
                    <Technologies />
                    <About />
                    <Project />
                    <Experience />
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default LandingPage