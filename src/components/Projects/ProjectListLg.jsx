import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai';
import { SiNetlify } from 'react-icons/si';
import { Link } from 'react-router-dom';
import BtnPrimary from '../Buttons/BtnPrimary';
import BtnSecondary from '../Buttons/BtnSecondary';

const ProjectListLg = ({ project }) => {
  return (
    <div className='rounded-lg lg:rounded-2xl overflow-hidden backdrop-blur-lg bg-blue-500 bg-opacity-20'>
        <div className='backdrop-blur-sm p-4 shadow-xl flex flex-col justify-center items-center gap-5'>
            <h1 className='text-xl lg:text-2xl text-gray-200 font-semibold'>{project.name}</h1>
            <img src={project.image} alt="Zia Hall Project" />
        </div>
        <div className='w-full flex justify-center items-center mt-4 flex-col p-4'>
            <h2 className='text-xl text-gray-200 font-semibold hidden lg:block'>Description</h2>
            <p className='text-white font-Nunito-light hidden lg:block'>{project.description}</p>
            <Link to={`/projects/${project.id}`} className='rounded-md text-slate-200 px-2 py-1 font-Nunito-light'>See Details</Link>
        </div>
        <div className='flex justify-center items-center py-4 gap-4'>
          <div onClick={() => {
            console.log("Hello");
          }}>
            <BtnPrimary><SiNetlify /> Live</BtnPrimary>
          </div>
          <BtnSecondary><AiOutlineGithub /> Github</BtnSecondary>
        </div>
    </div>
  )
}

export default ProjectListLg
