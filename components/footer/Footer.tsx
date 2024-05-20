import React from 'react'
import PropsLenguage from '../utils/lenguage'

const Footer = ({ lenguage }: PropsLenguage) => {
    return (
        <div className='min-h-[10vh] bg-white border-t-1 border-t-slate-300 w-full py-8 '>
            <div className='flex flex-col justify-center items-center py-4'>
                <h1 className="text-2xl font-bold text-violet-900">{lenguage === 'Es' ? 'Desarrollado por Lucas Ribotta' : 'Developed by Lucas Ribotta'}</h1>
                <p className='text-lg'>{lenguage === 'Es' ? 'Derechos Reservados © 2024' : 'All Rights Reserved © 2024'} </p>
            </div>
        </div>
    )
}

export default Footer