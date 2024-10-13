'use client';
import { useState } from "react";
import 'primeicons/primeicons.css';

const Section1 = () => {
    const [choice, setChoice] = useState(true);

    return (
        <>
            {choice ? <>
                <h1 className="text-white lg:text-[5rem] md:text-[4rem] sm:text-[3rem] xs:text-[2rem] font-bold">Best Haircut Salon</h1>
                <h1 className="text-white lg:text-[5rem] md:text-[4rem] sm:text-[3rem] xs:text-[2rem] font-bold leading-10">in the City</h1>
            </> : <>
                <h1 className="text-white lg:text-[5rem] md:text-[4rem] sm:text-[3rem] xs:text-[2rem] font-bold">Best Haircut Salon for</h1>
                <h1 className="text-white lg:text-[5rem] md:text-[4rem] sm:text-[3rem] xs:text-[2rem] font-bold leading-10">a Professional Look</h1>
            </>}

            <div className="md:absolute md:visible xs:invisible lg:w-[92%] md:w-[87%] flex justify-between mt-[90px] text-[#b48e40]">
                <i className="pi pi-arrow-circle-left cursor-pointer lg:text-[4rem] md:text-[3rem]"  onClick={() => setChoice(!choice)}></i>
                <i className="pi pi-arrow-circle-right cursor-pointer lg:text-[4rem] md:text-[3rem]" onClick={() => setChoice(!choice)}></i>
            </div>

            {choice ? <button className="font-bold w-fit md:mt-24 sm:mt-6 left-0 px-[2rem] py-[1rem] text-white bg-[#b48e40]">READ MORE <span className="font-bold">{" >> "}</span></button> : 
            <div className="flex sm:flex-row xs:flex-col w-fit sm:gap-x-4 xs:gap-y-3 items-center md:mt-24 sm:mt-6">
                <button className="font-bold w-fit left-0 px-[2rem] py-[1rem] text-white bg-[#b48e40]">READ MORE <span className="font-bold">{'>>'}</span></button>
                <button className="font-bold w-fit left-0 px-[2rem] py-[1rem] text-[#b48e40] border border-[#b48e40]">VIEW ALL SERVICES <span className="font-bold">{" >> "}</span></button>
            </div>}
            
        </>
    )
}

export default Section1
