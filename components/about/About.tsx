/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Desarrollador from '@/assets/AboutImg.jpg';
import Image from 'next/image';

const About = () => {
    return (
        <div className=' min-h-[60vh] flex flex-col-reverse px-4 lg:grid lg:grid-cols-2 bg-white items-center rounded-[50px] overflow-hidden  shadow-lg shadow-slate-900' id="about">
            <div className='p-4 md:p-12 flex flex-col gap-10 h-full items-center justify-center'>
                <h2 className='text-2xl md:text-3xl text-violet-800 font-extrabold'>ACERCA DE MI</h2>
                <div className='flex flex-col gap-4 md:gap-8 items-center justify-center'>
                    <h3 className='font-semibold text-xl md:text-2xl'>Un dedicado desarrollador FrontEnd</h3>
                    <p className='text-justify text-lg md:text-xl'>
                        Como desarrollador FrontEnd altamente calificado, domino una amplia gama de tecnologías esenciales, incluyendo <span className='font-bold'>React, Redux, JavaScript, TypeScript, Next.js, Flutter, Dart, CSS y HTML.</span> Mi enfoque se centra en diseñar y desarrollar aplicaciones web sofisticadas que garanticen un rendimiento óptimo y una experiencia excepcional para el usuario. Con sólidas habilidades analíticas y un enfoque proactivo, estoy preparado para superar los desafíos técnicos y entregar productos de alta calidad que satisfagan las necesidades de mis clientes. Estoy aquí para ayudarte con cualquier pregunta o problema relacionado con el desarrollo FrontEnd.</p>
                    <a href='https://docs.google.com/document/d/1QcgpdByonaFppz6LTYWRjhnBsvn4kPqw/edit?usp=drive_link&ouid=113773497525988917324&rtpof=true&sd=true' className='text-2xl mt-[1rem] text-center items-center px-6 py-3 bg-violet-900 font-semibold text-white rounded-md hover:bg-violet-600 hover:text-violet-900 transition-all duration-300 ' target='blank' >Curriculum</a>
                </div>
            </div>
            <div className='grid items-center justify-center'>
                <Image
                    width={600}
                    height={600}
                    src={Desarrollador}
                    alt="compu"
                    className='h-[70%] rounded-xl  animate-flip-up animate-once ' />
            </div>
        </div>
    )
}

export default About