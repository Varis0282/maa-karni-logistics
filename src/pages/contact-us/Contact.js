import React from 'react';
import { PageWIthNavbar } from '../../component';
import { Home1 } from '../../assets';
import { Footer } from '../../component/footer';

const branches = [
    {
        name: "HEAD OFFICE ANKLESHWAR",
        contact: "Sanjay Singh Shekhawat",
        phone1: "(+91) 91730 92721",
        phone2: "(+91) 93775 21201",
        address: "F-27. James Plaza Square, Asian Paints Chokdi, G.I.D.C. Estate, Ankleshwar - 393 002"
    },
    {
        name: "LUDHIANA BRANCH",
        contact: "Rajveer Singh",
        phone1: "(+91) 77173 14313",
        address: "B-23/2818R transport nagar, Opposite plot no 112 back side Goodwill Dharm kanda, Ludhiana 141003"
    },
    {
        name: "SURAT BRANCH",
        contact: "Vikram Singh",
        phone1: "(+91) 91730 92721",
        address: "203, Soham parking, Near Mcdonald's Restaurant NH.8, Karodara, Surat."
    },
    {
        name: "MUMBAI BRANCH",
        contact: "Omprakash Singh",
        phone1: "(+91) 63782 21104",
        address: "Hemu Plaza, 1st floor, Station Road Vile Parle, Mumbai - 400 056"
    },
    {
        name: "JAIPUR BRANCH",
        contact: "Bharat Singh",
        phone1: "(+91) 93775 21201",
        address: "A-611 Opposite of Udyog bhawan, Tilak marg, C- scheme, Jaipur -302 005"
    }
];

const Contact = () => {
    return (
        <PageWIthNavbar>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col w-[80%] mt-4 mb-16 py-4 justify-between gap-y-4">
                    <span className="text-2xl text-cyan-800">Contact Us</span>
                    <div className='flex gap-10 flex-wrap'>
                        {branches.map(branch => (
                            <div key={branch.name}>
                                <div className='flex flex-col gap-y-2'>
                                    <div className='flex flex-col'>
                                        <span>{branch.name}</span>
                                    </div>
                                    <div className='flex flex-col gap-y-2 text-sm'>
                                        <div>
                                            <span>Contact: {branch.contact}</span>
                                        </div>
                                        <div>
                                            <span>{branch.phone1}</span>
                                            {branch.phone2 && <span>{branch.phone2}</span>}
                                        </div>
                                        <div className='w-[20rem]'>
                                            <span>{branch.address}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </PageWIthNavbar>
    );
};

export default Contact;
