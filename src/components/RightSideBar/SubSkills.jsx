import React from 'react'
import { motion } from 'framer-motion';
import ProjectListSm from './ProjectListSm';

const SubSkills = () => {
  return (
    <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}} 
            transition={{duration:1, delay: 0.3}} className='flex flex-col justify-start items-center bg-blue-400 bg-opacity-20 rounded-lg h-full py-6 w-full px-4 overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-indigo-500'>
              <div>
                <h1 className='font-Nunito-regular text-white mb-4 text-lg'>Projects Done With Nextjs</h1>
              </div>

              <div className='flex flex-col gap-4 w-full'>
                <ProjectListSm 
                  project_img='https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png'
                  project='Montasir Blog'
                  details='This is my blog site'
                  github_link='https://'
                  live_link='h'
                  key='MyBlogSite'
                />

                <ProjectListSm 
                  project_img='https://mllj2j8xvfl0.i.optimole.com/Lsv2lkg.pJlS~36fbd/w:auto/h:auto/q:90/f:avif/https://s15165.pcdn.co/wp-content/uploads/2018/05/linkedin.jpg'
                  project='mePhoto'
                  details='Photo sharing social media site'
                  github_link='https://'
                  live_link='h'
                  key='PhotoSharingSite'
                />
              </div>
            </motion.div>
  )
}

export default SubSkills