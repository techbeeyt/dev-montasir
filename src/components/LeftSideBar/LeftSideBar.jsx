import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux/es/hooks/useSelector';


const LeftSideBar = ({ refData }) => {
  const scrollBreakPoints = useSelector(state => state.AppState.scrollBreakPoints);
  return (
    <>
      <Link className='text-gray-300 text-2xl font-Josefin-Slab-600' to="#top">dev.Montasir</Link>
            <div className='flex mt-28 justify-center items-center'>
              <ul className='text-2xl flex flex-col items-center text-slate-300 font-Kanit gap-12'>
                <li onClick={() => {
                    refData.current.scrollTo(0, scrollBreakPoints.intro);
                  }} className='font-Kanit transition-all duration-300 rounded-sm hover:bg-slate-100 hover:text-slate-700 px-2 w-full cursor-pointer'>
                  <motion.div animate={{x:0}} initial={{x:-100}}>Introduction</motion.div>
                </li>
                <li onClick={() => {
                    refData.current.scrollTo(0, scrollBreakPoints.skills);
                  }} className='font-Kanit transition-all duration-300 rounded-sm hover:bg-slate-100 hover:text-slate-700 px-2 w-full cursor-pointer'>
                 Skills
                </li>
                <li onClick={() => {
                    refData.current.scrollTo(0, scrollBreakPoints.projects);
                  }} className='font-Kanit transition-all duration-300 rounded-sm hover:bg-slate-100 hover:text-slate-700 px-2 w-full cursor-pointer'>
                  Projects
                </li>
                <li onClick={() => {
                    refData.current.scrollTo(0, scrollBreakPoints.courses);
                  }} className='font-Kanit transition-all duration-300 rounded-sm hover:bg-slate-100 hover:text-slate-700 px-2 w-full cursor-pointer'>
                  Lern with me
                  
                </li>
                <li onClick={() => {
                    refData.current.scrollTo(0, scrollBreakPoints.contact);
                  }} className='font-Kanit transition-all duration-300 rounded-sm hover:bg-slate-100 hover:text-slate-700 px-2 w-full cursor-pointer'>Contact</li>
              </ul>
            </div>
    </>
  )
}

export default LeftSideBar