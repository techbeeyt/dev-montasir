import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const RightSideBar = () => {
  const insideViewport = useSelector(state => state.AppState.insideViewport);
  const [toShow, setToShow] = useState('intro');
  useEffect(() => {
    setToShow(insideViewport);
  }, [insideViewport])
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        {
          toShow === 'intro' ? (
            <motion.div animate={{y:0, scaleY: 1.0}} initial={{y:200, scaleY:2}} className='relative w-60 h-60 bg-slate-700 rounded-full overflow-y-hidden group outline-zinc-800 outline-4 outline hover:outline-gray-600'>
              <motion.img animate={{y:0}} initial={{y:-100}} src={'https://raw.githubusercontent.com/techbeeyt/data/main/montasir.jpg'} alt="Montasir" />
              <div className='top-0 absolute z-30 bg-zinc-600 bg-opacity-20 hover:bg-opacity-0 transition-all duration-300 h-60 w-60'></div>
            </motion.div>
          ) : (
            null
          )
        }
        
        {
          toShow === 'contact' ? (
            <div className='text-white text-lg'>
              COntact With Me
            </div>
          ) : null
        }
    </div>
  )
}

export default RightSideBar