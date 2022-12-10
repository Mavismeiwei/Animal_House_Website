import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

const Help = () => {
  return (
    <div className='flex flex-col relative mx-4 lg:mx-0 xl:mx-4 my-20 max-w-screen-2xl'>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl text-primary font-heading text-center font-bold tracking-widest mb-20'>
        HOW CAN WE HELP YOU?
      </h1>
      <div className='my-5 flex flex-wrap justify-center gap-12'>
        <div className='flex flex-col items-center gap-6 max-w-[200px]'>
          <SearchIcon sx={{ fontSize: 80 }} className='text-primary' />
          <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-primary '>SPAY</h2>
          <p className='text-justify text-stone-600 font-medium text-sm sm:text-base lg:text-lg'>
          Spaying and neutering are services we offer to low-income area. We schedule days where we have events, and we can offer affordable prices as we have veterinarians who volunteer for us.
          </p>
        </div>
        <div className='flex flex-col items-center gap-6 max-w-[200px]'>
          <AppRegistrationIcon sx={{ fontSize: 80 }} className='text-primary' />
          <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-primary '>EDUCATE</h2>
          <p className='text-justify text-stone-600 font-medium text-sm sm:text-base lg:text-lg'>
          The best way to save current and future stray animals is to educate communities about the benefits of spaying and neutering, 
          vaccines, and other pet care. 
          </p>
        </div>
        <div className='flex flex-col items-center gap-6 max-w-[200px]'>
          <VolunteerActivismIcon sx={{ fontSize: 80 }} className='text-primary' />
          <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-primary '>ADOPT</h2>
          <p className='text-justify text-stone-600 font-medium text-sm sm:text-base lg:text-lg'>
          After an animal has gone through an abandonment process, it is essential that we place 
          it in a home where it will be happy and loved until the end of its life.
          </p>
        </div>
        <div className='flex flex-col items-center gap-6 max-w-[200px]'>
          <RequestQuoteIcon sx={{ fontSize: 80 }} className='text-primary' />
          <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-primary '>DONATE</h2>
          <p className='text-justify text-stone-600 font-medium text-sm sm:text-base lg:text-lg'>
          We have been able to help stray animals thanks to the donations coming from generous and caring animal lovers like you. 
          Please help us to keep our dream alive!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
