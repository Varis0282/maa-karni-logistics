import React from 'react';

const Footer = () => {
    return (
        <div className='width-[80%] flex justify-center bg-blue-950 text-slate-200 py-16'>
            <div className="flex flex-row justify-between w-[80%] py-4">
                <div className='flex flex-col w-[30%] gap-y-6'>
                    <div>
                        <span className='bg-green-600 p-2 pr-10 rounded-r-lg'>
                            ABOUT US
                        </span>
                    </div>
                    <div>
                        <span>
                            Maa Karni Logistiks, a Rs.100 Cr Company, was established in 2006. With a Vision to provide end to end global supply chain management solutions to the Indian industries. Our national footprint consists of strategically located facilities in India with Regional offices and Branch Offices, all India transportation network, warehousing spread near to Airports, Ports & Commercial Hubs.
                        </span>
                    </div>
                </div>
                <div className='flex flex-col gap-y-6'>
                    <div>
                        <span className='bg-green-600 p-2 pr-10 rounded-r-lg'>
                            OUR SERVICES
                        </span>
                    </div>
                    <div className='flex gap-x-6'>
                        <div className='flex flex-col gap-y-2 text-xs font-semibold'>
                            <div>PACKING SOLUTION</div>
                            <div>YARD MANAGEMENT</div>
                            <div>SHIPPING</div>
                            <div>CONSULTANCY</div>
                            <div>SHIPPING</div>
                            <div>TRANSPORTATION</div>
                        </div>
                        <div className='flex flex-col gap-y-2 text-xs font-semibold'>
                            <div>RECORD MANAGEMENT</div>
                            <div>VENDOR MANAGEMENT</div>
                            <div>PORT SERVICES</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-[25%] gap-y-6'>
                    <div>
                        <span className='bg-green-600 p-2 pr-10 rounded-r-lg'>
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
                        <div>
                            <span>
                                F-27. James Plaza Square,
                                Asian Paints Chokdi,
                                G.I.D.C. Estate,
                                Ankleshwar - 393 002
                            </span>
                        </div>
                        <div>
                            <span>
                                maakarnilogistics.co.in
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;