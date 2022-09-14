import { useEffect, useRef, useState } from 'react'
import Intro from './components/Intro/Intro'
import LeftSideBar from './components/LeftSideBar/LeftSideBar'
import RightSideBar from './components/RightSideBar/RightSideBar';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setScrollBreakPoints, setScrollPosition, setInsideViewPort } from './store/AppState';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Statistics from './Statistics/Statistics';

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
    // console.log(scrollPosition);
    for(const item in scrollPosition){
      if(scrollPosition[item] >= -5 && scrollPosition[item] <= window.innerHeight - 10){
        dispatch(setInsideViewPort(item.toString()));
      }
    }
  }
  return (
    <>
      <div className='w-screen grid grid-cols-12 min-h-screen'>
        <div className='relative col-span-2'>
          <div className='fixed z-20 flex flex-col items-center lg:p-4 top-0 left-0 h-full bg-blue-800 lg:bg-blue-500 lg:bg-opacity-25 lg:w-1/6'>
            <LeftSideBar refData={scrollRef} />
          </div>
        </div>

        <div onScroll={handleScroll} id="scrollable" ref={scrollRef} className='col-span-10 lg:col-span-7 overflow-y-scroll hideScrollBar scroll-Container scroll-smooth'>
          <div className='h-20'>{}</div>
          <div ref={introRef}><Intro /></div>
          <div ref={skillsRef} className='h-screen p-4 pl-6 lg:pl-4 lg:pt-4 lg:pb-4 scroll-Section overflow-y-scroll'>
            <Skills />
          </div>
          <div ref={projectsRef} className='h-screen scroll-Section pl-2 lg:pl-4 lg:pb-4'>
            <Projects />
          </div>
          <div ref={coursesRef} className='h-screen scroll-Section'>
            <Statistics />
          </div>
          <div ref={contactRef} className='h-screen px-4 scroll-Section'>fsdaf</div>
        </div>
        <div className='hidden col-span-0 lg:block lg:col-span-3 relative'>
          <div className="fixed right-0 top-0 w-1/4 h-screen z-20">
            <RightSideBar />
          </div>
        </div>
      </div>
    </>
  )
}

export default App