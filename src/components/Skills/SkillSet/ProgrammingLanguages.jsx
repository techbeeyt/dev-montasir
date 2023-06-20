import cLogo from '../../../assets/icons/logo-cprog.png';
import cppLogo from '../../../assets/icons/logo-cpp.png';
import pythonLogo from '../../../assets/icons/logo-python.png';
import jsLogo from '../../../assets/icons/logo-js.png'
import nodejsLogo from '../../../assets/icons/logo-nodejs.png'
import tsLogo from '../../../assets/icons/logo-ts.png';
import { motion } from 'framer-motion';
const ProgrammingLanguages = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration:0.5}} >
      <div className="text-lg lg:text-xl text-slate-200 font-semibold mb-2 lg:mb-5">@Programming Languages</div>
        <div className="flex justify-start items-center py-2 gap-2">
          <div className="w-6 h-6 flex justify-center items-center rounded-full">
            <img src={cLogo} alt="" />
          </div>
          <span className="text-slate-200 font-Nunito-light">C</span>
        </div>
        <div className="flex justify-start items-center py-2 gap-2">
          <div className="w-6 h-6 flex justify-center items-center rounded-full">
            <img src={cppLogo} alt="" />
          </div>
          <span className="text-slate-200 font-Nunito-light">C++ </span>
        </div>
        <div className="flex justify-start items-center py-2 gap-2">
          <div className="bg-yellow-500 w-6 h-6 p-1 flex justify-center items-center rounded-full">
            <img src={jsLogo} alt="" />
          </div>
          <span className="text-slate-200 font-Nunito-light">Javascript (ES6) </span>
        </div>
          
        <div className="flex justify-start items-center py-2 gap-2">
          <div className="bg-transparent w-6 h-6 flex justify-center items-center rounded-full">
            <img src={nodejsLogo} alt="" />
          </div>
          <span className="text-slate-200 font-Nunito-light">Node js</span>
        </div>
        <div className="flex justify-start items-center py-2 gap-2">
          <div className="w-6 h-6 flex justify-center items-center rounded-full overflow-hidden">
            <img src={tsLogo} alt="" />
          </div>
          <span className="text-slate-200 font-Nunito-light">Typescript</span>
        </div>
        <div className="flex justify-start items-center py-2 gap-2">
          <div className="bg-transparent w-6 h-6 flex justify-center items-center rounded-full">
            <img src={pythonLogo} alt="" />
          </div>
          <span className="text-slate-200 font-Nunito-light">Python</span>
        </div>
    </motion.div>
  )
}

export default ProgrammingLanguages
