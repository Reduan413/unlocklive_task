import Image from "next/image";
import { IoPlayCircleOutline } from "react-icons/io5";
import PlayImg from "../assets/image/play-img.png"

const About = () => {
  return (
    <div>
      <div className="bg-[#FFFAF2]">
        <div className="relative main-container mx-auto  items-center py-16">
          <div className="absolute w-[75%] h-[200px] left-1 lg:left-12 right-0 m-auto lg:m-0 lg:w-[400px] lg:h-[300px] bg-secondaryColor top-0 rounded-b-lg">
            <div className="flex relative">
              <Image src={PlayImg} alt="" className="absolute w-[50%] -left-14 lg:top-14 lg:-left-7 right-0 m-auto top-5"/>
              <div className=" w-full mt-[40%] lg:mt-[50%] h-full flex justify-center items-center gap-6 text-[#F2EFDF]">
                <IoPlayCircleOutline size={60} />{" "}
                <p className="font-AbrilDisplay text-xl lg:text-2xl font-semibold">
                  Play Intro Video
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-row lg:grid-flow-col pt-[150px] lg:pt-0  lg:ps-[430px] ">
            <div
              className="text-center  relative z-10 inline-block px-1 font-semibold py-4 lg:py-0 uppercase after:absolute after:bottom-0 lg:after:bottom-2 after:right-0 after:-z-10 
            after:h-[2px] after:w-[90%] lg:after:h-[80%] lg:after:w-[2px] after:-translate-y-2 after:bg-[#270A05] after:opacity-[0.1] after:content-['']"
            >
              <h1 className="font-AbrilDisplay text-primaryColor text-xl lg:text-2xl">
                Our Opening Hours
              </h1>
              <p className="mt-2 lg:mt-6 text-sm lg:text-base font-ValueSansPro text-primaryColor">
                Mon - Sat: 07:00 - 18:00
              </p>
              <p className="text-sm lg:text-base font-ValueSansPro text-primaryColor">
                Only Sun: 09:00 - 14:00
              </p>
            </div>
            <div
              className="text-center  relative z-10 inline-block px-1 font-semibold py-4 lg:py-0 uppercase after:absolute after:bottom-0 lg:after:bottom-2 after:right-0 after:-z-10 
            after:h-[2px] after:w-[90%] lg:after:h-[80%] lg:after:w-[2px] after:-translate-y-2 after:bg-[#270A05] after:opacity-[0.1] after:content-['']"
            >
              <h1 className="font-AbrilDisplay text-primaryColor text-xl lg:text-2xl">
                Our Live Location
              </h1>
              <p className="mt-2 lg:mt-6 text-sm lg:text-base font-ValueSansPro text-primaryColor">
                848 A 28TH ST, Brooklyn <br /> New York, UK
              </p>
            </div>
            <div className=" text-center ">
              <h1 className="font-AbrilDisplay text-primaryColor text-xl lg:text-2xl">
                Book A Table Now
              </h1>
              <p className="mt-3 lg:mt-6 text-sm lg:text-base font-ValueSansPro text-primaryColor">
                +1 318-254-6849
              </p>
              <p className="text-sm lg:text-base font-ValueSansPro text-primaryColor">
                +1 452-754-6579
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
