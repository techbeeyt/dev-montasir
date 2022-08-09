import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux/es/hooks/useSelector';


const LeftSideBar = ({ refData }) => {
  const scrollBreakPoints = useSelector(state => state.AppState.scrollBreakPoints);
  const insideViewport = useSelector(state => state.AppState.insideViewport);
  const [insideVP, setVP] = useState(insideViewport);
  useEffect(() => {
    setVP(insideViewport);
  },[insideViewport])
  return (
    <>
      <Link className='text-gray-300 text-2xl font-Josefin-Slab-600' to="#top">dev.Montasir</Link>
            <div className='flex mt-28 justify-center items-center'>
              <ul className='text-2xl flex flex-col items-center text-slate-300 font-Kanit gap-12'>
                <li onClick={() => {
                    refData.current.scrollTo(0, scrollBreakPoints.intro);
                  }} className='font-Kanit transition-all duration-300 rounded-sm hover:bg-slate-100 hover:text-slate-700 px-2 w-full cursor-pointer'>
                  {
                    insideViewport === 'intro' ? (
                      <motion.div animate={{x:0}} initial={{x:-100}} className="text-2xl font-semibold">Introduction</motion.div>
                    ) : <div>Introduction</div>
                  }
                </li>
                <li onClick={() => {
                    refData.current.scrollTo(0, scrollBreakPoints.skills);
                  }} className='font-Kanit transition-all duration-300 rounded-sm hover:bg-slate-100 hover:text-slate-700 px-2 w-full cursor-pointer'>
                    
                  {
                    insideViewport === 'skills' ? (
                      <motion.div animate={{x:0}} initial={{x:-100}} className="text-2xl font-semibold">Skills</motion.div>
                    ) : <div>Skills</div>
                  }
                </li>
                <li onClick={() => {
                    refData.current.scrollTo(0, scrollBreakPoints.projects);
                  }} className='font-Kanit transition-all duration-300 rounded-sm hover:bg-slate-100 hover:text-slate-700 px-2 w-full cursor-pointer'>
                  
                  {
                    insideViewport === 'projects' ? (
                      <motion.div animate={{x:0}} initial={{x:-100}} className="text-2xl font-semibold">Projects</motion.div>
                    ) : <div>Projects</div>
                  }
                </li>
                <li onClick={() => {
                    refData.current.scrollTo(0, scrollBreakPoints.courses);
                  }} className='font-Kanit transition-all duration-300 rounded-sm hover:bg-slate-100 hover:text-slate-700 px-2 w-full cursor-pointer'>
                  
                  {
                    insideViewport === 'courses' ? (
                      <motion.div animate={{x:0}} initial={{x:-100}} className="text-2xl font-semibold">Courses</motion.div>
                    ) : <div>Courses</div>
                  }
                  
                </li>
                <li onClick={() => {
                    refData.current.scrollTo(0, scrollBreakPoints.contact);
                  }} className='font-Kanit transition-all duration-300 rounded-sm hover:bg-slate-100 hover:text-slate-700 px-2 w-full cursor-pointer'>
                    
                  {
                    insideViewport === 'contact' ? (
                      <motion.div animate={{x:0}} initial={{x:-100}} className="text-2xl font-semibold">Contact</motion.div>
                    ) : <div>Contact</div>
                  }
                  </li>
              </ul>
            </div>
    </>
  )
}

export default LeftSideBar