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
import Flutter from '@/assets/flutter.png'
import Dart from '@/assets/dart.png'
import PostgreSQL from '@/assets/postgrees.png'
import PropsLenguage from '../utils/lenguage'

const Technologies = ({ lenguage }: PropsLenguage) => {

    return (
        <div className='min-h-[35vh] md:min-h-[20vh] flex flex-col px-4 bg-white justify-center items-center rounded-[50px] overflow-hidden shadow-lg shadow-slate-900' id="technologies">
            <div className="w-[80%] justify-center flex flex-wrap items-center">
                <h2 className="text-3xl text-violet-900 font-bold">{lenguage === 'Es' ? 'Tecnologías:' : 'Technologies:'}</h2>

                <Image src={JavaScript} alt="JavaScript" title="JavaScript" className="h-[65px] w-[65px] object-scale-down m-auto" />
                <Image src={TypeScript} alt="TypeScript" title="TypeScript" className="h-[65px] w-[65px] object-scale-down m-auto" />
                <Image src={Dart} alt="Dart" title="Dart" className="h-[65px] w-[65px] object-scale-down m-auto" />
                <Image src={Html} alt="HTML" title="HTML" className="h-[65px] w-[65px] object-scale-down m-auto" />
                <Image src={Css} alt="CSS" title="CSS" className="h-[65px] w-[65px] object-scale-down m-auto" />
                <Image src={ReactLogo} alt="React" title="React" className="h-[65px] w-[65px] object-scale-down m-auto" />
                <Image src={NextJs} alt="Next.js" title="Next.js" className="h-[65px] w-[65px] object-scale-down m-auto" />
                <Image src={Flutter} alt="Flutter" title="Flutter" className="h-[65px] w-[65px] object-scale-down m-auto" />
                <Image src={Tailwind} alt="Tailwind CSS" title="Tailwind CSS" className="h-[65px] w-[65px] object-scale-down m-auto" />
                <Image src={Node} alt="Node.js" title="Node.js" className="h-[65px] w-[65px] object-scale-down m-auto" />
                <Image src={MongoDB} alt="MongoDB" title="MongoDB" className="h-[65px] w-[65px] object-scale-down m-auto" />
                <Image src={PostgreSQL} alt="PostgreSQL" title="PostgreSQL" className="h-[65px] w-[65px] object-scale-down m-auto" />


            </div>
        </div>

    )
}

export default Technologies