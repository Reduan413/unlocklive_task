import Image from "next/image";
import CoffeeMenu1 from "../assets/image/coffee-menu-1.png";
import CoffeeMenu2 from "../assets/image/coffee-menu-2.png";
import CoffeeMenu3 from "../assets/image/coffee-menu-3.png";
import CoffeeMenu4 from "../assets/image/coffee-menu-4.png";

const Menu = () => {
  const coffeeMenus = [
    { id: 1, title: "Double Espresso x2", img: CoffeeMenu1 },
    { id: 2, title: "Hazelnut Heaven Latte", img: CoffeeMenu2 },
    { id: 3, title: "Salted Caramel Cold Brew", img: CoffeeMenu3 },
    { id: 4, title: "Coconut Cream Delight (Summer)", img: CoffeeMenu4 },
  ];
  return (
    <div className="main-container mx-auto my-24 py-8 lg:py-24">
      <div className="text-center  lg:w-1/2 mx-auto ">
        <h4 className=" font-Lemon text-[#86371C] font-normal text-sm lg:text-base relative z-10 inline-block uppercase px-1 after:absolute after:-left-14 after:top-0  after:bottom-0 after:m-auto after:-z-10 after:h-[1px] after:w-[50px] after:bg-gradient-to-r from-[#FFDCAB] to-[#86371C]  after:content-[''] before:absolute before:top-0 before:bottom-0 before:my-auto before:-right-14 before:-z-10 before:h-[1px] before:w-[50px]  before:bg-gradient-to-r before:from-[#86371C] before:to-[#FFDCAB]  before:content-['']">
          Coffee Menu
        </h4>
        <h1 className="font-BakildaHistori text-primaryColor text-3xl lg:text-4xl mt-3">
          Unlocklive Coffee Menu
        </h1>
      </div>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {coffeeMenus?.map((singleMenu) => (
          <div
            key={singleMenu?.id}
            className="group  flex flex-col lg:flex-row justify-between items-center w-full border border-[#270A05] border-opacity-10 py-5 px-4 lg:py-10 lg:px-9 rounded-xl"
          >
            <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
              <div className="w-[84px] h-[84px] border rounded-full border-dashed border-[#270A05]">
                <Image
                  src={singleMenu?.img}
                  alt=""
                  className="w-[100%] h-[100%] p-2"
                />
              </div>
              <div className="">
                <h4 className="font-AbrilDisplay font-semibold text-xl lg:text-2xl text-primaryColor">
                  {singleMenu?.title}
                </h4>
                <p className=" relative font-ValueSansPro text-xs lg:text-sm font-normal text-primaryColor w-full lg:w-[300px]">
                  There are many variations of passages Lorem Ipsum form
                  <hr className="absolute border border-dashed border-primaryColor border-opacity-[0.5] lg:w-[80px] 2xl:w-[200px] top-2 lg:-right-[80px] 2xl:-right-[200px]" />
                </p>
              </div>
            </div>
            <div className=" mt-4 lg:mt-0">
              <div className="border rounded-full border-dashed border-[#270A05] p-[2px]">
                {" "}
                <p className="bg-primaryColor group-hover:bg-[#86371C] group/item:bg-opacity-0  bg-opacity-5 p-3.5 rounded-full">
                  $10
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
