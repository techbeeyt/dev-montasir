import nodejsLogo from '../../../assets/icons/logo-nodejs.png'
import expressLogo from '../../../assets/icons/logo-express.png';
import firebaseLogo from '../../../assets/icons/logo-firebase.png';
import { motion } from 'framer-motion';
const BackEnd = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration:0.5}} >
      <div className="text-lg lg:text-xl text-slate-200 font-semibold mb-2 lg:mb-5">@UI Frameworks</div>
        <div className="flex justify-start items-center py-2 gap-2">
          <div className="w-6 h-6 flex justify-center items-center">
            <img src={nodejsLogo} alt="Node.JS" />
          </div>
          <span className="text-slate-200 font-Nunito-light">Node JS</span>
        </div>
        <div className="flex justify-start items-center py-2 gap-2">
          <div className="w-6 h-6 flex justify-center items-center rounded-full">
            <img src={expressLogo} alt="Express JS" />
          </div>
          <span className="text-slate-200 font-Nunito-light">Express JS</span>
        </div>
          
        <div className="flex justify-start items-center py-2 gap-2">
          <div className="bg-transparent w-6 h-6 flex justify-center items-center rounded-full p-1">
            <img src={firebaseLogo} alt="Firebase" className='object-contain' />
          </div>
          <span className="text-slate-200 font-Nunito-light">Firebase</span>
        </div>

        <div className="flex justify-start items-center py-2 gap-2">
          <div className="bg-transparent w-6 h-6 flex justify-center items-center rounded-full">
            <img src={expressLogo} alt="Redux" />
          </div>
          <span className="text-slate-200 font-Nunito-light"></span>
        </div>

        <div className="flex justify-start items-center py-2 gap-2">
          <div className="bg-transparent w-6 h-6 flex justify-center items-center rounded-full">
            <img src={expressLogo} alt="Redux" />
          </div>
          <span className="text-slate-200 font-Nunito-light">Chart</span>
        </div>

        <div className="flex justify-start items-center py-2 gap-2">
          <div className="bg-transparent w-6 h-6 flex justify-center items-center rounded-full">
            <img src={expressLogo} alt="Redux" />
          </div>
          <span className="text-slate-200 font-Nunito-light">Three JS</span>
        </div>
    </motion.div>
  )
}

export default BackEnd;
