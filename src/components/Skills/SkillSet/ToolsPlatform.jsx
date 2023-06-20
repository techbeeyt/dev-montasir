import nextLogo from '../../../assets/icons/logo-nextjs.png';
import reactLogo from '../../../assets/icons/logo-react.png';
import reduxLogo from '../../../assets/icons/logo-redux.png';
import { motion } from 'framer-motion';
const ToolsPlatform = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration:0.5}} >
      <div className="text-lg lg:text-xl text-slate-200 font-semibold mb-2 lg:mb-5">@UI Frameworks</div>
        <div className="flex justify-start items-center py-2 gap-2">
          <div className="bg-slate-200 w-6 h-6 flex justify-center items-center rounded-full">
            <img src={nextLogo} alt="Next.JS" />
          </div>
          <span className="text-slate-200 font-Nunito-light">Tailwind CSS</span>
        </div>
        <div className="flex justify-start items-center py-2 gap-2">
          <div className="w-6 h-6 flex justify-center items-center rounded-full">
            <img src={reactLogo} alt="React JS" />
          </div>
          <span className="text-slate-200 font-Nunito-light">Bootsrap 5</span>
        </div>
          
        <div className="flex justify-start items-center py-2 gap-2">
          <div className="bg-transparent w-6 h-6 flex justify-center items-center rounded-full">
            <img src={reduxLogo} alt="Redux" />
          </div>
          <span className="text-slate-200 font-Nunito-light">Daisy UI</span>
        </div>

        <div className="flex justify-start items-center py-2 gap-2">
          <div className="bg-transparent w-6 h-6 flex justify-center items-center rounded-full">
            <img src={reduxLogo} alt="Redux" />
          </div>
          <span className="text-slate-200 font-Nunito-light">Material UI</span>
        </div>

        <div className="flex justify-start items-center py-2 gap-2">
          <div className="bg-transparent w-6 h-6 flex justify-center items-center rounded-full">
            <img src={reduxLogo} alt="Redux" />
          </div>
          <span className="text-slate-200 font-Nunito-light">Chart</span>
        </div>

        <div className="flex justify-start items-center py-2 gap-2">
          <div className="bg-transparent w-6 h-6 flex justify-center items-center rounded-full">
            <img src={reduxLogo} alt="Redux" />
          </div>
          <span className="text-slate-200 font-Nunito-light">Three JS</span>
        </div>
    </motion.div>
  )
}

export default ToolsPlatform;
