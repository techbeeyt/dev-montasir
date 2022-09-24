import nextLogo from '../../../assets/icons/logo-nextjs.png';
import reactLogo from '../../../assets/icons/logo-react.png';
import reduxLogo from '../../../assets/icons/logo-redux.png';
import { motion } from 'framer-motion';
const FronteEnd = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration:0.5}} >
      <div className="text-xl text-slate-200 font-semibold mb-5">@Front-End Technologies</div>
        <div className="flex justify-start items-center py-2 gap-2">
          <div className="bg-slate-200 w-6 h-6 flex justify-center items-center rounded-full">
            <img src={nextLogo} alt="Next.JS" />
          </div>
          <span className="text-slate-200 font-Nunito-light">Next JS</span>
        </div>
        <div className="flex justify-start items-center py-2 gap-2">
          <div className="w-6 h-6 flex justify-center items-center rounded-full">
            <img src={reactLogo} alt="React JS" />
          </div>
          <span className="text-slate-200 font-Nunito-light">React JS</span>
        </div>
          
        <div className="flex justify-start items-center py-2 gap-2">
          <div className="bg-transparent w-6 h-6 flex justify-center items-center rounded-full">
            <img src={reduxLogo} alt="Redux" />
          </div>
          <span className="text-slate-200 font-Nunito-light">Redux / Redux Toolkit</span>
        </div>
    </motion.div>
  )
}

export default FronteEnd;
