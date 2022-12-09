import React from 'react';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import adoption from '../assets/images/adoption.png';
import home from '../assets/images/home.png';
import education from '../assets/images/education.png';
import calendar from '../assets/images/calendar.png';
import vaccine from '../assets/images/vaccine.png';

const Introduction = () => {
  return (
    <div className='flex flex-col relative mx-4 lg:mx-0 xl:mx-4 my-20 max-w-screen-2xl'>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl text-primary font-heading text-center font-bold tracking-widest mb-5'>
        OUR SERVICES
      </h1>
      <h6 className=' text-primary/70  font-heading text-center font-bold tracking-widest mb-10'>
      Animal welfare is our core concept and the starting point of all our work<br></br>is to help improve the welfare level of all pets in society.
      </h6>
      <div className='my-4 flex flex-wrap justify-center gap-12'>
        <div className='flex flex-col items-center gap-6 max-w-[220px]'>
          
          <img className='items-center max-w-[80px]'
          src={adoption}
          alt='adoption'/>
          <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-primary '>ADOPTION</h2>
          <p className='text-justify text-stone-600 font-medium text-sm sm:text-base lg:text-lg'>
          Social rescuers can display the adoption information of animals to be adopted, and friends who are interested in adopting stray animals can also find suitable children on the platform.
          </p>
        </div>
        <div className='flex flex-col items-center gap-6 max-w-[200px]'>
        <img className='items-center max-w-[80px]'
          src={education}
          alt='education'/>
          <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-primary '>EDUCATE</h2>
          <p className='text-justify text-stone-600 font-medium text-sm sm:text-base lg:text-lg'>
          Promote the scientific concept of responsible cat ownership for dogs and cats, neuter control and prevention, adoption as an alternative to selling, and never abandon.
          </p>
        </div>
        <div className='flex flex-col items-center gap-6 max-w-[200px]'>
        <img className='items-center max-w-[80px]'
          src={home}
          alt='home'/>
          <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-primary '>PROVIDE HOME</h2>
          <p className='text-justify text-stone-600 font-medium text-sm sm:text-base lg:text-lg'>
          Provide shelter for stray animals. Create food banks for dogs and cats to reduce the burden on owners, thereby reducing problem of abandonment.
          </p>
        </div>
        <div className='flex flex-col items-center gap-6 max-w-[200px]'>
        <img className='items-center max-w-[80px]'
          src={vaccine}
          alt='vaccine'/>
          <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-primary '>HEALTHCARE</h2>
          <p className='text-justify text-stone-600 font-medium text-sm sm:text-base lg:text-lg'>
          Carry out assistance and rescue work for stray pet bases and hospitals. Carry out food raising activities for small hospitals to improve the standards of pets.
          </p>
        </div>
        <div className='flex flex-col items-center gap-6 max-w-[200px]'>
        <img className='items-center max-w-[80px]'
          src={calendar}
          alt='calendar'/>
          <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-primary '>SUPERVISION</h2>
          <p className='text-justify text-stone-600 font-medium text-sm sm:text-base lg:text-lg'>
          Through the advantages of the Internet, online fundraising, food, medical and other projects, public supervision and so on to help pets in distress due to stray.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;