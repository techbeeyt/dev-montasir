import React from 'react';
import ProjectListLg from './ProjectListLg';

const Projects = () => {
  return (
    <div className='h-screen overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-600'>
        <div className='flex flex-wrap pt-4 pr-4 pb-4 rounded-lg shadow-xl gap-6'>
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
  )
}

export default Projects