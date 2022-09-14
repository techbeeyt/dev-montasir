import React from 'react';
import ProjectListLg from './ProjectListLg';

const Projects = () => {
  return (
    <>
    <div className='h-screen overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-600'>
    <div className='lg:hidden flex justify-center items-center bg-blue-500 bg-opacity-20 backdrop-blur-md p-2 text-slate-100 text-xl font-semibold sticky top-0 right-0 z-30'>My Projects</div>
        <div className='flex flex-wrap p-4 lg:pt-4 lg:pr-4 lg:pb-4 rounded-lg shadow-xl gap-6'>
            <ProjectListLg 
                title="1. Zia Hall Project" 
                description="This is great thing about our site that it is fully responsive and no frameworks has been used to develop this site. Pure CSS and Plain HTML was enough to make this project . Though this project is not advanced one but I love this project because this was the first website i designed and developed using javascript."
            />

            <ProjectListLg 
                title="1. Zia Hall Project" 
                description="This is great thing about our site that it is fully responsive and no frameworks has been used to develop this site. Pure CSS and Plain HTML was enough to make this project . Though this project is not advanced one but I love this project because this was the first website i designed and developed using javascript."
            />
        </div>
    </div>
    </>
  )
}

export default Projects