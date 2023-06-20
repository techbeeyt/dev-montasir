import ProgrammingLanguages from "./SkillSet/ProgrammingLanguages"
import SkillName from "./SkillName";
import { useSelector } from 'react-redux';
import FronteEnd from "./SkillSet/FrontEnd";
import UiFrameWork from './SkillSet/UiFrameWorks';
import BackEnd from "./SkillSet/BackEnd";
import ToolsPlatform from './SkillSet/ToolsPlatform';
import DataBase from "./SkillSet/DataBase";
const SkillsSection = () => {
  const skillState = useSelector(store => store.SkillState);
  return (
    <div className="pt-4 pr-0 pb-3 pl-2 lg:pl-4 h-full">
      <div className="bg-blue-500 bg-opacity-20 backdrop-blur-md h-[89vh] lg:h-full w-[78.5vw] lg:w-auto rounded-md flex flex-col justify-start items-start p-4 lg:p-10">
        <div className="flex gap-2 w-full justify-start items-center">
          <span className="font-DynaPuff-bold text-2xl text-slate-100">Skills</span>
          <div className="h-2px w-1/2 bg-blue-600 rounded-lg"></div>
        </div>
        <div className="relative flex flex-col lg:flex-row justify-start items-start mt-4 lg:mt-10">
          <div className="track-line hidden lg:block">
            <div className="position-line"></div>
          </div>
          <div className="w-[70vw] lg:w-auto overflow-auto mb-2 lg:mb-0">
            <div className="flex flex-row lg:flex-col">
              <SkillName index='0'><span className="whitespace-nowrap">Programming Languages</span></SkillName>
              <SkillName index='1'><span className="whitespace-nowrap">Front-End Technologies</span></SkillName>
              <SkillName index='2'><span className="whitespace-nowrap">UI Frameworks</span></SkillName>
              <SkillName index='3'><span className="whitespace-nowrap">Back-End Technologies</span></SkillName>
              <SkillName index='4'><span className="whitespace-nowrap">Tools and Platforms</span></SkillName>
              <SkillName index='5'><span className="whitespace-nowrap">Database</span></SkillName>
            </div>
          </div>
          <div className="px-2 lg:px-6">
            {
              skillState.index === '0' ? (<ProgrammingLanguages />) : null
            }

            {
              skillState.index === '1' ? (<FronteEnd />) : null
            }

            {
              skillState.index === '2' ? (<UiFrameWork />) : null
            }

            {
              skillState.index === '3' ? (<BackEnd />) : null
            }

            {
              skillState.index === '4' ? (<ToolsPlatform />) : null
            }

            {
              skillState.index === '5' ? (<DataBase />) : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsSection
