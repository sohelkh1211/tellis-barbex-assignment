import Image from "next/image";
import Link from "next/link";

import 'primeicons/primeicons.css';

import logo from './assets/logo.png';
import about1 from './assets/about-1.png';
import about2 from './assets/about-2.png';
import about3 from './assets/about-3.png';
import hair_trim from './assets/hair-trim.png';
import working_hours from './assets/working_hours.png';

import SearchIcon from '@mui/icons-material/Search';
import DoneSharpIcon from '@mui/icons-material/DoneSharp';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import Menu from "./components/Menu";
import Section1 from "./components/Section1";
import Services from "./components/Services";
import Products from "./components/Products";

export default function Home() {
  const timings = [{
    day: 'Monday',
    time: '9: AM - 6: PM'
  }, {
    day: 'Thursday',
    time: '11: AM - 8: PM'
  }, {
    day: 'Wednesday',
    time: '6: AM - 4: PM'
  }];

  return (
    <>
      <nav className="fixed flex top-0 z-10 sm:px-12 xs:px-6 py-8 w-full justify-between items-center bg-black border-b-[1px] border-slate-500">
        <Image src={logo} alt="logo" className="w-[150px] cursor-pointer" />

        <ul className="md:flex xs:hidden list-none gap-x-8 text-white items-center">
          <li className="hover:text-[#b48e40] cursor-pointer font-bold"> <Link href="/">Home</Link></li>
          <li className="hover:text-[#b48e40] cursor-pointer font-bold"> <Link href="/">Pages</Link></li>
          <li className="hover:text-[#b48e40] cursor-pointer font-bold"> <Link href="/">Shop</Link></li>
          <li className="hover:text-[#b48e40] cursor-pointer font-bold"> <Link href="/">Blog</Link></li>
          <li className="hover:text-[#b48e40] cursor-pointer font-bold"> <Link href="/">Contact</Link></li>
          <SearchIcon className="text-white cursor-pointer" />
          <button className="grow_ellipse custom-button">BOOKING NOW <span className="font-bold">{'>>'}</span></button>
        </ul>

        <Menu />

      </nav>

      {/* Section 1 */}
      <section className="flex flex-col w-full lg:mt-[7.5rem] md:mt-[6rem] sm:mt-[6.4rem] xs:mt-[6.5rem] md:px-12 md:py-20 sm:py-32 xs:py-32 md:items-start xs:items-center bg-black">
        <p className="text-[#b48e40] font-bold sm:text-[16px] xs:text-[22px]">Welcome To Our Barbex</p>

        <Section1 />
      </section>

      {/* About us */}
      <section className="flex py-36 w-full">
        <div className="flex lg:flex-row xs:flex-col md:gap-x-44 xs:gap-y-40 pb-[6.5rem] mx-auto justify-center items-center border-none border-black">
          <div className="flex justify-center xs:pr-[25%] sm:pr-0">
            <Image src={about1} className="flex sm:w-[22rem] xs:w-[12rem]" />
            <Image src={about2} className="absolute flex sm:w-[9rem] xs:w-[7rem] sm:ml-[26rem] xs:ml-[16rem] sm:mt-[2rem] xs:mt-[1rem]" />
            <Image src={about3} className="absolute flex sm:w-[20rem] xs:w-[10rem] sm:ml-[17rem] xs:ml-[10rem] sm:mt-[16rem] xs:mt-[10rem] sm:border-[15px] xs:border-[10px] border-white" />
          </div>

          <div className="flex flex-col w-fit mx-auto">
            <p className="text-[#b48e40] text-[20px] font-bold">About us</p>
            <h1 className="font-semibold sm:text-[45px] xs:text-[1.5rem]">Best Haircut Salons<br />  For Men Women</h1>

            <p className="sm:w-[30rem] xs:w-[20rem] mt-6 font-serif">Haircut" is a term used to describe when a person removes the hair on their head. This is done to allow for better access to the part of the body that needs cutting.</p>

            <p className="sm:w-[30rem] xs:w-[20rem] mt-6 border-l-[2px] border-[#b48e40] pl-4">We're a leading independent salon in Dubai, offering everything from haircuts to exfoliation</p>

            <button className="font-bold mt-10 w-fit left-0 px-[2rem] py-[1rem] text-white bg-[#b48e40]">READ MORE <span className="font-bold">{'>>'}</span></button>
          </div>

        </div>
      </section>

      {/* Our Services */}
      <section className="flex flex-col bg-slate-50 pb-10">
        <p className="text-[#b48e40] w-fit mx-auto font-bold">Our Services</p>
        <h1 className="w-fit mx-auto sm:text-[40px] xs:text-[30px] font-bold">Popular Hair Cutting</h1>
        <h1 className="w-fit mx-auto sm:text-[40px] xs:text-[30px] font-bold">And Salon</h1>

        <Services />
      </section>

      {/* Hair Trim */}
      <section className="flex lg:flex-row xs:flex-col lg:gap-x-20 xs:gap-y-10 py-10">
        <Image src={hair_trim} alt="hair_trim" className="lg:w-[40%] sm:w-[30rem] xs:w-[20rem] xs:mx-auto lg:ml-[5rem]" />

        <div className="flex flex-col w-fit mx-auto">
          <h1 className="font-bold sm:text-[2rem] xs:text-[1.5rem]">Best Facial Hair Trim At<br /> Home Treatment</h1>
          <p className="sm:w-[34rem] xs:w-[18rem] mt-6">Phasellus vitae purus ac urna consequat facilisis a vel leo. Maecenas hendrerit lacinia mollis. Fusce in leo lectus. Phasellus leo mi, pellentesque nec risus malesuada, volutpat porta ligula.</p>

          <div className="flex gap-x-2 items-center mt-4 w-fit">
            <div className="size-6 px-1 bg-[#ecce92] border rounded-full">
              <DoneSharpIcon className="text-[#b48e40]" sx={{ fontSize: '15px' }} />
            </div>
            <p className="">Easy to use salon special offer navigation</p>
          </div>

          <div className="flex gap-x-2 items-center mt-4 w-fit">
            <div className="size-6 px-1 bg-[#ecce92] border rounded-full">
              <DoneSharpIcon className="text-[#b48e40]" sx={{ fontSize: '15px' }} />
            </div>
            <p className="">We care about our customers satisfaction</p>
          </div>

          <button className="font-bold mt-10 w-fit left-0 px-[2rem] py-[1rem] text-white bg-[#b48e40]">BOOKING APPOINTMENT <span className="font-bold">{'>>'}</span></button>

        </div>
      </section>

      {/* Booking Appointment */}
      <section className={`flex mt-20 px-20 py-20`}>
        <div className="flex lg:flex-row xs:flex-col gap-y-10 w-full justify-between">

          <div className="flex flex-col w-fit xs:mx-auto lg:mx-0">
            <p className="text-[#b48e40] w-fit xs:mx-auto lg:mx-0">Booking now</p>
            <h1 className="font-bold sm:text-[45px] xs:text-[1.5rem] w-fit xs:mx-auto lg:mx-0">Book your appointment<br /> online And call our salon</h1>

            <button className="font-bold xs:mx-auto lg:mx-0 mt-10 w-fit left-0 px-[2rem] py-[1rem] text-white bg-[#b48e40]">BOOKING APPOINTMENT <span className="font-bold">{'>>'}</span></button>
          </div>

          <div className="flex flex-col w-fit xs:mx-auto sm:mx-0 h-fit sm:px-16 sm:py-14 xs:px-12 xs:py-10 border border-slate-400">
            <div className="size-[4rem] w-fit mx-auto p-4 rounded-full bg-[#ffedc9]">
              <i className="pi pi-phone text-[2rem] text-[#b48e40] font-bold" />
            </div>

            <p className="mt-7 font-bold w-fit mx-auto">Call Now</p>
            <h1 className="font-bold sm:text-[20px] xs:text-[12px]">+123 (568) 584</h1>
          </div>

        </div>
      </section>

      {/* Our Products */}
      <section className="flex flex-col mt-12">
        <p className="text-[#b48e40] font-bold text-[20px] w-fit mx-auto">Our products</p>
        <h1 className="font-bold md:text-[2.8rem] sm:text-[2rem] xs:text-[1.5rem] w-fit mx-auto text-center">Evoke the experience of one of our<br /> barber shops</h1>

        <Products />
      </section>

      {/* Working Hours */}
      <section className="flex lg:flex-row xs:flex-col w-full mt-32">
        <Image src={working_hours} alt="working_hours" className="flex lg:w-[60%] xs:w-full" />
        <Link href="https://www.youtube.com/watch?v=0WC-tD-njcA" target="_blank" rel="noopener noreferrer" className="absolute lg:ml-[25%] xs:ml-[45%] md:mt-[15rem] xs:mt-[6rem] "><PlayCircleIcon className="md:text-[10rem] sm:text-[5rem] xs:text-[5rem] text-white" /></Link>

        <div className="flex flex-col py-20 lg:w-[40%] bg-[#b48e40]">
          <h1 className="text-white sm:text-[3rem] xs:text-[2.5rem] font-bold w-fit mx-auto">Working Hours</h1>
          <p className="mt-8 w-[20rem] text-white font-serif mx-auto">Fusce id lorem risus. Duis mattis, nulla et placerat pretium, purus ex luctus nisi</p>

          <div className="flex flex-col gap-y-1 mt-8 w-[20rem] mx-auto">
            {timings.map((time, index) => (
              <div key={time}>

                <div className="flex justify-between">
                  <h1 className="text-white text-[20px]">{time.day}</h1>
                  <h1 className="text-white text-[20px]">{time.time}</h1>
                </div>
                <p className="text-white font-light">--------------------------------------------------</p>

              </div>
            ))}
          </div>

          <button className="font-bold mt-10 w-fit mx-auto px-[2rem] py-[1rem] text-white border border-white">BOOKING APPOINTMENT <span className="font-bold">{'>>'}</span></button>

        </div>
      </section>
    </>
  );
}
