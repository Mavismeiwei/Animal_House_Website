import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import bghome from '../assets/images/bghome.png';

const ServicesHome = () => {
  return (
    <div className='flex  justify-center items-center bg-primary/50 bg-center min-h-[40vh]'>
      <div className='bg-blue-0/5 filter backdrop-blur-sm text-white flex flex-col justify-center items-center gap-4 p-6 w-full min-h-[40vh]'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl text-center font-bold font-heading border-b-4 mb-2 mt-2'>
        Rescue homeless animal
        </h1>
        <div className='flex items-center justify-center sm:flex-row flex-col gap-6 mt-1 max-w-[1100px]'>
          <img className='min-h-[120px]'
          src={bghome}
          alt='bgdog' />
          <h2 className='text-base sm:text-lg md:text-xl font-medium text-justify'>
          We would like to have our facilities to serve our animals and low-income pet owners and also be able to pay veterinarians for their time so that we can have spay-neuter events more often for animals in need. We are so grateful we find people with great hearts like yourself reading this website who are willing to help with donations.
          </h2>
        </div>
        <Link className='min-w-[200px]' to='/contact'>
          <Button text='Join Us' theme='filled' classes='mt-1' />
        </Link>
      </div>
    </div>
  );
};


export default ServicesHome;