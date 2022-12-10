import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import bgdog from '../assets/images/bg_dog.png';

const ServicesInfo = () => {
  return (
    <div className='flex  justify-center items-center bg-primary/50 bg-center min-h-[40vh]'>
      <div className='bg-blue-0/5 filter backdrop-blur-sm text-white flex flex-col justify-center items-center gap-4 p-6 w-full min-h-[40vh]'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl text-center font-bold font-heading border-b-4 mb-2 mt-2'>
        Re-home abandoned animal
        </h1>
        <div className='flex items-center justify-center sm:flex-row flex-col gap-6 mt-1 max-w-[1100px]'>
          <img className='min-h-[120px]'
          src={bgdog}
          alt='bgdog' />
          <h2 className='text-base sm:text-lg md:text-xl font-medium text-justify'>
            We are profoundly particular about who can adopt the animals we have for adoption. After an animal has gone through an abandonment process, it is essential that we place it in a home where it will be happy and loved until the end of its life. Whether they become sick or old, we still need to be with them as they depend on us to live, and being separated from their families would be a tragic event for pets.
          </h2>
        </div>
        <Link className='min-w-[200px]' to='/contact'>
          <Button text='Join Us' theme='filled' classes='mt-1' />
        </Link>
      </div>
    </div>
    




  );
};


export default ServicesInfo;