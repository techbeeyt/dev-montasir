import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const RightSideBar = () => {
  const insideViewport = useSelector(state => state.AppState.insideViewport);
  return (
    <div className='h-screen flex flex-col justify-center items-end w-full p-4'>
        {
          insideViewport === 'intro' ? (
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}} 
            transition={{duration:0.5, delay: 0.5}} className='w-5/6 flex flex-col justify-center items-center bg-blue-400 bg-opacity-20 rounded-lg h-full'>
              <div className='relative w-40 h-40 bg-blue-700 rounded-full overflow-y-hidden group outline-blue-700 outline-4 outline hover:outline-blue-600'>
                <img src={'https://raw.githubusercontent.com/techbeeyt/data/main/montasir.jpg'} alt="Montasir" />
                <div className='top-0 absolute z-30 bg-gradient-to-tr from-stone-800 to-blue-700 opacity-25 hover:opacity-0 transition-all duration-300 w-40 h-40'></div>
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