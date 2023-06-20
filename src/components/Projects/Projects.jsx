import React from 'react';
import ProjectListLg from './ProjectListLg';
import Projects_data from './../../assets/data/projects.data';

const Projects = () => {
  return (
    <>
    <div className='h-screen relative overflow-y-auto scrollbar-rounded pb-14 lg:pb-0'>
    <div className='lg:hidden flex justify-center items-center bg-blue-500 bg-opacity-20 backdrop-blur-md p-2 text-slate-100 text-xl font-semibold m-2 ml-0 rounded-md sticky top-0 z-20 shadow-md'>My Projects</div>
        <div className='flex flex-wrap p-4 pl-2 lg:p-4 rounded-lg shadow-xl gap-6'>
            {
              Projects_data.map((project, index) => {
                return <ProjectListLg key={index} project={project} />
              })

            }
        </div>
    </div>
    </>
  )
}

export default Projects