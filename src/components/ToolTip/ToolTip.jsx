import React from 'react'

const ToolTip = ({children, title}) => {
  return (
    <div className='relative group'>
        <button className='text-gray-100'>{children}</button>
        <div className='absolute opacity-0 pointer-events-none translate-y-2 delay-100 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-200 bg-gray-900 px-2 py-1 rounded-md text-gray-50 -top-10 -left-4'>{title}</div>
    </div>
  )
}

export default ToolTip