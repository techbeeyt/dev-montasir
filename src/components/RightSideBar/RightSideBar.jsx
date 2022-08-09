import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const RightSideBar = () => {
  const insideViewport = useSelector(state => state.AppState.insideViewport);
  return (
    <div className='h-screen flex flex-col justify-start items-center py-4'>
        {
          insideViewport === 'intro' ? (
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}} 
            transition={{duration:0.5, delay: 0.5}} classNamE='flex flex-col justify-start items-start'>
              <div className='relative w-60 h-60 bg-slate-700 rounded-full overflow-y-hidden group outline-zinc-800 outline-4 outline hover:outline-gray-600'>
                <img src={'https://raw.githubusercontent.com/techbeeyt/data/main/montasir.jpg'} alt="Montasir" />
                <div className='top-0 absolute z-30 bg-zinc-600 bg-opacity-20 hover:bg-opacity-0 transition-all duration-300 h-60 w-60'></div>
              </div>
              <h1 className='text-zinc-100 fle'>Passionate Web Developer</h1>
            </motion.div>
          ) : (
            null
          )
        }

        {
          insideViewport === 'skills' ? (
            <motion.div animate={{opacity: 1}} transition={{duration:0.5, delay: 0.5}} initial={{opacity: 0}} className=''>
              <div className='bg-slate-400 h-56 p-10'>Im A very Good Boy</div>
            </motion.div>
          ) : null
        }

        {
          insideViewport === 'projects' ? (
            <motion.div animate={{opacity: 1}} transition={{duration:0.5, delay: 0.5}} initial={{opacity: 0}} className=''>
              <div className='bg-slate-400 h-56 p-10'>Im A very Good Boy</div>
            </motion.div>
          ) : null
        }

        {
          insideViewport === 'courses' ? (
            <motion.div animate={{opacity: 1}} transition={{duration:0.5, delay: 0.5}} initial={{opacity: 0}} className=''>
              <div className='bg-slate-400 h-56 p-10'>Im A very Good Boy</div>
            </motion.div>
          ) : null
        }
        
        {
          insideViewport === 'contact' ? (
            <motion.div animate={{opacity: 1}} transition={{duration:0.5, delay: 0.5}} initial={{opacity: 0}} className=''>
              <div className='bg-slate-400 h-56 p-10'>Im A very Good Boy</div>
            </motion.div>
          ) : null
        }
    </div>
  )
}

export default RightSideBar