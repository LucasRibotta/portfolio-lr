/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Desarrollador from '@/assets/AboutImg.jpg';
import Image from 'next/image';

const AboutEn = () => {
    return (
        <div className='min-h-[60vh] flex flex-col-reverse px-4 lg:grid lg:grid-cols-2 bg-white items-center rounded-[50px] overflow-hidden shadow-lg shadow-slate-900' id="about">
            <div className='p-4 md:p-12 flex flex-col gap-10 h-full items-center justify-center'>
                <h2 className='text-2xl md:text-3xl text-violet-800 font-extrabold'>ABOUT ME</h2>
                <div className='flex flex-col gap-4 md:gap-8 items-center justify-center'>
                    <h3 className='font-semibold text-xl md:text-2xl'>A dedicated FrontEnd developer</h3>
                    <p className='text-justify text-lg md:text-xl'>
                        As a highly skilled FrontEnd developer, I master a wide range of essential technologies, including <span className='font-bold'>React, Redux, JavaScript, TypeScript, Next.js, Flutter, Dart, CSS, and HTML.</span> My focus is on designing and developing sophisticated web applications that ensure optimal performance and an exceptional user experience. With strong analytical skills and a proactive approach, I am prepared to overcome technical challenges and deliver high-quality products that meet my clients&#39; needs. I am here to help you with any questions or issues related to FrontEnd development.</p>
                    <a href='https://docs.google.com/document/d/1sBn1lfxO2Dhezv_1LNKoke610HtxyfPzD3tsjCKc8Iw/edit?usp=sharing' className='text-2xl mt-[1rem] text-center items-center px-6 py-3 bg-violet-900 font-semibold text-white rounded-md hover:bg-violet-600 hover:text-violet-900 transition-all duration-300' target='blank'>Resume</a>
                </div>
            </div>
            <div className='grid items-center justify-center'>
                <Image
                    width={600}
                    height={600}
                    src={Desarrollador}
                    alt="computer"
                    className='h-[70%] rounded-xl animate-flip-up animate-once' />
            </div>
        </div>

    )
}

export default AboutEn;