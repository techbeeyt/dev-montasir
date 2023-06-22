import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai';
import { SiNetlify } from 'react-icons/si';
import { Link } from 'react-router-dom';
import BtnPrimary from '../Buttons/BtnPrimary';
import BtnSecondary from '../Buttons/BtnSecondary';
import { HiExternalLink } from 'react-icons/hi';

const ProjectListLg = ({ project }) => {
  if(true) {
    return (
      <div className='h-[180px] md:h-[200px] rounded-3xl overflow-hidden relative group'>
        <div className='rounded-3xl absolute bg-gradient-to-tr from-violet-800 to-rose-700 flex flex-col justify-center items-center h-full w-full opacity-0 group-hover:opacity-100 -translate-x-1/2 gap-2 group-hover:z-10 group-hover:translate-x-0 transition-all duration-[600] ease-linear'>
          <h1 className='text-xl lg:text-2xl text-gray-200 font-bold font-Kanit'>{project.name}</h1>
          <a href={project.live_link} target='_blank' rel='noreferrer' className='bg-indigo-600 text-white rounded-full px-3 md:px-5 py-1.5 md:py-3 flex justify-center items-center gap-2'>View Website <HiExternalLink /></a>
        </div>
        <div className='absolute h-full w-full rounded-3xl overflow-hidden'>
          <div className='absolute h-full w-full'>
            <img src={project.image} alt={project.name} className='w-full h-full object-fill' />
          </div>
          <div data-identity="Container" className='absolute shadow-lg border-4 border-gray-300 bg-blue-500/90 md:bg-blue-500 backdrop-blur-sm md:backdrop-blur-none h-[300px] w-full flex justify-end items-center text-white -rotate-[60deg] translate-x-[140px] md:translate-x-[150px] transition-all duration-[600] ease-in group-hover:translate-x-full'></div>
          <h1 className='text-xl md:text-3xl font-bold absolute top-2 right-6 text-white transition-all duration-[600] ease-in group-hover:translate-x-full'>{project.id}.</h1>
          <h1 className='font-Kanit text-base md:text-2xl font-bold absolute top-8 md:top-10 right-2 text-white transition-all duration-[600] ease-in group-hover:translate-x-full'>{project.name}</h1>
          <p className='w-[40%] drop-shadow-md font-Kanit text-sm absolute top-14 md:top-[75px] text-right right-2 text-white transition-all duration-[600] ease-in group-hover:translate-x-full leading-[13px]'>{project.description}</p>
        </div>
      </div>
    );
  }
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
