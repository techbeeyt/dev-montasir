import { SiNetlify } from 'react-icons/si';
import { AiOutlineGithub } from 'react-icons/ai';
import BtnPrimary from '../Buttons/BtnPrimary';
import BtnSecondary from '../Buttons/BtnSecondary';

const ProjectListSm = ({project_img, project, details, live_link, github_link}) => {
  return (
    <div className='bg-white bg-opacity-10 p-4 rounded-md w-full flex flex-col'>
        <div className='flex justify-start items-center w-full'>
            <div className='w-1/3'>
                <div className='bg-white h-20 w-20 p-4 rounded-lg'>
                <img src={project_img} alt={project} />
                </div>
            </div>
            <div className='w-2/3'>
                <div className='flex flex-col justify-start items-start'>
                    <h1 className='font-Nunito-regular text-gray-100'>{project}</h1>
                    <p className='text-gray-300'>{details}</p>
                </div>
                
            </div>
        </div>
        <div className='flex justify-between items-center mt-4 gap-2'>
            <BtnPrimary><SiNetlify /> Live Demo</BtnPrimary>
            <BtnSecondary><AiOutlineGithub /> Github Repo</BtnSecondary>
        </div>
    </div>
  )
}

export default ProjectListSm