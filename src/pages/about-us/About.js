import React from 'react'
import { PageWIthNavbar } from '../../component'
import Lottie from 'lottie-react'
import { Home1 } from '../../assets'
import { missionCompass, qualityAssuranceTesting, images } from '../../assets'

const About = () => {
    const content = [
        {
            label: "OUR MISSION",
            description: "Our mission is to provide safe, reliable and environment-friendly transportation solutions that deliver the highest levels of quality and satisfaction to our clients and partners. Our process is Study, Map, Benchmark, Innovate, Agree and Manage.",
            imgUrl: missionCompass
        },
        {
            label: "OUR VISION",
            description: "Our special emphasis is on becoming the undisputed leader in the country by providing uncompromising Logistiks solutions to our esteemed clients. The exceptionally high-quality and reliability of our services will create lasting values for our clients, employees, shareholders and also the industry.",
            imgUrl: qualityAssuranceTesting
        },
        {
            label: "OUR CONCEPT",
            description: "Added value and efficiency - that's what we can offer your business with our fully integrated warehousing, fulfillment, distribution service and flexible response to market demands. Thus improving speed to market, reduce capital investment, increase return on investment and customer satisfaction.",
            imgUrl: images
        }
    ];

    return (
        <PageWIthNavbar>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col w-[80%] gap-8 py-4 justify-between">
                    <div className="flex flex-row">
                        <div className="flex w-1/2 flex-col justify-start items-center gap-8 pt-4">
                            <p className='text-2xl font-bold text-center w-full'>
                                <span className='text-amber-700'>WELCOME TO </span>
                                <span className='text-black'>MAA KARNI LOGISTICS</span>
                            </p>
                            <p className='text-[#707070] text-[14px]'>
                                Maa Karni Logistics, a Rs.100 Cr Company, was established in 2011. With a Vision to provide end to end global supply chain management solutions to the Indian industries.
                                <br />
                                <br />
                                Our national footprint consists of strategically located facilities in India with Regional offices and Branch Offices,
                                all India transportation network, warehousing spread near to Airports, Ports & Commercial Hubs.
                                <br />
                                <br />
                                Our commitment as a leading 3PL, 3PP/4PL supply chain management provider allows us to build excellent partnerships with clients.
                                <br />
                                <br />
                                A growing awareness that competitive advantage comes from Logistiks management as much as from the product has been instrumental in upgrading Logistiks from its traditional backroom function to a strategic boardroom function. G L Logistiks helps in gaining same competitive advantage by providing more Reliability, Flexibility and compliance in Logistiks.
                                <br />
                                <br />
                                G L Logistiks as a Logistiks partner will focus on improving Processes, Productivity, Waste elimination and Meeting Client Standards.
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
                    <div className="flex flex-row gap-12">
                        {content.map((item, index) => (
                            <div className="flex flex-col w-1/3 gap-4" key={index}>
                                <p className='text-2xl font-bold text-center w-full'>
                                    <span className='text-amber-700'>{item.label.split(' ')[0]} </span>
                                    <span className='text-black'>{item.label.split(' ')[1]}</span>
                                </p>
                                <div>
                                    <img src={item.imgUrl} alt={item.label} className="w-full rounded border-amber-600 border" />
                                </div>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageWIthNavbar>
    )
}

export default About
