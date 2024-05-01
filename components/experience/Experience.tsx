import React from 'react'
import experiences from './data';

const Experience = () => {


    return (
        <div className="flex flex-col items-center " id='experience'>
            <h2 className="text-3xl font-bold text-violet-900 mb-4">Experiencia laboral</h2>
            <div className='py-4 flex flex-col md:flex-row md:flex-wrap justify-center gap-12 md:gap-20'>
                {experiences.map((experience, index) => (
                    <div key={index} className="mb-4">
                        <p className="text-gray-500">{experience.date}</p>
                        <h3 className="text-xl text-gray-700 font-bold">{experience.company}</h3>
                        <h3 className="text-xl font-bold">{experience.position}</h3>
                        <ul className="list-disc list-inside mt-2">
                            {experience.technologies.map((tecnología, index) => (
                                <li key={index} className="text-lg text-gray-700">{tecnología}</li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Experience