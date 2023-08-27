import React from 'react';
import Market1 from '../images/marketingHeader.jpeg';
import CustomerTestimonials from '../images/ryanh5800_people_working_on_technology_candid_4k_realistic_7e37e369-f643-40a4-9eba-e1da1bbcab34.png'
import react1 from '../images/ryanh5800_laptop_programming_0e3fd6a7-8dbf-4f63-b14d-ca0e8091b454.png';
import { useNavigate } from 'react-router-dom';


const HeadlineCards = () => {

    // const navigate = useNavigate();

    // const handleViewTestimonials = () => {
    //   navigate('/testimonials');
    // };

    // const handleViewSolutions = () => {
    //   navigate('/solutions');
    // };


  return (
    <div className='mx-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card 1 */}
      <div className='rounded-xl relative hover:scale-105 duration-300'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Contact Me</p>
          <p className='px-2'>Information</p>
          <button  className="bg-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto py-3 text-black" >View Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={CustomerTestimonials} alt='robot2' />
      </div>

      {/* Card 2 */}
      <div className='rounded-xl relative hover:scale-105 duration-300'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Marketing Solutions</p>
          <p className='px-2'>Social Media Marketing Campaigns</p>
          <button className="bg-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto py-3 text-black">View Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={Market1} alt='robot2' />
      </div>

      {/* Card 3 */}
      <div className='rounded-xl relative hover:scale-105 duration-300'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Premium Websites</p>
          <p className='px-2'>Customized Solutions</p>
          <button  className="bg-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto py-3 text-black">View Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={react1} alt='robot2' />
      </div>
    </div>
  );
}

export default HeadlineCards;