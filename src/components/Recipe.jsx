"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import RecipeImg1 from "../assets/image/recipe-img-1.png";
import RecipeImg2 from "../assets/image/recipe-img-2.png";
import RecipeImg3 from "../assets/image/recipe-img-3.png";

const Recipe = () => {
  const recipeDetails = [
    {
      id: 1,
      img: RecipeImg1,
    },
    {
      id: 2,
      img: RecipeImg2,
    },
    {
      id: 3,
      img: RecipeImg3,
    },
  ];
  return (
    <div className="bg-[#FFFAF2] relative lg:h-[670px]">
      <div className="main-container mx-auto  justify-between items-center py-7 lg:py-24">
        <div className="w-full lg:w-[35%]  space-y-4 mt-14 lg:mt-0">
          <h4 className="relative font-Lemon text-[#86371C] font-normal text-sm lg:text-base pl-14 after:absolute after:bottom-0 after:top-0 after:left-0  after:m-auto after:z-10 after:h-[2px] after:w-12  after:bg-gradient-to-r from-[#FFDCAB] to-[#86371C] after:content-['']">
            New Recipes
          </h4>
          <h1 className="font-BakildaHistori text-primaryColor text-3xl lg:text-4xl ">
            Taste Our New Recipe
          </h1>
          <p className="pt-1 lg:pt-3  font-normal text-sm lg:text-base text-primaryColor font-ValueSansPro">
            Malesuada cursus a tincidunt volutpat posuere lacinia. Congue
            malesuada lacus pharetra ut vel amet. Amet turpis suspendisse
            porttitor scelerisque amet dolor et. Nisi ac vitae tortor
            lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis
            nunc erat. Donec quis fermentum mattis aliquet gravida. Adipiscing
            eu sit ornare imperdiet viverra sit vel.
          </p>
          <p className="pt-3  font-normal text-base text-primaryColor font-ValueSansPro">
            There are many variations of passages of Lorem Ipsum form any
            injected humour, or randomised words which don &apos t look slightly
            believable.
          </p>
        </div>
        <div className="lg:absolute w-full lg:w-[60%] h-[400px] lg:h-[100%] top-0 right-0  flex py-12 lg:py-24 recipe-galley">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            navigation={true}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                spaceBetween: 0,
                width: 320,
                slidesPerView: 2,
              },
              375: {
                spaceBetween: 8,
                width: 300,
                slidesPerView: 1,
              },
              480: {
                spaceBetween: 8,
                width: 480,
                slidesPerView: 2,
              },
              540: {
                spaceBetween: 16,
                width: 540,
                slidesPerView: 2,
              },
              768: {
                width: 768,
                slidesPerView: 3,
              },
              1024: {
                width: 1024,
                slidesPerView: 4,
              },
            }}
            modules={[Navigation, Keyboard]}
            // className="mySwiper"
          >
            {recipeDetails?.map((singleRecipe) => (
              <SwiperSlide
                key={singleRecipe?.id}
                className="relative group rounded-[28px]"
              >
                <div className="hidden group-hover:flex z-10 w-[100%] h-[100%] top-0 absolute bg-gradient-to-t from-[#101113] to-[#10111319] rounded-[28px] p-6  border-8 border-opacity-10 border-[#ffffff96]">
                  <div className="pl-6 pb-16 items-end flex">
                    <ul className="text-white text-base list-disc">
                      <li>Pita bread or wraps</li>
                      <li>Toppings: tomatoes, tahini sauce, etc.</li>
                    </ul>
                  </div>
                </div>
                <Image
                  src={singleRecipe?.img}
                  width={500}
                  height={500}
                  className="w-[100%] h-[100%] rounded-[28px]"
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
