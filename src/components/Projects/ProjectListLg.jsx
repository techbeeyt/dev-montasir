import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai';
import { SiNetlify } from 'react-icons/si';
import ziaHallProject from '../../assets/images/zhp.png';
import BtnPrimary from '../Buttons/BtnPrimary';
import BtnSecondary from '../Buttons/BtnSecondary';

const ProjectListLg = ({title, description, live_link, github_link}) => {
  return (
    <div className='rounded-2xl overflow-hidden backdrop-blur-lg bg-blue-500 bg-opacity-20'>
        <div className='backdrop-blur-sm p-4 shadow-xl flex flex-col justify-center items-center gap-5'>
            <h1 className='text-2xl text-gray-200 font-semibold'>{title}</h1>
            <img src={ziaHallProject} alt="Zia Hall Project" />
        </div>
        <div className='w-full flex justify-center items-center mt-4 flex-col p-4'>
            <h2 className='text-xl text-gray-200 font-semibold'>Description</h2>
            <p className='text-white font-Nunito-light'>{description}</p>
        </div>
        <div className='flex justify-center items-center py-4 gap-4'>
          <div onClick={() => {
            console.log("Hello");
          }}>
            <BtnPrimary><SiNetlify /> Live Demo</BtnPrimary>
          </div>
          <BtnSecondary><AiOutlineGithub /> Github Repo</BtnSecondary>
        </div>
    </div>
  )
}

export default ProjectListLg
