import Image from 'next/image'
import React from 'react'
import Html from '@/assets/html (1).png'
import Css from '@/assets/css.png'
import JavaScript from '@/assets/js.png'
import ReactLogo from '@/assets/react.png'
import NextJs from '@/assets/next.svg'
import Tailwind from '@/assets/tailwind.svg'
import Node from '@/assets/Node.js_logo.svg'
import MongoDB from '@/assets/MongoDB_Logo_FullColorBlack_RGB.svg'
import TypeScript from '@/assets/Typescript_logo_2020.svg'
import Flutter from '@/assets/dart.png'
import PropsLenguage from '../utils/lenguage'

const Technologies = ({ lenguage }: PropsLenguage) => {

    return (
        <div className='min-h-[30vh] md:min-h-[20vh] flex flex-col px-4 bg-white justify-center items-center rounded-[50px] overflow-hidden  shadow-lg shadow-slate-900' id="technologies">
            <div className="w-[80%] justify-center flex  flex-wrap items-center">
                <h2 className="text-3xl text-violet-900 font-bold">{lenguage === 'Es' ? 'Tecnologías:' : 'Technologies:'}</h2>
                <Image src={Html} alt="Html" title="Html" className="h-[65px] w-[65px] object-scale-down m-auto " />
                <Image src={Css} alt="Css" title="Css" className="h-[65px] w-[65px] object-scale-down m-auto" />
                <Image src={JavaScript} alt="Javascript" title="Javascript" className="h-[65px] w-[65px] object-scale-down m-auto" />
                <Image src={TypeScript} alt="Typescript" title="Typescript" className="h-[65px] w-[65px] object-scale-down m-auto" />
                <Image src={ReactLogo} alt="React" title="React" className="h-[65px] w-[65px] object-scale-down m-auto" />
                <Image src={NextJs} alt="Next" title="Next.js" className="h-[65px] w-[65px] object-scale-down m-auto" />
                <Image src={Flutter} alt="Next" title="Flutter" className="h-[65px] w-[65px] object-scale-down m-auto" />
                <Image src={Tailwind} alt="Tailwind" title="Tailwind" className="h-[65px] w-[65px] object-scale-down m-auto" />
                <Image src={MongoDB} alt="MongoDb" title="Mongodb" className="h-[65px] w-[65px] object-scale-down m-auto" />
                <Image src={Node} alt="NodeJs" title="Node" className="h-[65px] w-[65px] object-scale-down m-auto" />
            </div>
        </div>
    )
}

export default Technologies