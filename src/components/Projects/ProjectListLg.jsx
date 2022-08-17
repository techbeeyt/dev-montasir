import React from 'react'
import ziaHallProject from '../../assets/images/zhp.png';

const ProjectListLg = ({title, description}) => {
  return (
    <div className='bg-white rounded-2xl overflow-hidden'>
        <div className='bg-gray-100 p-4 shadow-xl flex flex-col justify-center items-center gap-5'>
            <h1 className='text-2xl text-gray-800 font-semibold'>{title}</h1>
            <img src={ziaHallProject} alt="Zia Hall Project" />
        </div>
        <div className='w-full flex justify-center items-center mt-4 flex-col rounded-lg p-4'>
            <h2 className='text-xl text-gray-700 font-semibold'>Description</h2>
            <p className='text-black font-Nunito-light'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectListLg
