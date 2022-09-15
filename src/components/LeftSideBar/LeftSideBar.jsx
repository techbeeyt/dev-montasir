import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import logo from '../../assets/images/devtasir.png';
import { TiInfoLarge } from 'react-icons/ti';
import { FaProjectDiagram } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { ImStatsBars } from 'react-icons/im';
import { HiOutlineMail } from 'react-icons/hi';
import mobilelogo from '../../assets/images/mlogo.png';


const LeftSideBar = ({ refData }) => {
  const scrollBreakPoints = useSelector(state => state.AppState.scrollBreakPoints);
  const insideViewport = useSelector(state => state.AppState.insideViewport);
  const [insideVP, setVP] = useState(insideViewport);
  useEffect(() => {
    setVP(insideViewport);
  },[insideViewport])
  return (
    <>
      <div onClick={() => {
        refData.current.scrollTo(0, scrollBreakPoints.intro);
        }} className='text-sky-100 text-3xl font-Josefin-Slab-600 cursor-pointer flex justify-center items-center lg:gap-2' 
      to="/">
        <div className='w-14 lg:w-10 mt-4 lg:mt-0'><img src={mobilelogo} alt="mobilelogo" /> </div>
        <div className='hidden lg:block'>devtasir</div>
      </div>
      <div className='flex mt-28 justify-center items-center px-1 lg:px-2'>
        <ul className='text-2xl flex flex-col text-slate-100 items-center font-Kanit gap-6 lg:gap-12'>
          <li onClick={() => {
              refData.current.scrollTo(0, scrollBreakPoints.intro);
            }} className='font-Kanit transition-all duration-300 rounded-md lg:hover:bg-slate-100 lg:hover:text-slate-700 p-2 w-full cursor-pointer'>
            {
              insideViewport === 'intro' ? (
                <>
                <motion.div animate={{x:0}} initial={{x:-100}} className="hidden lg:block text-2xl font-semibold">Introduction</motion.div>
                <motion.div animate={{x:0}} initial={{x:-100}} className="lg:hidden text-2xl font-semibold text-blue-700 bg-slate-200 p-2 rounded-md"><TiInfoLarge /></motion.div>
                </>
              ) : <><div className='hidden lg:block text-slate-200'>Introduction</div><div className='lg:hidden text-slate-200 p-2 rounded-md'><TiInfoLarge /></div></>
            }
          </li>
          <li onClick={() => {
              refData.current.scrollTo(0, scrollBreakPoints.skills);
            }} className='font-Kanit transition-all duration-300 rounded-md lg:hover:bg-slate-100 lg:hover:text-slate-700 px-2 w-full cursor-pointer'>
              
            {
              insideViewport === 'skills' ? (
                <>
                <motion.div animate={{x:0}} initial={{x:-100}} className="hidden lg:block text-2xl font-semibold">Skills</motion.div>
                <motion.div animate={{x:0}} initial={{x:-100}} className="lg:hidden text-2xl font-semibold bg-slate-100 text-blue-700 p-2 rounded-md"><GiSkills /></motion.div>
                </>
              ) : <> 
                  <div className='hidden lg:block'>Skills</div>
                  <div className='lg:hidden text-slate-200 p-2 rounded-md'><GiSkills /></div>
                </>
            }
          </li>
          <li onClick={() => {
              refData.current.scrollTo(0, scrollBreakPoints.projects);
            }} className='font-Kanit transition-all duration-300 rounded-md lg:hover:bg-slate-100 lg:hover:text-slate-700 px-2 w-full cursor-pointer'>
            
            {
              insideViewport === 'projects' ? (
                <>
                <motion.div animate={{x:0}} initial={{x:-100}} className="hidden lg:block text-2xl font-semibold">Projects</motion.div>
                <motion.div animate={{x:0}} initial={{x:-100}} className="lg:hidden text-2xl font-semibold bg-slate-100 text-blue-700 p-2 rounded-md"><FaProjectDiagram /></motion.div>
                </>
              ) : <><div className='hidden lg:block'>Projects</div><div className='lg:hidden text-slate-200 p-2 rounded-md'><FaProjectDiagram /></div></>
            }
          </li>
          <li onClick={() => {
              refData.current.scrollTo(0, scrollBreakPoints.courses);
            }} className='font-Kanit transition-all duration-300 rounded-md lg:hover:bg-slate-100 lg:hover:text-slate-700 px-2 w-full cursor-pointer'>
            
            {
              insideViewport === 'courses' ? (<>
                <motion.div animate={{x:0}} initial={{x:-100}} className="hidden lg:block text-2xl font-semibold">Statistics</motion.div>
                <motion.div animate={{x:0}} initial={{x:-100}} className="lg:hidden text-2xl font-semibold bg-slate-100 text-blue-700 p-2 rounded-md"><ImStatsBars /></motion.div>
                </>
              ) : <><div className='hidden lg:block'>Statistics</div><div className='lg:hidden text-slate-200 p-2 rounded-md'><ImStatsBars /></div></>
            }
            
          </li>
          <li onClick={() => {
              refData.current.scrollTo(0, scrollBreakPoints.contact);
            }} className='font-Kanit transition-all duration-300 rounded-md lg:hover:bg-slate-100 lg:hover:text-slate-700 px-2 w-full cursor-pointer'>
              
            {
              insideViewport === 'contact' ? (<>
                <motion.div animate={{x:0}} initial={{x:-100}} className="hidden lg:block text-2xl font-semibold">Contact</motion.div>
                <motion.div animate={{x:0}} initial={{x:-100}} className="lg:hidden text-2xl font-semibold bg-slate-100 text-blue-700 p-2 rounded-md"><HiOutlineMail /></motion.div>
                </>
              ) : <><div className='hidden lg:block'>Contact</div><div className='lg:hidden text-slate-200 p-2 rounded-md'><HiOutlineMail /></div></>
            }
            </li>
            <li className='lg:hidden flex-grow h-30 w-2.5 pl-1'>
              <div className='flex-grow w-1 rounded-sm bg-blue-500 text-blue-500 h-30 pb-96'></div>
            </li>
        </ul>
      </div>
    </>
  )
}

export default LeftSideBar