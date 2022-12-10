import React from 'react';
import Logo from '../components/Logo';
import blob from '../assets/images/blob.svg';
import Help from '../components/Help';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { motion } from 'framer-motion';
import Store from '../components/Store';
import icon1 from '../assets/images/icon1.png';
import ServicesInfo from '../components/ServicesInfo';
import Introduction from '../components/Introduction';
import ServicesEducation from '../components/ServicesEducation';
import ServicesHome from '../components/ServicesHome';


const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: 'linear' }}
      exit={{ opacity: 0 }}
      className='text-secondary flex flex-col items-center '
    >
      <div className='  bg-cover bg-center min-h-[40vh] w-full'>
        <div className='w-full min-h-[40vh] flex items-center bg-primary/20'>
          <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl font-heading font-bold max-w-[550px] tracking-wide leading-[30px] sm:leading-[60px]  lg:leading-[70px] ml-10 md:ml-20 '>
            Our Services{' '}
            <b className='text-primary w-fit items-center gap-2 flex pb-2 border-b-2 border-primary'>
              Animal House <Logo />{' '}
            </b>
          </h1>
        </div>
      </div>
      <div className='flex flex-col relative mx-4 lg:mx-0 xl:mx-4 mb-10 mt-20 max-w-screen-2xl'>
        <Link className='absolute left-0' to='/'>
          <span className='flex gap-1 items-center text-blue-500 hover:underline '>
            {' '}
            <KeyboardBackspaceIcon /> Back to home
          </span>
        </Link>
        <Introduction/>
        <img
          className='absolute opacity-20 z-[-1] w-[80vw] lg:w-[40vw] top-[-5%] right-[-25%]'
          src={blob}
          alt='blob'
        />
        <div className='flex flex-col relative py-5 mt-2'>
          <span className='w-[40px] h-[4px] bg-primary absolute top-0 left-1'></span>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-medium tracking-widest font-heading '>
            ADOPTION
             <ServicesInfo />
          </h1>
        </div>
        <div className='flex flex-col relative py-5 mt-20'>
          <span className='w-[40px] h-[4px] bg-primary absolute top-0 left-1'></span>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-medium tracking-widest font-heading '>
            EDUCATION
             <ServicesEducation />
          </h1>
        </div>
        <div className='flex flex-col relative py-5 mt-20'>
          <span className='w-[40px] h-[4px] bg-primary absolute top-0 left-1'></span>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-medium tracking-widest font-heading '>
            PROVIDE HOME
             <ServicesHome />
          </h1>
        </div>
      </div>
      <div className='flex flex-col relative mx-4 lg:mx-0 xl:mx-4 my-10 '>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl text-primary font-heading text-center font-bold tracking-widest mb-0'>
        OUR SHOP
      </h1>
      <h6 className=' text-primary/70  font-heading text-center font-bold tracking-widest mb-0'>
      Animal welfare is our core concept and the starting point of all our work<br></br>is to help improve the welfare level of all pets in society.
      </h6>
      </div>
      <Store/>
    </motion.div>
  );
};

export default Services;
