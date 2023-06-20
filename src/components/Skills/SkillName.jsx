import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { changeIndex } from '../../store/SkillsState';

const SkillName = ({ index, children }) => {
  const dispatch = useDispatch();
  const skillState = useSelector(store => store.SkillState);
  return (
    <div
    onClick={() => {
      document.documentElement.style.setProperty('--position-line', `${45 * index}px`);
      dispatch(changeIndex(index));
    }}
    className={`h-50px flex justify-start rounded lg:rounded-none items-center hover:text-slate-100 hover:bg-white hover:bg-opacity-10 font-Nunito-light text-lg ${skillState.index === index ? 'bg-white bg-opacity-10 text-slate-100' : 'text-slate-200'} px-2 lg:px-6 cursor-pointer`}>
    {children}
  </div>
  )
}

export default SkillName
