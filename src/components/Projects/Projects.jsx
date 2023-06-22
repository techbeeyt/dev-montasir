import React from 'react';
import ProjectListLg from './ProjectListLg';
import Projects_data from './../../assets/data/projects.data';

const Projects = () => {
  return (
    <>
    <div className='h-screen relative overflow-y-auto scrollbar-rounded pb-14 pr-4 lg:pb-0 '>
      <div className='lg:hidden flex justify-center items-center text-slate-100 text-xl font-semibold rounded-md sticky top-0 z-20 shadow-md my-4'>My Projects</div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-0 md:p-4'>
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