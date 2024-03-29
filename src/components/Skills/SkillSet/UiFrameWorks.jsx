import tailwindcssLogo from '../../../assets/icons/logo-tailwindcss.png';
import bootstrapLogo from '../../../assets/icons/logo-bootstrap.png';
import daisyuiLogo from '../../../assets/icons/logo-daisyui.png';
import materialuiLogo from '../../../assets/icons/logo-materialui.png';
import chartjsLogo from '../../../assets/icons/logo-chartjs.png';
import threejsLogo from '../../../assets/icons/logo-threejs.png';
import { motion } from 'framer-motion';
const UiFrameWork = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration:0.5}} >
      <div className="text-lg lg:text-xl text-slate-200 font-semibold mb-2 lg:mb-5">@UI Frameworks</div>
        <div className="flex justify-start items-center py-2 gap-2">
          <div className="w-6 h-6 flex justify-center items-center rounded-full">
            <img src={tailwindcssLogo} alt="Tailwind CSS" />
          </div>
          <span className="text-slate-200 font-Nunito-light">Tailwind CSS</span>
        </div>
        <div className="flex justify-start items-center py-2 gap-2">
          <div className="w-6 h-6 flex justify-center items-center rounded-full">
            <img src={bootstrapLogo} alt="Bootsrap 5" />
          </div>
          <span className="text-slate-200 font-Nunito-light">Bootsrap 5</span>
        </div>
          
        <div className="flex justify-start items-center py-2 gap-2">
          <div className="bg-transparent w-6 h-6 flex justify-center items-center rounded-full">
            <img src={daisyuiLogo} alt="Daisy U" />
          </div>
          <span className="text-slate-200 font-Nunito-light">Daisy UI</span>
        </div>

        <div className="flex justify-start items-center py-2 gap-2">
          <div className="bg-transparent w-6 h-6 flex justify-center items-center rounded-full">
            <img src={materialuiLogo} alt="Material UI" />
          </div>
          <span className="text-slate-200 font-Nunito-light">Material UI</span>
        </div>

        <div className="flex justify-start items-center py-2 gap-2">
          <div className="bg-transparent w-6 h-6 flex justify-center items-center rounded-full">
            <img src={chartjsLogo} alt="Chart JS" />
          </div>
          <span className="text-slate-200 font-Nunito-light">Chart JS</span>
        </div>

        <div className="flex justify-start items-center py-2 gap-2">
          <div className="bg-slate-200 p-1 w-6 h-6 flex justify-center items-center rounded-full">
            <img src={threejsLogo} alt="Three JS" />
          </div>
          <span className="text-slate-200 font-Nunito-light">Three JS</span>
        </div>
    </motion.div>
  )
}

export default UiFrameWork;
