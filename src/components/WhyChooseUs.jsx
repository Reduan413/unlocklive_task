import Image from "next/image";
import ChoosingImg from "../assets/image/choosing-img.png";

const WhyChooseUs = () => {
  return (
    <div>
      <div
        className="main-container mx-auto flex flex-col justify-center lg:flex-row lg:justify-between items-center gap-6 py-8 lg:py-24"
        id="home"
      >
        <div className="w-full lg:w-[50%]  space-y-4 mt-14 lg:mt-0">
          <h4 className="relative font-Lemon text-[#86371C] font-normal text-sm lg:text-base pl-14 after:absolute after:bottom-0 after:top-0 after:left-0  after:m-auto after:z-10 after:h-[2px] after:w-12  after:bg-gradient-to-r from-[#FFDCAB] to-[#86371C] after:content-['']">
            Why Choose Us
          </h4>

          <h1 className="font-BakildaHistori text-primaryColor text-3xl lg:text-4xl ">
            Choosing Unlocklive, A Taste of Perfection
          </h1>
          <p className="pt-1 lg:pt-3  font-normal text-base text-primaryColor font-ValueSansPro">
            Unlocklive takes pride in the art of roasting, transforming raw
            coffee beans into a symphony of aromatic notes and rich flavors.
          </p>
          <div className="grid grid-flow-row lg:grid-flow-col gap-6 py-7">
            <div className="text-center px-2 py-4 border border-primaryColor border-opacity-[0.1] rounded-xl relative after:absolute after:border after:content-[''] after:w-[100%] after:h-[100%] after:border-primaryColor after:border-opacity-[0.1] after:rounded-xl after:top-0 after:left-0 after:hidden hover:after:block  after:origin-center after:rotate-[5deg]">
              <h1 className="text-[36px] lg:text-[44px] font-BakildaHistori text-primaryColor">
                20+
              </h1>
              <h3 className="text-lg lg:text-xl text-primaryColor font-AbrilDisplay">
                Years Experience
              </h3>
            </div>
            <div className="text-center px-2 py-4 border border-primaryColor border-opacity-[0.1] rounded-xl relative after:absolute after:border after:content-[''] after:w-[100%] after:h-[100%] after:border-primaryColor after:border-opacity-[0.1] after:rounded-xl after:top-0 after:left-0 after:hidden hover:after:block  after:origin-center after:rotate-[5deg]">
              <h1 className="text-[36px] lg:text-[44px] font-BakildaHistori text-primaryColor">
                100+
              </h1>
              <h3 className="text-lg lg:text-xl text-primaryColor font-AbrilDisplay">
                Master Chefs
              </h3>
            </div>
            <div className="text-center px-2 py-4 border border-primaryColor border-opacity-[0.1] rounded-xl relative after:absolute after:border after:content-[''] after:w-[100%] after:h-[100%] after:border-primaryColor after:border-opacity-[0.1] after:rounded-xl after:top-0 after:left-0 after:hidden hover:after:block  after:origin-center after:rotate-[5deg]">
              <h1 className="text-[36px] lg:text-[44px] font-BakildaHistori text-primaryColor">
                30+
              </h1>
              <h3 className="text-lg lg:text-xl text-primaryColor font-AbrilDisplay">
                Achievements
              </h3>
            </div>
          </div>
          <p className="pt-3  font-normal text-sm lg:text-base text-primaryColor font-ValueSansPro">
            Your choice to savor our coffee is an invitation to experience the
            epitome of craftsmanship, flavor, and dedication.
          </p>
          <div className="flex flex-row justify-between items-center">
            <button className="px-6 py-1 border-2 text-secondaryColor border-secondaryColor hover:text-white hover:bg-secondaryColor transition-all rounded-md lg:px-7 lg:py-4 font-medium text-base">
              Explore Our Menus
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[50%]  mt-10  flex justify-end relative">
          <Image
            src={ChoosingImg}
            alt=""
            className=" w-[100%] lg:w-[465px] lg:h-[530px] z-10"
          />

          <div className=" absolute border-lg w-[111%] h-[250px] lg:w-[500px] lg:h-[495px] z-0 rounded-t-[500px] rounded-b-[30px] border-2 border-primaryColor right-[-15px] bottom-[-20px] opacity-[0.1]"></div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
