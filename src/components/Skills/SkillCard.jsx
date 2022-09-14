import { themeMode } from "../../utils/enums"
const SkillCard = ({ vairant, imgSrc, altText, bgColor = 'bg-slate-200' }) => {
    const { DARK } = themeMode;
  return (
    <div className={`p-8 rounded-lg ${vairant === DARK ? 'bg-slate-700' : bgColor } w-24 h-24 lg:w-32 lg:h-32 hover:shadow-2xl transition-all duration-100 ease-in active:scale-105 active:outline-4 ${vairant === DARK ? 'active:outline-gray-700' : 'active:outline-gray-200'} active:outline flex justify-center items-center`}>
        <img src={imgSrc} alt={altText} />
    </div>
  )
}

export default SkillCard