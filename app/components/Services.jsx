'use client';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';
import service4 from '../assets/service4.png';
import service5 from '../assets/service5.png';

import Image from 'next/image';

const Services = () => {
    const services = [{
        name: "Trend Haircut",
        logo: service1
    },
    {
        name: "Hair Washing",
        logo: service2
    },
    {
        name: "Hair Color",
        logo: service3
    },
    {
        name: "Facial hair trim",
        logo: service3
    },
    {
        name: "Lather shave",
        logo: service4
    },
    {
        name: "Head Massage",
        logo: service5
    }]
    return (
        <div className='flex flex-wrap w-[80%] gap-x-5 gap-y-5 mt-10 mx-auto '>
            {
                services.map((service, index) => (
                    <div key={`service_${index + 1}`} className='flex flex-col justify-center items-center gap-y-4 size-[10rem] bg-white border-[2px] border-slate-200 mx-auto cursor-pointer'>
                        <Image src={service.logo} alt={`service-${index}`} className='' />
                        <h1 className='font-bold text-[20px]'>{service.name}</h1>
                    </div>
                ))
            }
        </div>

    )
}

export default Services
