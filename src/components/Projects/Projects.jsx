import React from 'react';
import ProjectListLg from './ProjectListLg';

const Projects = () => {
  return (
    <div className='h-screen pt-4 overflow-y-auto scrollbar scrollbar-track-transparent scrollbar-thumb-indigo-500'>
        <div className='flex flex-col bg-blue-300 bg-opacity-20 p-4 rounded-lg shadow-xl backdrop-blur-lg gap-6'>
            <ProjectListLg 
                title="1. Zia Hall Project" 
                description="This is great thing about our site that it is fully responsive and no frameworks has been used to develop this site. Pure CSS and Plain HTML was enough to make this project . Though this project is not advanced one but I love this project because this was the first website i designed and developed using javascript."
            />

            <ProjectListLg 
                title="1. Zia Hall Project" 
                description="This is great thing about our site that it is fully responsive and no frameworks has been used to develop this site. Pure CSS and Plain HTML was enough to make this project . Though this project is not advanced one but I love this project because this was the first website i designed and developed using javascript."
            />

            <div className='h-screen'>
                <h1 className='text-white text-2xl'>Developers Fair - A developers bloging site</h1>
            </div>

            <div className='h-screen'>
                <h1 className='text-white text-2xl'>Developers Fair - A developers bloging site</h1>
            </div>
        </div>
    </div>
  )
}

export default Projects