import React from 'react'

const ToolTip = ({children, title, position}) => {
  return (
    <div className='relative group flex justify-center items-center'>
        {children}
        <div className={`absolute opacity-0 pointer-events-none translate-y-2 delay-100 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-200 bg-gray-900 px-2 py-1 rounded-md text-gray-50 ${position ==='bottom' ? '-bottom-10' : '-top-10'}`}>{title}</div>
    </div>
  )
}

export default ToolTip