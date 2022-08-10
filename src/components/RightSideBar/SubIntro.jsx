import React from 'react'
import ToolTip from '../ToolTip/ToolTip';
import { motion } from 'framer-motion';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

const SubIntro = () => {
  return (
    <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}} 
            transition={{duration:0.5, delay: 0.5}} className='w-5/6 flex flex-col justify-start items-center bg-blue-400 bg-opacity-20 rounded-lg h-full pt-10'>
              <div className='relative w-40 h-40 bg-blue-700 rounded-full overflow-y-hidden group outline-blue-700 outline-4 outline hover:outline-blue-600'>
                <img src={'https://raw.githubusercontent.com/techbeeyt/data/main/montasir.jpg'} alt="Montasir" />
                <div className='top-0 absolute z-30 bg-gradient-to-tr from-stone-800 to-blue-700 opacity-25 hover:opacity-0 transition-all duration-300 w-40 h-40'></div>
              </div>
              <h1 className='mt-4 px-4 text-white font-Nunito-regular'>About Me</h1>
              <p className='px-4 text-white font-Nunito-light whitespace-normal'>
              I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?
              </p>
              <h1 className='mt-6 px-4 text-white font-Nunito-regular'>Find out more on</h1>
              <div className='flex gap-6 mb-4 mt-2'>
                <ToolTip title='Github'>
                  <button className='text-gray-100'><BsGithub size={24} /></button>
                </ToolTip>
                <ToolTip title='Linkedin'>
                  <button className='text-gray-100'><BsLinkedin size={22} /></button>
                </ToolTip>
                <ToolTip title='Facebook'>
                  <button className='text-gray-100'><BsFacebook size={23} /></button>
                </ToolTip>
                <ToolTip title='Twitter'>
                  <button className='text-gray-100'><AiFillTwitterCircle size={28} /></button>
                </ToolTip>
              </div>
            </motion.div>
  )
}

export default SubIntro