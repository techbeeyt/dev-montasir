import React from 'react'
import ToolTip from '../ToolTip/ToolTip'
import SkillCard from './SkillCard';
import { themeMode } from '../../utils/enums';

const Skills = () => {
  const mouseIn = (e) => {
    console.log("Hello")
  }
  return (
    <div className='bg-blue-500 bg-opacity-20 p-4 rounded-lg shadow-xl backdrop-blur-lg'>
      <div className='w-full flex justify-center items-center'>
        <h1 className='hidden lg:block text-3xl font-DynaPuff-bold text-gray-100'>Web Technologies I use:</h1>
      </div>


      <div className='flex flex-col lg:py-8 px-4'>
          <h1 className='text-white text-lg font-Nunito-regular mb-2'>Web Programming / Frameworks</h1>
        <div className='flex justify-center items-center flex-wrap gap-2'>
          <ToolTip title="Next JS">
            <SkillCard 
              imgSrc="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
              altText="nextjs"  
            />
          </ToolTip>
          <ToolTip title="React JS">
            <SkillCard 
                imgSrc="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                altText="reactjs"
                vairant={themeMode.DARK}
              />
          </ToolTip>
          
          <ToolTip title="Javascript">
            <SkillCard 
              imgSrc='https://www.seekpng.com/png/full/80-803385_open-javascript-logo-png-white.png'
              altText='javascript'
              bgColor='bg-yellow-400'
            />
          </ToolTip>
          
          <ToolTip title="Typescript">
            <SkillCard 
              imgSrc="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png"
              altText="typescript"
            />
          </ToolTip>

        </div>

        <h1 className='text-white text-lg font-Nunito-regular mt-6 mb-2'>UI / UX design</h1>
        <div className='flex justify-center items-center flex-wrap gap-2'>
          <ToolTip title="Tailwindcss">
            <SkillCard 
              imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/900px-Tailwind_CSS_Logo.svg.png"
              altText="tailwindcss"
            />
          </ToolTip>
          <ToolTip title="Bootstrap">
            <SkillCard 
              imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/768px-Bootstrap_logo.svg.png"
              altText="bootstrap"
            />
          </ToolTip>
          <ToolTip title="MaterialUI">
            <SkillCard 
              imgSrc="https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png"
              altText="materialui"
            />
          </ToolTip>
        </div>

        <h1 className='text-white text-lg font-Nunito-regular mt-6 mb-2'>Database / CMS </h1>

        <div className='flex justify-center items-center flex-wrap gap-2'>
          <ToolTip title="Firebase">
            <SkillCard 
              imgSrc="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-firebase-icon.png"
              altText="firebase"
            />
          </ToolTip>
          <ToolTip title="Sanity.io">
            <SkillCard 
              imgSrc="https://avatars.githubusercontent.com/u/17177659?s=200&v=4"
              altText="sanity"
            />
          </ToolTip>
          <ToolTip title="GraphQL">
            <SkillCard 
              imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/768px-GraphQL_Logo.svg.png?20161105194737"
              altText="graphql"
            />
          </ToolTip>
          <ToolTip title="Socket.io">
            <SkillCard 
              imgSrc="https://cdn.freebiesupply.com/logos/large/2x/socket-io-logo-png-transparent.png"
              altText="socket.io"
            />
          </ToolTip>
        </div>
      </div>
    </div>
  )
}

export default Skills