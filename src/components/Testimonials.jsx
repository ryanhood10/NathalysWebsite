import React from 'react';
import Profile from '../images/ryanh5800_people_working_on_technology_candid_4k_realistic_5290fb78-f32e-4f12-9363-6fd01f13b364.png';

const TestimonialsPage = () => {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12 grid grid-cols-2 gap-4'>
      <h1 className='text-purple-500 font-bold text-4xl text-center col-span-2'>About Me</h1>
      
      <div className='flex items-center'>
        <img src={Profile} alt="Profile" className='border rounded-xl w-full h-full object-cover' />
      </div>
      
      <div className='flex items-center'>
        <p>
          Hello! I'm [Name], a passionate Social Media Marketing Manager with over [X years] of experience helping brands find their voice and presence online. Throughout my career, I've had the privilege of working with businesses of all sizes, from startups to established enterprises, crafting strategies that resonate with their target audience and drive engagement.

          <br></br>
          <strong>Mission:</strong> To empower businesses to harness the power of social media, creating genuine connections with their audience and turning digital interactions into tangible results.
          <br></br>
          <strong>Vision:</strong> I envision a digital landscape where brands communicate not just to sell, but to inspire, educate, and build communities. Through strategic storytelling and data-driven decisions, I aim to position my clients at the forefront of social media innovation, fostering loyalty and driving growth.
        </p>
      </div>
    </div>
  );
}

export default TestimonialsPage;
