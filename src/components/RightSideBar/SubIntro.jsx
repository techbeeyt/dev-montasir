import React from 'react'
import ToolTip from '../ToolTip/ToolTip';
import { motion } from 'framer-motion';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { FaUniversity } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import Quote from '../Intro/Quote';
import Links from '../../assets/data/links.data';
import ProfilePhoto from '../../assets/images/Montasir-Mahmud.webp';

const SubIntro = () => {
  return (
    <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}} 
            transition={{duration:0.5, delay: 0.3}} className='flex flex-col justify-start items-center bg-blue-500 bg-opacity-20 rounded-lg h-full pt-10'>
                <div className='absolute w-full'>
                    <Quote />
                </div>
              <div className='relative w-32 h-32 bg-blue-700 rounded-full overflow-y-hidden group outline-blue-700 outline-4 outline hover:outline-blue-600'>
                <img src={ProfilePhoto} alt="Montasir" />
                <div className='top-0 absolute z-30 bg-gradient-to-tr from-stone-800 to-blue-700 opacity-25 hover:opacity-0 transition-all duration-300 w-32 h-32'></div>
              </div>
              <h1 className='mt-4 px-4 text-white font-Nunito-regular'>About Me</h1>
              <p className='px-4 text-white font-Nunito-light text-center'>
                I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. 
              </p>
              <h1 className='mt-6 px-4 text-white font-Nunito-regular'>Education</h1>
              <div className='flex flex-col px-4 text-white'>
                <div className='flex justify-start items-start gap-2'>
                  <FaGraduationCap size={24} /> 
                  <div>
                    <span className='font-Nunito-light'>Studies</span>
                    <span className='font-Nunito-regular'> Computer Science and Engineering</span>
                  </div>
                </div>
                <div className='flex justify-start items-start gap-2 font-Nunito-light'>
                  <FaUniversity size={28} /> 
                  <div>
                    <span className='font-Nunito-light'>Goes to</span> <span className='font-Nunito-regular'>Rajshahi University of Engineering and Technology</span>
                  </div>
                </div>
              </div>
              <h1 className='mt-auto px-4 text-white font-Nunito-regular'>Find out more on</h1>
              <div className='flex gap-6 mb-4 mt-2'>
                <ToolTip title='Github'>
                  <button className='text-gray-100' onClick={() => window.open(Links.github, '_blank')}><BsGithub size={24} /></button>
                </ToolTip>
                <ToolTip title='Linkedin'>
                  <button className='text-gray-100' onClick={() => window.open(Links.linkedin, '_blank')}><BsLinkedin size={22} /></button>
                </ToolTip>
                <ToolTip title='Facebook'>
                  <button className='text-gray-100' onClick={() => window.open(Links.facebook, '_blank')}><BsFacebook size={23} /></button>
                </ToolTip>
                <ToolTip title='Twitter'>
                  <button className='text-gray-100' onClick={() => window.open(Links.twitter, '_blank')}><AiFillTwitterCircle size={28} /></button>
                </ToolTip>
              </div>
            </motion.div>
  )
}

export default SubIntro