import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <div className='intro scroll-Section'>
        <motion.div animate={{y:0}} initial={{y:300}} id='intro' className='h-screen px-4 flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <motion.span animate={{
                    scale: 1,
                }} initial={{scale: 0.8}} className='font-Josefin-Slab text-6xl text-slate-100'>Hey, I'm Montasir Mahmud</motion.span>
                <motion.span animate={{
                    scale: 1,
                }} initial={{scale: 0.8}} className='font-Josefin-Slab text-2xl text-slate-100'>Passionate Web Developer</motion.span>
            </div>
        </motion.div>
    </div>
  )
}

export default Intro