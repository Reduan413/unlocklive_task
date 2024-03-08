"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import GalleryImage1 from "../assets/image/Gallery-Image-1.png";
import GalleryImage2 from "../assets/image/Gallery-Image-2.png";
import GalleryImage3 from "../assets/image/Gallery-Image-3.png";
import GalleryImage4 from "../assets/image/Gallery-Image-4.png";
import GalleryImage5 from "../assets/image/Gallery-Image-5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Showcase = () => {
  const images = [
    {
      src: GalleryImage1?.src,
      width: 400,
      height: 348,
    },
    {
      src: GalleryImage2?.src,
      width: 830,
      height: 348,
    },
    {
      src: GalleryImage3?.src,
      width: 300,
      height: 348,
    },
    {
      src: GalleryImage4?.src,
      width: 536,
      height: 348,
    },
    {
      src: GalleryImage5?.src,
      width: 424,
      height: 348,
    },
  ];
  const lists = [
    { id: "1", title: "All" },
    { id: "1", title: "Burger" },
    { id: "1", title: "Drinks" },
    { id: "1", title: "Pizza" },
    { id: "1", title: "Dinner" },
    { id: "1", title: "Lunch" },
    { id: "1", title: "Cookies" },
    { id: "1", title: "Bakery" },
  ];
  const [activeList, setActiveLIst] = useState("All");
  const [index, setIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (index) => {
    setIndex(index), setIsOpen(true);
  };
  return (
    <div className="main-container mx-auto my-24 py-7 lg:py-24">
      <div className="text-center w-full lg:w-1/2 mx-auto ">
        <h4 className=" font-Lemon text-[#86371C] font-normal text-sm lg:text-base relative z-10 inline-block uppercase px-1 :absolute after:-bottom-2 after:left-0 after:right-0 after:m-auto after:-z-10 after:h-[1px] after:w-[80%] after:after-translate-y-2 after:bg-gradient-to-r from-[#FFDCAB] via-[#86371C] to-[#FFDCAB] after:content-['']">
        
          Showcase
        </h4>
        <h1 className="font-BakildaHistori text-primaryColor text-3xl lg:text-4xl mt-3">
          Our Chefs New Creations
        </h1>
        <p className="pt-3  font-normal text-sm lg:text-base text-primaryColor font-ValueSansPro">
          Behold the extraordinary creations born from the synergy of our users'
          ingenuity and the transformative power of AI, a testament to boundless
          innovation.
        </p>
      </div>

      <div className="w-full overflow-x-auto">
        <table
          className="m-auto mt-7 lg:mt-14"
          style={{ borderCollapse: "collapse", borderSpacing: 0 }}
        >
          <tr>
            {lists?.map((singleList, index) => (
              <td key={index} onClick={() => setActiveLIst(singleList?.title)}>
                <p
                  className={`${
                    activeList === singleList?.title
                      ? "border-2 text-secondaryColor"
                      : "border-0 text-[#031811]"
                  } px-5 py-2 font-ValueSansPro text-lg lg:text-xl border-secondaryColor  rounded-full cursor-pointer`}
                >
                  {singleList?.title}
                </p>
              </td>
            ))}
          </tr>
        </table>
      </div>
      <div className="mt-7">
        <div className="mt-7" style={{ display: "ruby" }}>
          {images?.map((singleImg, index) => (
            <div
              key={index}
              className="w-full lg:w-[auto] lg:h-[350px]  lg:p-3"
            >
              <Image
                onClick={() => handleClick(index)}
                src={singleImg?.src}
                width={singleImg?.width}
                height={350}
                alt=""
                className=" w-[100%] h-[100%]"
              />
            </div>
          ))}
        </div>
        {!!isOpen && (
          /* @ts-ignore */
          <Lightbox
            mainSrc={images[index].src}
            nextSrc={images[(index + 1) % images.length]}
            prevSrc={images[(index + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setIndex((index + images.length - 1) % images.length)
            }
            onMoveNextRequest={() => setIndex((index + 1) % images.length)}
          />
        )}
      </div>
    </div>
  );
};

export default Showcase;
