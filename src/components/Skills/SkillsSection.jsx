import ProgrammingLanguages from "./SkillSet/ProgrammingLanguages"
import SkillName from "./SkillName";
import { useSelector } from 'react-redux';
import FronteEnd from "./SkillSet/FrontEnd";
import UiFrameWork from './SkillSet/UiFrameWorks';
const SkillsSection = () => {
  const skillState = useSelector(store => store.SkillState);
  return (
    <div className="pt-4 pr-0 pb-3 pl-4 h-full">
      <div className="bg-blue-500 bg-opacity-20 backdrop-blur-md h-full w-full rounded-md flex flex-col justify-start items-start p-10">
        <div className="flex gap-2 w-full justify-start items-center">
          <span className="font-DynaPuff-bold text-2xl text-slate-100">Skills</span>
          <div className="h-2px w-1/2 bg-blue-700 rounded-lg"></div>
        </div>
        <div className="relative flex justify-start items-start mt-10">
          <div className="track-line">
            <div className="position-line"></div>
          </div>
          <div>
            <SkillName index='0'>Programming Languages</SkillName>
            <SkillName index='1'>Front-End Technologies</SkillName>
            <SkillName index='2'>UI Frameworks</SkillName>
            <SkillName index='3'>Back-End Technologies</SkillName>
            <SkillName index='4'>Tools and Platforms</SkillName>
            <SkillName index='5'>Database</SkillName>
          </div>
          <div className="px-6">
            {
              skillState.index === '0' ? (<ProgrammingLanguages />) : null
            }

            {
              skillState.index === '1' ? (<FronteEnd />) : null
            }

            {
              skillState.index === '2' ? (<UiFrameWork />) : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsSection
