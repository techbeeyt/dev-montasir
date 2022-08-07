import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation = () => {
  return (
    <>
        <div className='h-screen w-screen bg-gradient-animated flex justify-center items-center overflow-hidden'>
            <motion.div className='bg-red-800'
            animate={{height:800, width: 2000}} 
            initial={{height:0, width: 0}} whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            >
              
            </motion.div>
        </div>
    </>
  )
}

export default LoadingAnimation
