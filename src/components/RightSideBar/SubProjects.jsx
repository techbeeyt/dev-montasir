import React from 'react';
import { motion } from 'framer-motion';

const SubProjects = () => {
  return (
    <motion.div animate={{opacity: 1}} transition={{duration:0.3, delay: 0.3}} initial={{opacity: 0}} className="w-full h-full bg-blue-300 bg-opacity-20 p-4 backdrop-blur-lg rounded-lg shadow-2xl">
        Hello
    </motion.div>
  )
}

export default SubProjects
