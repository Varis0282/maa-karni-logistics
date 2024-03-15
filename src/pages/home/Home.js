import React from 'react'
import { Carousel, PageWIthNavbar, Products, Services } from '../../component'
import Lottie from 'lottie-react';
import { Home1 } from '../../assets';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <PageWIthNavbar>
            <Carousel />
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row w-[80%] mt-4 mb-16 py-4 justify-between">
                    <div className="flex w-1/2 flex-col justify-start items-center gap-8 pt-4">
                        <p className='text-2xl font-bold text-center w-full'>
                            <span className='text-amber-700'>WELCOME TO </span>
                            <span className='text-black'>MAA KARNI LOGISTICS</span>
                        </p>
                        <p>
                            Maa Karni Logistics, a Rs.100 Cr Company, was established in 2011. With a Vision to provide end to end global supply chain management solutions to the Indian industries.Our national footprint consists of strategically located facilities in India with Regional offices and Branch Offices, all India transportation network, warehousing spread near to Airports, Ports & Commercial Hubs.Our commitment as a leading 3PL, 3PP/4PL supply chain management provider allows us to build excellent partnerships with clients.
                        </p>
                        <p className='flex justify-end w-full'>
                            <Link className='bg-amber-700 text-white px-4 py-2 rounded-md' to='/about_us'>Read More</Link>
                        </p>
                    </div>
                    <div className="flex w-1/2 items-baseline justify-end pt-28">
                        <div className="w-4/5">
                            <Lottie
                                animationData={Home1}
                                loop={true}
                                autoplay={true}
                            />
                        </div>
                    </div>
                </div>
                <Services showNav={false} />
                <Products />
            </div>
        </PageWIthNavbar>
    )
}

export default Home
