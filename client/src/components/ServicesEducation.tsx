import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import educationbg from '../assets/images/educationbg.png';

const ServicesEducation = () => {
  return (
    <div className='flex  justify-center items-center bg-primary/50 bg-center min-h-[40vh]'>
      <div className='bg-blue-0/5 filter backdrop-blur-sm text-white flex flex-col justify-center items-center gap-4 p-6 w-full min-h-[40vh]'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl text-center font-bold font-heading border-b-4 mb-2 mt-2'>
        create awareness about love
        </h1>
        <div className='flex items-center justify-center sm:flex-row flex-col gap-6 mt-1 max-w-[1100px]'>
          <h2 className='text-base sm:text-lg md:text-xl font-medium text-justify'>
          Homeless animals have no choice but to look for food in the trash. However, they should not be hurt when they come looking for food. Instead, the community needs to help them. The community needs to be aware that animals and pets have emotions and needs.
          </h2>
          <img className='min-h-[120px]'
          src={educationbg}
          alt='educationbg' />
        </div>
        <Link className='min-w-[200px]' to='/contact'>
          <Button text='Join Us' theme='filled' classes='mt-1' />
        </Link>
      </div>
    </div>
    );
};


export default ServicesEducation;