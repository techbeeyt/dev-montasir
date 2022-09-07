import React from 'react'
import BtnPrimary from '../Buttons/BtnPrimary';
import yt from '../../assets/images/ytcourse.jpg';

const CourseList = ({id, course_title, course_price, option, type }) => {
  return (
    <div className="p-4 flex justify-start items-start gap-4 bg-gray-50 rounded-md">
      <div className="w-32 h-32 rounded-md bg-slate-500 overflow-hidden border border-gray-100">
        <img src={yt} alt={course_title} />
      </div>
      <div className="flex-grow flex flex-col gap-1">
        <h1 className="text-blue-600 text-xl font-semibold">{course_title}</h1>
        <span className='text-gray-400'>{`Price: BDT ${course_price}`}</span>
        <div className='mt-auto'>
          <BtnPrimary>{option}</BtnPrimary>
        </div>
      </div>
    </div>
  )
}

export default CourseList
