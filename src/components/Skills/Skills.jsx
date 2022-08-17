import React from 'react'

const Skills = () => {
  const mouseIn = (e) => {
    console.log("Hello")
  }
  return (
    <div className='bg-blue-300 bg-opacity-20 p-4 rounded-lg shadow-xl backdrop-blur-lg h-full'>
      <div className='w-full flex justify-center items-center'>
        <h1 className='text-3xl font-DynaPuff-bold text-gray-100'>Web Technologies I use:</h1>
      </div>


      <div className='flex flex-col py-8 px-4'>
          <h1 className='text-white text-lg font-Nunito-regular mb-2'>Web Programming / Frameworks</h1>
        <div className='flex justify-around items-center'>
          <div className='p-8 rounded-lg bg-slate-300 w-32 h-32 hover:shadow-2xl transition-all duration-100 ease-in active:scale-105 active:outline-4 active:outline-gray-200 active:outline' onMouseEnter={mouseIn}>
            <img src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" alt='nextjs' />
          </div>
          <div className='p-8 rounded-lg bg-slate-700 w-32 h-32'>
            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt='reactjs' />
          </div>
          <div className='p-8 rounded-lg bg-yellow-400 w-32 h-32 flex justify-center items-center'>
            <img src='https://www.seekpng.com/png/full/80-803385_open-javascript-logo-png-white.png' alt='vanillajs' />
          </div>
          <div className='p-8 rounded-lg bg-gray-200 w-32 h-32 flex justify-center items-center'>
            <img src='https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png' alt='typescript' />
          </div>
        </div>

        <h1 className='text-white text-lg font-Nunito-regular mt-6 mb-2'>UI / UX design</h1>
        <div className='flex justify-around items-center'>
          <div className='p-8 rounded-lg bg-slate-700 w-32 h-32 flex justify-center items-center'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/900px-Tailwind_CSS_Logo.svg.png?20211001194333' alt='typescript' />
          </div>
          <div className='p-8 rounded-lg bg-gray-200 w-32 h-32 flex justify-center items-center'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/768px-Bootstrap_logo.svg.png' alt='typescript' />
          </div>
          <div className='p-8 rounded-lg bg-gray-200 w-32 h-32 flex justify-center items-center'>
            <img src='https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png' alt='typescript' />
          </div>
        </div>

        <h1 className='text-white text-lg font-Nunito-regular mt-6 mb-2'>Database / CMS </h1>

        <div className='flex justify-around items-center'>
          <div className='p-8 rounded-lg bg-white w-32 h-32 flex justify-center items-center'>
            <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-firebase-icon.png' alt='typescript' />
          </div>
          <div className='overflow-hidden rounded-lg bg-slate-700 w-32 h-32 flex justify-center items-center'>
            <img src='https://avatars.githubusercontent.com/u/17177659?s=200&v=4' alt='typescript' />
          </div>
          <div className='p-8 rounded-lg bg-gray-200 w-32 h-32 flex justify-center items-center'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/768px-GraphQL_Logo.svg.png?20161105194737' alt='typescript' />
          </div>
          <div className='p-8 rounded-lg bg-gray-200 w-32 h-32 flex justify-center items-center'>
            <img src='https://cdn.freebiesupply.com/logos/large/2x/socket-io-logo-png-transparent.png' alt='socket.io' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills