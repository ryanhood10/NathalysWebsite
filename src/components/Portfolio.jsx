import React, { useState, useRef } from "react";
import Laptop from "../images/marketingHeader.jpeg";
import { useNavigate } from 'react-router-dom';
import EmailMarketing from '../images/ryanh5800_React_icon_programming_68468fde-6f40-4320-8555-184738340d8c.png'
import CustomWebsite from '../images/ryanh5800_people_working_on_technology_candid_4k_realistic_7e37e369-f643-40a4-9eba-e1da1bbcab34.png'
import SearchEngine from '../images/ryanh5800_robots_making_a_deal_candid_realistic_4k_f56bef09-6030-481e-9db3-9a91ff4d2c7f.png'

const Portfolio = () => {
  return (
    <div className="w-full bg-gray-200 py-16 px-4">
    <h1 className='text-purple-500 font-bold text-4xl text-center col-span-2'>Portfolio/Case Studies</h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 space-x-5 space-y-5">
                    <img className="w-[500px] mx-auto my-4 rounded-xl" src={Laptop} alt="/" />
                    <div className="flex flex-col justify-center  space-y-3">
                        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"> Our Solutions</h1>
                        <p className="md:text-2xl sm:text-xl text-l py-2"> 
                        Welcome to a world of comprehensive solutions designed to lead you to successful business journey.
                        Together, we will craft meaningful connections with targeted email campaigns that resonate. 
                        Elevate your online presence and visibility with powerful Search Engine Optimization techniques.
                        As well as, our specialization in web solutions focuses on building websites that capture your brand essence.
                        Choose us to embark on a growth-oriented journey that starts with precise email campaigns, impactful SEO, and expertly crafted websites.
                        </p>

                    </div>
            </div>


            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 space-x-5 space-y-5">
                    <div className="flex flex-col justify-center ">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"> Social Media Marketing Campaigns</h1>
                            <p className="md:text-2xl sm:text-xl text-l py-2"> Increase your revenues with our automated email marketing campaigns.
                            By streamlining your email outreach, we attract more customers to your brand. 
                            Let us handle the automation while you enjoy increased business growth.
                           
                            
                            </p>
                            {/* <button onClick={() => {
                                newsletterRef.current.scrollIntoView({
                                behavior: "smooth",
                                });
                            }}
                            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-purple-400">Contact Us</button> */}
                    </div>                          
                        <img className="w-[500px]    mx-auto my-4 rounded-xl" src={EmailMarketing} alt="/" />
            </div>


                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 space-x-5 space-y-5">
                            
                        <div className="flex flex-col justify-center space-y-5">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"> Search Engine Optimization</h1>
                            <p className="md:text-2xl sm:text-xl text-l py-2"> 

                            Boost your online visibility through our comprehensive Search Engine Optimization (SEO) services.
                            Our experts will fine-tune your website, ensuring it ranks higher on search engine results pages.
                            By optimizing keywords, improving site structure, and enhancing content, we drive organic traffic to your platform. 
                            Experience increased exposure and attract a wider audience, all while we manage the complexities of SEO. 
                            Elevate your online presence with our proven strategies and watch your visibility soar on the internet.         
                               
                            </p>
                            {/* <button onClick={() => {
                                newsletterRef.current.scrollIntoView({
                                behavior: "smooth",
                                });
                            }}
                             className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-purple-400">Contact Us</button> */}

                        </div>
                            <img className="w-[500px] mx-auto my-4 rounded-xl" src={SearchEngine} alt="/" />
                </div>

                <br></br>


                      {/* <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 space-x-5 space-y-5">
                <img className="w-[500px] sm:w-full mx-auto my-4 rounded-xl" src={CustomWebsite} alt="/" />

                <div className="flex flex-col justify-center space-y-5">

                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"> Custom Website Builds</h1>
                    <p className="md:text-2xl sm:text-xl text-l py-2"> 
                    Acquire a tailor-made website that encapsulates your unique brand essence. 
                    Our services encompass website design and development. 
                    We will craft customized features to fulfill your specific needs.
                     In today's digital landscape, a compelling landing page is indispensable for every company.
                     Let us create an online presence that truly reflects your business while incorporating essential website features.
                 
                                         </p>
                         <button onClick={() => {
                                newsletterRef.current.scrollIntoView({
                                behavior: "smooth",
                                });
                            }}
                             className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-purple-400">Contact Us</button>


                </div>

                </div> */}
      
    </div>
  );
}

export default Portfolio;
