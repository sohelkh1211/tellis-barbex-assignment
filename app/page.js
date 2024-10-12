import Image from "next/image";
import logo from './assets/logo.png';
import about1 from './assets/about-1.png';
import about2 from './assets/about-2.png';
import about3 from './assets/about-3.png';

import SearchIcon from '@mui/icons-material/Search';

import Menu from "./components/Menu";
import Section1 from "./components/Section1";
import Link from "next/link";

export default function Home() {
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

      <section className="flex flex-col w-full lg:mt-[7.5rem] md:mt-[6rem] sm:mt-[6.4rem] xs:mt-[6.5rem] md:px-12 md:py-20 sm:py-32 xs:py-32 md:items-start xs:items-center bg-black">
        <p className="text-[#b48e40] font-bold sm:text-[16px] xs:text-[22px]">Welcome To Our Barbex</p>

        <Section1 />
      </section>

      <section className="flex py-36 w-full">
        <div className="flex lg:flex-row xs:flex-col md:gap-x-44 xs:gap-y-40 pb-[6.5rem] mx-auto justify-center items-center border-none border-black">
          <div className="flex justify-center xs:pr-[25%] sm:pr-0">
            <Image src={about1} className="flex sm:w-[22rem] xs:w-[12rem]" />
            <Image src={about2} className="absolute flex sm:w-[9rem] xs:w-[7rem] sm:ml-[26rem] xs:ml-[16rem] sm:mt-[2rem] xs:mt-[1rem]" />
            <Image src={about3} className="absolute flex sm:w-[20rem] xs:w-[10rem] sm:ml-[17rem] xs:ml-[10rem] sm:mt-[16rem] xs:mt-[10rem] sm:border-[15px] xs:border-[10px] border-white" />
          </div>

          <div className="flex flex-col">
            <p className="text-[#b48e40] text-[20px] font-bold">About us</p>
            <h1 className="font-semibold text-[45px]">Best Haircut Salons<br />  For Men Women</h1>

            <p className="sm:w-[30rem] xs:w-[20rem] mt-6 font-serif">Haircut" is a term used to describe when a person removes the hair on their head. This is done to allow for better access to the part of the body that needs cutting.</p>

            <p className="sm:w-[30rem] xs:w-[20rem] mt-6 border-l-[2px] border-[#b48e40] pl-4">We're a leading independent salon in Dubai, offering everything from haircuts to exfoliation</p>

            <button className="font-bold mt-10 w-fit left-0 px-[2rem] py-[1rem] text-white bg-[#b48e40]">READ MORE <span className="font-bold">{'>>'}</span></button>
          </div>

        </div>
      </section>

      <section className="flex flex-col border border-purple-500">
        <p className="text-[#b48e40] w-fit mx-auto font-bold">Our Services</p>
        <h1 className="w-fit mx-auto sm:text-[40px] xs:text-[30px] font-bold">Popular Hair Cutting</h1>
        <h1 className="w-fit mx-auto sm:text-[40px] xs:text-[30px] font-bold">And Salon</h1>

        
      </section>

    </>
  );
}
