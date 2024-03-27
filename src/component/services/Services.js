import React from 'react'
import { packing, yard, logistics1, consult, shipping, transportation, record, vendor, port } from '../../assets';
import { PageWIthNavbar } from '../pagewithNavbar';
import { Footer } from '../footer';


const Services = ({ showNav = true }) => {
    const services = [
        { imgUrl: packing, label: 'PACKING SOLUTION' },
        { imgUrl: yard, label: 'YARD MANAGEMENT' },
        { imgUrl: logistics1, label: 'SHIPPING (SEA AND AIR)' },
        { imgUrl: consult, label: 'CONSULTANCY' },
        { imgUrl: shipping, label: 'SHIPPING (SEA AND AIR)' },
        { imgUrl: transportation, label: 'TRANSPORTATION' },
        { imgUrl: record, label: 'RECORD MANAGEMENT' },
        { imgUrl: vendor, label: 'VENDOR MANAGEMENT' },
        { imgUrl: port, label: 'PORT SERVICES' }
    ];
    if (showNav) {
        return (
            <PageWIthNavbar>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col w-[80%] gap-8 py-4 justify-between">
                        <p className='text-2xl font-bold text-center w-full'>
                            <span className='text-amber-700'>Our </span>
                            <span className='text-black'>Services</span>
                        </p>
                        <div className="flex flex-wrap">
                            {services.map((service, index) => (
                                <div key={index} className="w-1/4 p-4">
                                    <div className="flex flex-col items-center gap-4">
                                        <img src={service.imgUrl} alt={service.label} className="w-full rounded border-amber-600" />
                                        <p className="text-center bg-amber-700 text-white w-full rounded py-1">{service.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </PageWIthNavbar>
        )
    }
    return (
        <div className="flex flex-col w-[80%] gap-8 mt-4 mb-16 py-4 justify-between">
            <p className='text-2xl font-bold text-center w-full'>
                <span className='text-amber-700'>Our </span>
                <span className='text-black'>Services</span>
            </p>
            <div className="flex flex-wrap">
                {services.map((service, index) => (
                    <div key={index} className="w-1/4 p-4">
                        <div className="flex flex-col items-center gap-4">
                            <img src={service.imgUrl} alt={service.label} className="w-full rounded border-amber-600" />
                            <p className="text-center bg-amber-700 text-white w-full rounded py-1">{service.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services
