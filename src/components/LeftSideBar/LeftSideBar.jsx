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
        }} className='text-sky-100 text-3xl font-Josefin-Slab-600 cursor-pointer hidden lg:block' 
      to="/">
        devtasir
      </div>
      <div className='flex mt-28 justify-center items-center px-2'>
        <ul className='text-2xl flex flex-col items-center text-slate-300 font-Kanit gap-12'>
          <li onClick={() => {
              refData.current.scrollTo(0, scrollBreakPoints.intro);
            }} className='font-Kanit transition-all duration-300 rounded-md hover:bg-slate-100 hover:text-slate-700 px-2 w-full cursor-pointer'>
            {
              insideViewport === 'intro' ? (
                <>
                <motion.div animate={{x:0}} initial={{x:-100}} className="hidden lg:block text-2xl font-semibold">Introduction</motion.div>
                <motion.div animate={{x:0}} initial={{x:-100}} className="lg:hidden text-2xl font-semibold"><TiInfoLarge /></motion.div>
                </>
              ) : <><div className='hidden lg:block'>Introduction</div><div className='lg:hidden'><TiInfoLarge /></div></>
            }
          </li>
          <li onClick={() => {
              refData.current.scrollTo(0, scrollBreakPoints.skills);
            }} className='font-Kanit transition-all duration-300 rounded-md hover:bg-slate-100 hover:text-slate-700 px-2 w-full cursor-pointer'>
              
            {
              insideViewport === 'skills' ? (
                <>
                <motion.div animate={{x:0}} initial={{x:-100}} className="hidden lg:block text-2xl font-semibold">Skills</motion.div>
                <motion.div animate={{x:0}} initial={{x:-100}} className="lg:hidden text-2xl font-semibold"><GiSkills /></motion.div>
                </>
              ) : <> 
                  <div className='hidden lg:block'>Skills</div>
                  <div className='lg:hidden'><GiSkills /></div>
                </>
            }
          </li>
          <li onClick={() => {
              refData.current.scrollTo(0, scrollBreakPoints.projects);
            }} className='font-Kanit transition-all duration-300 rounded-md hover:bg-slate-100 hover:text-slate-700 px-2 w-full cursor-pointer'>
            
            {
              insideViewport === 'projects' ? (
                <>
                <motion.div animate={{x:0}} initial={{x:-100}} className="hidden lg:block text-2xl font-semibold">Projects</motion.div>
                <motion.div animate={{x:0}} initial={{x:-100}} className="lg:hidden text-2xl font-semibold"><FaProjectDiagram /></motion.div>
                </>
              ) : <><div className='hidden lg:block'>Projects</div><div className='lg:hidden'><FaProjectDiagram /></div></>
            }
          </li>
          <li onClick={() => {
              refData.current.scrollTo(0, scrollBreakPoints.courses);
            }} className='font-Kanit transition-all duration-300 rounded-md hover:bg-slate-100 hover:text-slate-700 px-2 w-full cursor-pointer'>
            
            {
              insideViewport === 'courses' ? (<>
                <motion.div animate={{x:0}} initial={{x:-100}} className="hidden lg:block text-2xl font-semibold">Statistics</motion.div>
                <motion.div animate={{x:0}} initial={{x:-100}} className="lg:hidden text-2xl font-semibold"><ImStatsBars /></motion.div>
                </>
              ) : <><div className='hidden lg:block'>Statistics</div><div className='lg:hidden'><ImStatsBars /></div></>
            }
            
          </li>
          <li onClick={() => {
              refData.current.scrollTo(0, scrollBreakPoints.contact);
            }} className='font-Kanit transition-all duration-300 rounded-md hover:bg-slate-100 hover:text-slate-700 px-2 w-full cursor-pointer'>
              
            {
              insideViewport === 'contact' ? (<>
                <motion.div animate={{x:0}} initial={{x:-100}} className="hidden lg:block text-2xl font-semibold">Contact</motion.div>
                <motion.div animate={{x:0}} initial={{x:-100}} className="lg:hidden text-2xl font-semibold"><HiOutlineMail /></motion.div>
                </>
              ) : <><div className='hidden lg:block'>Contact</div><div className='lg:hidden'><HiOutlineMail /></div></>
            }
            </li>
        </ul>
      </div>
    </>
  )
}

export default LeftSideBar