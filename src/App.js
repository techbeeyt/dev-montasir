import { useEffect, useRef, useState } from 'react'
import Intro from './components/Intro/Intro'
import LeftSideBar from './components/LeftSideBar/LeftSideBar'
import RightSideBar from './components/RightSideBar/RightSideBar';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setScrollBreakPoints, setScrollPosition, setInsideViewPort } from './store/AppState';
import Projects from './components/Projects/Projects';
import SkillsSection from './components/Skills/SkillsSection';
import Statistics from './components/Statistics/Statistics';
import Contact from './components/Contact/Contact';

const App = () => {
  const introRef = useRef(null);
  const scrollRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const coursesRef = useRef(null);
  const contactRef = useRef(null);
  const cvDivRef = useRef(null);

  const scrollBreakPoints = useSelector(state => state.AppState.scrollBreakPoints);
  const scrollPosition = useSelector(state => state.AppState.scrollPosition);
  const insideViewport = useSelector(state => state.AppState.insideViewport);

  const dispatch = useDispatch();
  const [scroll, setScroll] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

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

  const handleTransitionEnd = () => {
    if(isOpen){
      cvDivRef.current.classList.remove('bg-blue-200');
      cvDivRef.current.classList.add('bg-slate-900');
    }
  }

  return (
    <>
      <div className='w-screen grid grid-cols-12 min-h-screen'>
        <div className='relative col-span-2'>
          <div className='fixed z-20 flex flex-col items-center lg:p-4 top-0 left-0 h-full  lg:bg-blue-500 lg:bg-opacity-25 lg:w-1/6'>
            <LeftSideBar refData={scrollRef} />
          </div>
        </div>

        <div onScroll={handleScroll} id="scrollable" ref={scrollRef} className='col-span-10 lg:col-span-7 overflow-y-scroll hideScrollBar scroll-Container scroll-smooth'>
          <div className='h-20'>{}</div>
          <div ref={introRef}><Intro /></div>
          <div ref={skillsRef} className='h-screen scroll-Section overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-600'>
            <SkillsSection />
          </div>
          <div ref={projectsRef} className='h-screen scroll-Section pl-2 lg:pl-0 lg:pb-4'>
            <Projects />
          </div>
          <div ref={coursesRef} className='h-screen scroll-Section'>
            <Statistics />
          </div>
          <div ref={contactRef} className='h-screen scroll-Section'>
            <Contact />
          </div>
        </div>
        <div className='col-span-0 lg:col-span-3 relative'>
          <div className='block lg:hidden fixed z-50 top-5 right-5 bg-blue-800/50 backdrop-blur-md rounded-full h-14 w-14 hover:outline-4 hover:outline outline-gray-500' onClick={() => setIsOpen(!isOpen)}>
            <div className={
                `transition-all
                ease-in 
                duration-[500ms]
                fixed
                bg-blue-200
                top-0
                right-0
                rounded-full
                ${isOpen ? 'h-[1800px]' : 'h-full'}
                ${isOpen ? 'w-[1800px]' : 'w-full'}
                ${isOpen ? 'translate-x-1/2' : 'translate-x-0'}
                ${isOpen ? '-translate-y-1/2' : 'translate-y-0'}
              `
            } onTransitionEnd={handleTransitionEnd} ref={cvDivRef}>
              
            </div>

            <div className={`
                w-full h-full overflow-hidden rounded-full fixed top-0 right-0
                ${isOpen ? '-z-10' : 'z-10'}
              `}
            >
              <img src={'https://raw.githubusercontent.com/techbeeyt/data/main/montasir.jpg'} alt="Montasir" />
            </div>
          </div>
          <div className="hidden lg:block fixed right-0 top-0 w-1/4 h-screen z-20">
            <RightSideBar />
          </div>
        </div>
      </div>
    </>
  )
}

export default App