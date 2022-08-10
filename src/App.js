import { useEffect, useRef, useState } from 'react'
import Intro from './components/Intro/Intro'
import LeftSideBar from './components/LeftSideBar/LeftSideBar'
import RightSideBar from './components/RightSideBar/RightSideBar';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setScrollBreakPoints, setScrollPosition, setInsideViewPort } from './store/AppState';
import Skills from './components/Skills/Skills';

const App = () => {
  const introRef = useRef(null);
  const scrollRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const coursesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollBreakPoints = useSelector(state => state.AppState.scrollBreakPoints);
  const scrollPosition = useSelector(state => state.AppState.scrollPosition);
  const insideViewport = useSelector(state => state.AppState.insideViewport);

  const dispatch = useDispatch();
  const [scroll, setScroll] = useState(null);

  // const handleClick = () => {
  //   scrollRef.current.scrollTo(0, scrollBreakPoints.contact);
  // }

  useEffect(() => {
    setScroll(document.getElementById('scrollable'));
    dispatch(setScrollBreakPoints({
      intro: introRef.current.getBoundingClientRect().top,
      skills: skillsRef.current.getBoundingClientRect().top,
      projects: projectsRef.current.getBoundingClientRect().top,
      courses: coursesRef.current.getBoundingClientRect().top,
      contact: contactRef.current.getBoundingClientRect().top,
    }))
    dispatch(setInsideViewPort('intro'));
    //eslint-disable-next-line
  }, [])

  const handleScroll = () => {
    dispatch(setScrollPosition({
      intro: introRef.current.getBoundingClientRect().top,
      skills: skillsRef.current.getBoundingClientRect().top,
      projects: projectsRef.current.getBoundingClientRect().top,
      courses: coursesRef.current.getBoundingClientRect().top,
      contact: contactRef.current.getBoundingClientRect().top,
    }));
    console.log(scrollPosition);
    for(const item in scrollPosition){
      if(scrollPosition[item] >= -5 && scrollPosition[item] <= window.innerHeight - 10){
        dispatch(setInsideViewPort(item.toString()));
      }
    }
  }
  return (
    <>
      <div className='w-screen grid grid-cols-12 min-h-screen'>
        <div className='col-span-2'>
          <div className='fixed z-20 flex flex-col items-center p-4 top-0 left-0 w-1/6 h-full bg-blue-500 bg-opacity-25'>
            <LeftSideBar refData={scrollRef} />
          </div>
        </div>

        <div onScroll={handleScroll} id="scrollable" ref={scrollRef} className='col-span-7 overflow-y-scroll hideScrollBar scroll-Container scroll-smooth'>
          <div className='h-20'>{}</div>
          <div ref={introRef}><Intro /></div>
          <div ref={skillsRef} className='h-screen px-4 scroll-Section'>
            <Skills />
          </div>
          <div ref={projectsRef} className='h-screen px-4 scroll-Section'>Projects</div>
          <div ref={coursesRef} className='h-screen px-4 bg-violet-600 scroll-Section'>sdaf</div>
          <div ref={contactRef} className='h-screen px-4 scroll-Section'>fsdaf</div>
        </div>
        <div className='col-span-3 relative'>
          <div className="fixed right-0 top-0 w-1/4 h-screen z-20">
            <RightSideBar />
          </div>
        </div>
      </div>
    </>
  )
}

export default App