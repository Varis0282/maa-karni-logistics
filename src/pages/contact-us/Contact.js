import React from 'react'
import { Carousel, PageWIthNavbar, Products, Services } from '../../component'
import Lottie from 'lottie-react';
import { Home1 } from '../../assets';
import { Link } from 'react-router-dom';
import { Footer } from '../../component/footer';


const Contact = () => {
    return (
        <PageWIthNavbar>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col w-[80%] mt-4 mb-16 py-4 justify-between gap-y-4">
                    <span className="text-2xl text-cyan-800">
                        Contact Us
                    </span>
                    <div className='flex gap-10 flex-wrap'>
                        <div className='flex'>
                            <div className='flex flex-col gap-y-2'>
                                <div>
                                    <span>
                                        HEAD OFFICE
                                    </span>
                                </div>
                                <div className='flex flex-col gap-y-2 text-sm'>
                                    <div>
                                        <span>
                                            Contact : Sanjay Singh Shekhawat
                                        </span>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                (+91) 91730 92721
                                            </span>
                                        </div>
                                        <div>
                                            <span>
                                                (+91) 93775 21201
                                            </span>
                                        </div>
                                    </div>
                                    <div className='w-[20rem]'>
                                        <span>
                                            F-27. James Plaza Square,
                                            Asian Paints Chokdi,
                                            G.I.D.C. Estate,
                                            Ankleshwar - 393 002
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col gap-y-2'>
                                <div>
                                    <span>
                                        OUR BRANCH
                                    </span>
                                </div>
                                <div className='flex flex-col gap-y-2 text-sm'>
                                    <div>
                                        <span>
                                            Contact : Rajveer Singh
                                        </span>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                (+91) 77173 14313
                                            </span>
                                        </div>
                                    </div>
                                    <div className='w-[20rem]'>
                                        <span>
                                            B-23/2818R transport nagar
                                            Opp plot no 112 back side Goodwill
                                            Dharm kanda Ludhiana 141003
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col gap-y-2'>
                                <div>
                                    <span>
                                        OUR BRANCH
                                    </span>
                                </div>
                                <div className='flex flex-col gap-y-2 text-sm'>
                                    <div>
                                        <span>
                                            Contact : Vikram Singh
                                        </span>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                (+91) 91730 92721
                                            </span>
                                        </div>
                                    </div>
                                    <div className='w-[20rem]'>
                                        <span>
                                            203, Soham parking mekdonaldes restorent ke pass NH.8, Karodara, Surat.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col gap-y-2'>
                                <div>
                                    <span>
                                        OUR BRANCH
                                    </span>
                                </div>
                                <div className='flex flex-col gap-y-2 text-sm'>
                                    <div>
                                        <span>
                                            Contact : Omprakash Singh
                                        </span>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                (+91) 63782 21104
                                            </span>
                                        </div>
                                    </div>
                                    <div className='w-[20rem]'>
                                        <span>
                                            Hemu Plaza, 1st floor,
                                            Station Road Vile Parle,
                                            Mumbai - 400 056
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col gap-y-2'>
                                <div>
                                    <span>
                                        OUR BRANCH
                                    </span>
                                </div>
                                <div className='flex flex-col gap-y-2 text-sm'>
                                    <div>
                                        <span>
                                            Contact : Bharat Singh
                                        </span>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                (+91) 93775 21201
                                            </span>
                                        </div>
                                    </div>
                                    <div className='w-[20rem]'>
                                        <span>
                                            A-611 Opposit of Udyog bhawan,
                                            tilak marg, C- scheme,
                                            Jaipur -302 005
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </PageWIthNavbar>
    )
}

export default Contact
