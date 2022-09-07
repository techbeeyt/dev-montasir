
import CourseList from './CourseList';
const Courses = () => {
  return (
    <div className='h-screen p-4 overflow-y-scroll scrollbar scrollbar-thumb-blue-500'>
      <div className=" bg-white backdrop-blur-sm bg-opacity-20 flex flex-col rounded-md">
        <div className="w-full flex justify-center items-center bg-blue-600 p-4">
          <h1 className="text-blue-100 text-2xl font-DynaPuff-bold">Learn With Me</h1>
        </div>
        <div className="p-4 flex flex-col gap-3">
          <CourseList
            course_title="Learn for free with Youtube"
            option="Subscribe"
            course_price="0.00"
          />
          <CourseList
            course_title="HTML, CSS, Javascript for Beginner"
            course_price="1.99"
            option="Add to cart"
          />
          <CourseList/>
          <CourseList
            course_title="HTML, CSS, Javascript for Beginner"
            course_price="1.99"
            option="Add to cart"
          />
          <CourseList
            course_title="HTML, CSS, Javascript for Beginner"
            course_price="1.99"
            option="Add to cart"
          />
        </div>
      </div>
    </div>
  )
}

export default Courses
