import React from "react";
import { useState } from "react";
import pic from "../../assets/pic.jpg";
import deal from "../../assets/deal.png";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Mostpopular from "../../Componets/Mostpopular";
import mouse from "../../assets/mouse.png";
import Newsletter from "../../Componets/Newsletter";

function Homepage() {
  return (
    <>
      {/* version 1 */}
      {/* lg:px-14 md:px-7 sm:px-4 px-3 */}
      {/* version 2 */}
      {/* lg:px-32 md:px-7 sm:px-4 px-3 */}
      <div className="w-full h-auto bg-acent xl:px-32 lg:px-20 md:px-7 sm:px-4 px-3">
        <div className="flex flex-col-reverse md:flex-row justify-between w-full p- pt-28  items-center">
          {" "}
          <div className="lg:w-1/2 w-full h-auto flex flex-col space-y-10 p-3 ">
            <h1 className="uppercase font-bold text-primary xl:text-4xl lg:text-3xl md:text-2xl text-xl">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="xl:text-xl md:text-lg sm:text-base text-base">
              Lorem ipsum dolor sit amet consectetur. Consequat tellus{" "}
              <br className="hidden lg:flex" /> mi duis a. Vitae eget lorem
              risus venenatis enim velit.
              <br className="hidden lg:flex" /> Proin morbi vitae sed
              pellentesque euismod.
            </p>
            <button className="p-4 w-80 bg-primary text-secondary uppercase">
              view collection
            </button>
          </div>
          <div className="lg:w-1/2 w-full h-auto flex md:justify-end justify-center xl:pr-16 lg:pr- md:pr- pr-0 ">
            <div className="md:w-[400px] lg:w-[500px] md:h-[400px] w-full h-auto bg-slate-100 ">
              <img src={pic} className="w-full h-full" alt="" />
            </div>
          </div>
        </div>
        <div className=" hidden md:flex justify-end space-x-24 p-5 mt-5">
          <button className="w-10 h-10 bg-black text-white flex items-center justify-center ">
            <ArrowLeftIcon className="h-6 w-6 text-white" />
          </button>
          <button className="w-10 h-10 bg-black text-white flex items-center justify-center">
            <ArrowRightIcon className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
      <div className="w-full h-auto xl:px-32 lg:px-20 md:px-7 sm:px-4 px-3 mt-7">
        <div className="w-full h-auto flex flex-col gap-y-4 p-3 ">
          <h1 className="font-bold lg:text-4xl md:text-3xl sm:text-2xl text-2xl">
            Product Categories
          </h1>
          <h1>
            Product Categories Sed ut perspiciatis unde omnis iste <br />{" "}
            natuser sit voluptatem accusantium dolore.
          </h1>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:gap-16 md:gap-8 gap-6 p-3 mt-10 ">
          <div className="flex justify-center">
            {/*  */}
            <div className="w-[300px] h-[95px] flex justify-center items-center bg-slate-50 drop-shadow-[0_35px_35px_rgba(51,97,216,0.25)]   ">
              <p className="font-bold lg:text-3xl md:text-2xl text-xl">
                Camera
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            {/*  */}
            <div className="w-[300px] h-[95px] flex justify-center items-center bg-slate-50 drop-shadow-[0_35px_35px_rgba(51,97,216,0.25)]   ">
              <p className="font-bold lg:text-3xl md:text-2xl text-xl">
                Camera
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            {/*  */}
            <div className="w-[300px] h-[95px] flex justify-center items-center bg-slate-50 drop-shadow-[0_35px_35px_rgba(51,97,216,0.25)]   ">
              <p className="font-bold lg:text-3xl md:text-2xl text-xl">
                Camera
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            {/*  */}
            <div className="w-[300px] h-[95px] flex justify-center items-center bg-slate-50 drop-shadow-[0_35px_35px_rgba(51,97,216,0.25)]   ">
              <p className="font-bold lg:text-3xl md:text-2xl text-xl">
                Camera
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            {/*  */}
            <div className="w-[300px] h-[95px] flex justify-center items-center bg-slate-50 drop-shadow-[0_35px_35px_rgba(51,97,216,0.25)]   ">
              <p className="font-bold lg:text-3xl md:text-2xl text-xl">
                Camera
              </p>
            </div>
          </div>{" "}
          <div className="flex justify-center">
            {/*  */}
            <div className="w-[300px] h-[95px] flex justify-center items-center bg-slate-50 drop-shadow-[0_35px_35px_rgba(51,97,216,0.25)]   ">
              <p className="font-bold lg:text-3xl md:text-2xl text-xl">
                Camera
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full h-auto bg-acent mt-36 xl:px-32 lg:px-20 md:px-7 sm:px-4 px-3 ">
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-16 md:gap-8 gap-6 p-3 mt-10 py-32">
          <div className="flex justify-center flex-col items-center space-y-4">
            <h1 className="font-bold text-xl">100% Free Shipping</h1>
            <p className="font-normal text-lg">
              Lorem ipsum dolor <br /> sit amet consectetur.{" "}
            </p>
          </div>
          <div className="flex justify-center flex-col items-center space-y-4">
            <h1 className="font-bold text-xl">100% Free Shipping</h1>
            <p className="font-normal text-lg">
              Lorem ipsum dolor <br /> sit amet consectetur.{" "}
            </p>
          </div>
          <div className="flex justify-center flex-col items-center space-y-4">
            <h1 className="font-bold text-xl">100% Free Shipping</h1>
            <p className="font-normal text-lg">
              Lorem ipsum dolor <br /> sit amet consectetur.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* weekly deals */}
      <div className="w-full h-auto xl:px-32 lg:px-20 md:px-7 sm:px-4 px-3 mt-7 ">
        <div className="w-full h-auto flex flex-col-reverse md:flex-row md:justify-between justify-end  bg-slate-200 pt-20 xl:px-36 lg:px-24 md:px-10  px-3">
          <div className="flex flex-col md:items-start items-center  space-y-5 md:mt-20 mt-10 pb-6 md:pb-0">
            <h1 className="font-bold text-5xl">Weekly Deal</h1>
            <p className="font-bold text-2xl text-tertiary">$170.00</p>
            <div className="flex space-x-3 font-bold items-center">
              <div className="flex flex-col items-center ">
                <h1 className="font-bold text-5xl">0</h1>
                <p className="font-medium">Days</p>
              </div>
              <div className="flex  flex-col items-center">
                <h1 className="font-bold text-5xl">0</h1>
                <p className="font-medium">Hours</p>
              </div>{" "}
              <div className="flex flex-col items-center ">
                <h1 className="font-bold text-5xl">0</h1>
                <p className="font-medium">Minutes</p>
              </div>{" "}
              <div className="flex  flex-col items-center">
                <h1 className="font-bold text-5xl">0</h1>
                <p className="font-medium">Seconds</p>
              </div>
            </div>
            <button className="p-4 w-44 bg-primary text-secondary uppercase">
              shop now
            </button>
          </div>
          <div className="flex md:justify-start justify-center">
            <img src={deal} className="h-[500px] " alt="" />
          </div>
        </div>
      </div>
      {/* porducts */}

      {/* <div className="w-full h-auto xl:px-32 lg:px-20 md:px-7 sm:px-4 px-3 mt-7 space-y-20 ">
        <div className="w-full h-auto flex flex-col space-y-5">
          <h1 className="font-bold text-4xl">Most Popular</h1>
          <div className="flex space-x-20">
            <h1>all</h1>
            <h1>all</h1>
            <h1>all</h1>
            <h1>all</h1>
          </div>
        </div>
      </div> */}

      <Mostpopular />
      {/*  */}
      <Newsletter />
    </>
  );
}

export default Homepage;

//how to create a sign up page in tailwindcss
