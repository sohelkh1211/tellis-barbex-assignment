import Image from "next/image";
import Link from "next/link";

import 'primeicons/primeicons.css';

import logo from './assets/logo.png';
import about1 from './assets/about-1.png';
import about2 from './assets/about-2.png';
import about3 from './assets/about-3.png';
import hair_trim from './assets/hair-trim.png';
import working_hours from './assets/working_hours.png';
import user1 from './assets/user1.png';
import user2 from './assets/user2.png';
import blog1 from './assets/blog1.png';
import blog2 from './assets/blog2.png';
import blog3 from './assets/blog3.png';
import footer1 from './assets/footer1.png';
import footer2 from './assets/footer2.png';
import footer3 from './assets/footer3.png';
import footer4 from './assets/footer4.png';
import footer5 from './assets/footer5.png';

import SearchIcon from '@mui/icons-material/Search';
import DoneSharpIcon from '@mui/icons-material/DoneSharp';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { faSnapchat } from "@fortawesome/free-brands-svg-icons";

// import '@fortawesome/fontawesome-free/css/all.min.css';

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

  const reviews = [{
    image: user1,
    name: 'Devin Booker',
  }, {
    image: user2,
    name: 'Michelle Yeoh',
  }];

  const blogs = [{
    image: blog1,
    label: 'Haircutting',
    date: '30 June, 2022',
    text: 'We are a Haircut Salon Based in South Melbourne'
  }, {
    image: blog2,
    label: 'Hair Color',
    date: '25 June, 2022',
    text: 'Online booking appoitment For Salon, Hair Salon'
  }, {
    image: blog3,
    label: 'Lather Shave',
    date: '21 June, 2022',
    text: 'Customising your shave is Fun and easy'
  }];

  const images = [{
    image: footer1
  }, {
    image: footer2
  }, {
    image: footer3
  }, {
    image: footer4
  }, {
    image: footer5
  }, {
    image: about1
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

      <section className="flex sm:px-14 py-24">
        <div className="flex lg:flex-row xs:flex-col w-full gap-y-10">

          <div className="flex flex-col lg:w-[25rem] mx-auto">
            <p className="text-[#b48e40] font-bold lg:text-start xs:text-center">Testimonial</p>
            <h1 className="font-bold sm:text-[3rem] xs:text-[2rem] lg:text-start xs:text-center">What Our Customer Say's</h1>

            <p className="font-serif sm:w-auto xs:w-[15rem] lg:text-start xs:text-center mx-auto text-slate-600">Barber Trading Style and Proven Strategy to Make a Living</p>

            <button className="font-bold mt-10 w-fit left-0 px-[2rem] py-[1rem] sm:mx-0 xs:mx-auto text-[#b48e40] border border-[#b48e40]">WRITE REVIEW <span className="font-bold">{'>>'}</span></button>
          </div>

          <div className="flex lg:flex-nowrap xs:flex-wrap gap-y-8 gap-x-4">
            {reviews.map((review, index) => (
              <div key={`review_${index + 1}`} className="flex flex-col lg:px-4 sm:px-8 xs:px-4 py-10 mx-auto border border-slate-400">
                <Image src={review.image} alt={`${review.name}_review`} className="mx-auto" />
                <p className="font-serif mt-5 text-center w-[15rem]">Proin vel ipsum id risus ultrices scelerisque. Suspendisse mattis sit amet leo vel convallis.</p>

                <div className='flex w-fit mx-auto mt-6 gap-x-1'>
                  {Array.from({ length: 5 }).map((value, i) => (
                    <i key={`star_${i + 1}`} className={`pi pi-star-fill ${i === 4 ? 'text-slate-300' : 'text-[#b48e40]'} `} />
                  ))}
                </div>
                <p className="w-fit mx-auto font-bold text-[20px]">{review.name}</p>

                <p className="mt-4 w-fit mx-auto text-[14px]">Regular User</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Blogs and News */}
      <section className="flex flex-col">
        <p className="text-[#b48e40] font-bold w-fit mx-auto text-[20px]">Blog And Article</p>
        <h1 className="font-bold sm:text-[3rem] xs:text-[1.5rem] w-fit mx-auto">Read Our Blog and News</h1>

        <div className="flex flex-wrap gap-y-4 mt-10 gap-x-4 lg:w-fit md:w-[42rem] xs:w-[20rem] mx-auto">

          {blogs.map((blog, blog_index) => (
            <div key={`blog_${blog_index + 1}`} className="flex flex-col pb-8 border border-slate-400">
              <Image src={blog.image} alt={`blog_${blog_index + 1}`} className="w-[20rem] cursor-pointer" />

              <div className="flex items-center gap-x-2 mt-8 w-[16rem] mx-auto">
                <button className="px-2.5 py-1 bg-[#b48e40] text-white font-bold">{blog.label}</button>
                <CalendarMonthOutlinedIcon className="text-[#b48e40] text-[1.2rem]" />
                <p className="items-center mt-1 font-bold hover:text-[#b48e40] cursor-pointer">{blog.date}</p>
              </div>

              <h1 className="w-[16rem] text-[20px] font-bold mt-4 mx-auto cursor-pointer hover:text-[#b48e40]">{blog.text}</h1>

              <button className="mt-4 ml-8 text-start w-fit font-bold">READ MORE <span className="font-bold">{`>>`}</span></button>
            </div>
          ))}

        </div>
      </section>

      {/* Footer images */}
      <section className="flex mt-24">
        <div className="flex flex-wrap gap-2 lg:w-[82%] md:w-[66%] mx-auto">
          {images.map((image, image_index) => (
            <Image key={`image_${image_index}`} src={image.image} alt={`image_${image_index}`} className="size-[10rem] bg-cover mx-auto" />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col -mt-16 bg-black">
        <div className="flex items-center lg:flex-row xs:flex-col gap-x-40 gap-y-20 mt-40 w-fit mx-auto">

          <div className="flex flex-col gap-y-6">
            <Image src={logo} alt="logo" className="w-[150px] lg:mx-0 xs:mx-auto" />

            <ul className="list-none flex flex-wrap gap-x-4 sm:text-[16px] xs:text-[14px] text-white hover:text-[#b48e40]">
              <li className="mx-auto">Trend Haircut</li>
              <li className="mx-auto">Hair Washing</li>
              <li className="mx-auto">Hair Coloring</li>
              <li className="mx-auto">Facial Hair Trim</li>
            </ul>
          </div>

          <div className="flex w-fit h-fit">
            <input type="email" placeholder="Email Address" className="outline-none text-white sm:pl-6 sm:pr-40 sm:py-4 xs:pl-3 xs:pr-16 xs:py-2 bg-transparent caret-white border border-[#b48e40]" />
            <div className="sm:size-[3.6rem] xs:size-[2.56rem] bg-[#b48e40] border border-[#b48e40] cursor-pointer">
              <Link href="/"><FontAwesomeIcon icon={faHandPointer} className="sm:p-5 xs:p-3 z-20 text-white" /></Link>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row xs:flex-col gap-y-8 mt-20 lg:px-14 py-10 border-t-[1px] border-slate-100">
          <p className="font-serif text-white lg:mx-0 xs:mx-auto text-center">Copyright © 2022 <span className="text-[#b48e40]">Mohammed Sohel</span> Website by Barbex</p>

          <div className="flex gap-x-6 items-center w-fit lg:ml-[35%] lg:mx-0 xs:mx-auto">
            <i className="pi pi-facebook text-white hover:text-[#b48e40] cursor-pointer" />
            <FontAwesomeIcon icon={faBehance} className="text-white w-[20px] hover:text-[#b48e40] cursor-pointer"/>
            <TwitterIcon className="text-white w-[20px] hover:text-[#b48e40] cursor-pointer" />
            <i className="pi pi-linkedin  text-white hover:text-[#b48e40] cursor-pointer" />
            <FontAwesomeIcon icon={faSnapchat} className="text-white w-[20px] hover:text-[#b48e40] cursor-pointer" />
            <i className="pi pi-pinterest text-white hover:text-[#b48e40] cursor-pointer" />
            <i className="pi pi-youtube text-white hover:text-[#b48e40] cursor-pointer" />
          </div>
        </div>
      </footer>
    </>
  );
}
