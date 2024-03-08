"use client";
import Image from "next/image";
import HeroImg from "../assets/image/HeroImg.png";
import CoffeeImg1 from "../assets/image/coffee-img-1.png";
import CoffeeImg2 from "../assets/image/coffee-img-2.png";
import CoffeeImg3 from "../assets/image/coffee-img-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <div className="hero">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className=""
      >
        {[1, 2, 3, 4].map((index) => (
          <SwiperSlide key={index}>
            <div className='bg-[url("../assets/image/hero-bg.png")] bg-center bg-contain bg-no-repeat py-10 lg:py-[40px]'>
              <div
                className="main-container mx-auto flex flex-col justify-center lg:flex-row lg:justify-between items-center"
                id="home"
              >
                <div className="w-full lg:w-2/4  space-y-4 mt-14 lg:mt-0">
                  <h4 className="font-Lemon text-primaryColor font-normal text-sm lg:text-base">
                    WELCOME TO OUR
                  </h4>
                  <h1 className="font-normal font-BakildaHistori text-primaryColor  text-[55px] lg:text-[110px] text-start leading-tight">
                    Unlocklive
                  </h1>
                  <h1 className="font-BakildaHistori text-primaryColor text-3xl lg:text-4xl ">
                    Elevating Your Coffee Experience
                  </h1>
                  <p className="pt-1 lg:pt-3  font-normal text-base text-primaryColor font-ValueSansPro">
                    Unlocklive embodies our commitment to transforming the
                    simple act of sipping coffee into a refined and memorable
                    journey. At Epicurean, we take pride in curating an
                    exceptional coffee experience that transcends the ordinary.
                  </p>
                  <div className="flex flex-col lg:flex-row  justify-start lg:justify-between items-start">
                    <div className="text-start">
                      <button className="px-6 py-1 border-2 text-[#fff] bg-secondaryColor hover:text-[#fff] hover:bg-primaryColor transition-all rounded-md lg:px-7 lg:py-4 font-medium text-base">
                        EXPLORE OUR MENU
                      </button>
                    </div>

                    <div className="flex flex-row justify-between items-center gap-2 ml-14 mt-4 lg:ml-0  ">
                      <div className="flex flex-row justify-between items-center relative">
                        <Image
                          src={CoffeeImg1}
                          alt=""
                          className="absolute left-[-60px] z-20 w-[54px]"
                        />

                        <Image
                          src={CoffeeImg2}
                          alt=""
                          className="absolute left-[-30px] z-10  w-[54px]"
                        />

                        <Image src={CoffeeImg3} alt="" className=" w-[54px]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-normal font-BakildaHistori text-primaryColor">
                          1200+
                        </h3>
                        <p className="font-normal text-base text-primaryColor font-ValueSansPro opacity-[0.6]">
                          Tasty Variant Coffee
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" lg:w-[750px] lg:h-[630px] mt-10">
                  <Image src={HeroImg} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
