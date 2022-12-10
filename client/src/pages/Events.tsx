import React from 'react';
import Logo from '../components/Logo';
// import bear from '../assets/images/bear.jpg';
import deer from '../assets/images/deer.jpg';
import blob from '../assets/images/blob.svg';
import Help from '../components/Help';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { motion } from 'framer-motion';
import LatestNews from '../components/LatestNews';
import Events from '../components/Events';
import OurProject from '../components/OurProject';
const headingVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.5,
    },
  },
};

const EventsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: 'linear' }}
      exit={{ opacity: 0 }}
      className='flex flex-col items-center text-secondary '
    >
      <div className=' bg-aboutImg bg-cover bg-center min-h-[60vh] w-full'>
        <div className='w-full min-h-[60vh] flex items-center bg-primary/20'>
          <h1 className=' text-4xl sm:text-5xl lg:text-6xl font-heading font-bold max-w-[550px] tracking-wide leading-[50px] sm:leading-[60px]  lg:leading-[70px] ml-10 md:ml-20 '>
           Recent Events
            <b className='flex items-center gap-2 pb-2 border-b-2 text-primary w-fit border-primary'>
             Animal house <Logo />{' '}
            </b>
          </h1>
        </div>
      </div>
      <div className='relative flex flex-col w-full mx-4 mt-20 mb-10 lg:mx-0 xl:mx-4 max-w-screen-2xl'>
        <Link className='absolute left-0' to='/'>
          <span className='flex items-center gap-1 text-blue-500 hover:underline '>
            {' '}
            <KeyboardBackspaceIcon /> Back to home
          </span>
        </Link>
        <img
          className='absolute opacity-20 z-[-1] w-[80vw] lg:w-[40vw] top-[-25%] right-[-25%]'
          src={blob}
          alt='blob'
        />
      </div>
      <Events />


      <div className='relative flex flex-col mx-4 mt-20 mb-10 lg:mx-20 xl:mx-20 max-w-screen-2xl'>
        <img
          className='absolute opacity-20 z-[-1] w-[80vw] lg:w-[40vw] top-[-25%] left-[-25%]'
          src={blob}
          alt='blob'
        />
        <div className='relative flex flex-col py-5'>
          <span className='w-[40px] h-[4px] bg-primary absolute top-0 left-1'></span>
          <h1 className='text-2xl font-medium tracking-widest sm:text-3xl lg:text-4xl font-heading '>
            Lastest News
          </h1>
          <div className='max-w-screen-2xl'>
            <LatestNews />
          </div>
        </div>
      </div>
      <OurProject/>
      <Help />
    </motion.div>
  );
};

export default EventsPage;
