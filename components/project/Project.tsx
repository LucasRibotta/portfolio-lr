import React from 'react'
import { projects } from './data';
import CardProject from './Card';
import PropsLenguage from '../utils/lenguage';

const Project = ({ lenguage }: PropsLenguage) => {
    return (
        <div className='flex flex-col items-center py-4' id='project'>
            <h2 className='text-3xl font-bold text-violet-900 mb-4'>Proyectos</h2>
            <div className='py-4 flex flex-col md:flex-row md:flex-wrap justify-center gap-8'>
                {projects?.map((el) =>
                    <CardProject
                        key={el.id}
                        tittle={el.title}
                        description={lenguage === 'Es' ? el.description : el.descriptionEn}
                        image={el.image}
                        techStack={el.techStack}
                        url={el.page}
                        code={el.code}
                    />
                )}
            </div>
        </div>
    )
}

export default Project