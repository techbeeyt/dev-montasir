import React, { useEffect, useState } from 'react'
import { RiDoubleQuotesL, RiDoubleQuotesR} from 'react-icons/ri';
import { BsFillChatRightQuoteFill } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

const Quote = () => {
    const quotes = [
        "Web development is an art, art needs time, patients and love to be crafted beautifully..",
        "If there is no bug in your code, that means that you are not doing something creative.."
    ];
    const [showQuote, setShowQuote] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setShowQuote(false);
        }, 8000);
    }, []);
  return (
    <AnimatePresence>
        {
            showQuote ? (
                
                <motion.div className='relative rounded-3xl bg-black bg-opacity-50 py-4 flex flex-col justify-center items-center right-72 top-2'
        initial={{
            x:150,
            scaleX: 0,
            scaleY: 0.2
        }}
        exit={{
            x:150,
            scaleX: 0,
            scaleY: 0.2
        }}
        animate={{
            x:0,
            scaleX:1,
            scaleY: 1
        }}
        transition={{
            delay:3
        }}
        >
        <div className='grid grid-cols-6 w-full'>
            <div className='col-span-1 text-gray-100 flex justify-end'>
                <RiDoubleQuotesL />
            </div>
                <p className='text-gray-100 font-Nunito-light col-span-4'>
                    {quotes[0]}
                </p>
            <div className='col-span-1 text-gray-100 flex justify-start items-end'>
                <RiDoubleQuotesR />
            </div>
        </div>
        <div className=' flex justify-end gap-4 items-center ml-auto mr-4 mt-4'>
            <span className='text-gray-100'><BsFillChatRightQuoteFill /></span> <span className='text-white'>Montasir Mahmud</span>
        </div>
    </motion.div>
            ) : null
        }
    </AnimatePresence>
  )
}

export default Quote